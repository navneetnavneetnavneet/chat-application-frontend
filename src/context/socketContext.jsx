import { createContext, useEffect, useState } from "react";
import { setOnlineUsers } from "../store/reducers/userSlice";
import { useDispatch, useSelector } from "react-redux";
import io from "socket.io-client";

export const SocketContext = createContext();

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);

  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.userReducer);

  // socket.io
  useEffect(() => {
    let newSocket;
    if (user) {
      newSocket = io("http://localhost:8080", {
        query: {
          userId: user._id,
        },
      });
      setSocket(newSocket);

      newSocket.on("getOnlineUsers", (onlineUsers) => {
        dispatch(setOnlineUsers(onlineUsers));
      });

      // Cleanup on component unmount or user change
      return () => {
        if (newSocket) {
          newSocket.disconnect();
        }
        setSocket(null);
      };
    } else if (socket) {
      socket.disconnect();
      setSocket(null);
    }
  }, [user, dispatch]);

  return (
    <SocketContext.Provider value={{ socket, setSocket }}>
      {children}
    </SocketContext.Provider>
  );
};
