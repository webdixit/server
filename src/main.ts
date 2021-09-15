import { createServer } from "http";
import { Server, Socket } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:8080",
  },
});

let color = "white";

const changeColor = () => {
  if (color === "white") {
    color = "red";
  } else {
    color = "white";
  }
  return color;
};

io.on("connection", (socket: Socket) => {
  console.log("User connected on server!");

  socket.on("user-click", () => {
    const newColor = changeColor();

    io.emit("change-bg-color", newColor);
  });
});

httpServer.listen(3000, () => {
  console.log("Listening server on 3000");
});
