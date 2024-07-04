# Store client information and stocks
clients = {}
stocks = {}

def handle_client(client_socket, client_address):
    try:
        print(f"Connection established with {client_address}")
        client_name = client_socket.recv(1024).decode()
        clients[client_name] = client_socket

        while True:
            message = client_socket.recv(1024).decode()
            if message.lower() == 'exit':
                break
            elif message.lower() == 'list':
                send_stock_list(client_socket)
            elif message.startswith('add'):
                stock_name = message.split()[1]
                add_stock(stock_name)
                broadcast_message(client_name, f"Added stock: {stock_name}")
            elif message.startswith('delete'):
                stock_name = message.split()[1]
                delete_stock(stock_name)
                broadcast_message(client_name, f"Deleted stock: {stock_name}")
            else:
                broadcast_message(client_name, message)

    except Exception as e:
        print(f"Error with {client_address}: {e}")

    finally:
        del clients[client_name]
        client_socket.close()
        print(f"Connection closed with {client_address}")

def send_stock_list(client_socket):
    stock_list = "Stocks available:\n" + ", ".join(stocks.keys())
    client_socket.sendall(stock_list.encode())

def add_stock(stock_name):
    if stock_name not in stocks:
        stocks[stock_name] = 0

def delete_stock(stock_name):
    if stock_name in stocks:
        del stocks[stock_name]

def broadcast_message(sender, message):
    for client_name, client_socket in clients.items():
        if client_name != sender:
            try:
                client_socket.sendall(f"{sender}: {message}".encode())
            except:
                pass

def main():
    server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    server_address = ('127.0.0.1', 12345)

    try:
        server_socket.bind(server_address)
        server_socket.listen(5)
        print("Server is listening on", server_address)

        while True:
            print("Waiting for a client connection...")
            client_socket, client_address = server_socket.accept()
            client_thread = threading.Thread(target=handle_client, args=(client_socket, client_address))
            client_thread.start()

    except Exception as e:
        print("Error:", e)

    finally:
        server_socket.close()

if __name__ == "__main__":
    main()
