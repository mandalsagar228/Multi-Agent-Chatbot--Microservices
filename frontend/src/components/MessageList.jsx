import { useSelector } from "react-redux";
import MessageBubble from "./MessageBubble";

const MessageList = () => {
  const { selectedConversation } = useSelector((state) => state.conversation);
  const { messages } = useSelector((state) => state.message);

  return (
    <>
      <div
        className=" flex-1 overflow-y-auto px-6 py6 space-y-5 [scrollbar-width:none]
     [&::-webkit-scrollbar]:hidden"
      >
        {messages?.length == 0 || !selectedConversation ? (
          <div className=" h-full flex flex-col items-center justify-center gap-4 text-center">
            <div className=" flex flex-col gap1.5">
              <h1>Autochat</h1>
              <p>How can I help you</p>
              <p>
                {" "}
                Ask me anthing - code ,ideas,explanations or jsut a quick
                question
              </p>
            </div>
            <div className=" flex flex-wrap justify-center gap-2 mt-1">
              {" "}
              {[
                "Write a Netflix clone",
                " Explain a redis",
                " build a dashboard",
              ].map((s) => (
                <button className=" text-[12px] text-slate-400 bg-white/[0.04] border border-white/[0.07] px-3 py-1.5 rounded-lg hover:bg-white/[0.08] hover:text-slate-200 transition-colors duration-150">
                  {" "}
                  {s}{" "}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div>
            {" "}
            {messages?.map((msg, i) => (
              <div>
                <MessageBubble role={msg?.role} content={msg?.content} />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default MessageList;
