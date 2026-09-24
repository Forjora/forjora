import { Server } from "socket.io";

const initializeSocket = (server) => {

    const io = new Server(server, {
        cors: {
            origin: "*"
        }
    });

    io.on("connection", (socket) => {

        console.log("User connected:", socket.id);

        socket.on("joinRoom", (roomId) => {

            // console.log("Message received:", data);

            socket.join(roomId);

            console.log(
                `${socket.id} joined room: ${roomId}`
            );

        })
        
        socket.on("sendMessage", (data) => {
    
            console.log("Message received: ", data);
    
            io.to(data.roomId).emit("receieveMessage",  {
    
                senderId: socket.id,
                username: data.username,
                message: data.message,
                roomId: data.roomId
            });
            
        });
        socket.on("disconnect", () => {

            console.log(
                "User disconnected:",
                socket.id
            );

        });
    });
    

    return io;
};

export default initializeSocket;