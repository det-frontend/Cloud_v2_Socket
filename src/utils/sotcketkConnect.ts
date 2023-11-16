import { Server } from 'http';
import { Server as SocketIOServer, Socket } from 'socket.io';

 
function setupSocket(server: Server): SocketIOServer {
    const io: SocketIOServer = new SocketIOServer(server);

    io.on('connection', (socket: Socket) => {
        console.log('A user connected');

        socket.on('disconnect', () => {
            console.log('User disconnected');
        });
    });

    return io;
}

export default setupSocket;
