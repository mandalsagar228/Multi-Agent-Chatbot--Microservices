import { useDispatch, useSelector } from "react-redux";
import ChatInput from "./ChatInput";
import MessageList from "./MessageList";
import Nav from "./Nav";
import { useEffect } from "react";
import getMessage from "../../features/getMessage";
import { setMessages } from "../../redux/messageSlice";

const ChatArea = () => {
  const { selectedConversation } = useSelector((state) => state.conversation);
  const dispatch = useDispatch();
  useEffect(() => {
    const getMesg = async () => {
      if (selectedConversation) {
        const data = await getMessage(selectedConversation?._id);
        console.log("data from getmessage:", data);
        dispatch(setMessages(data));
      }
    };
    getMesg();
  }, [dispatch, selectedConversation]);
  return (
    <>
      <div className=" flex-1 flex flex-col">
        <Nav />
        <MessageList />
        <ChatInput />
      </div>
    </>
  );
};

export default ChatArea;
