import { MessageSquare } from "lucide-react";
import { useSelector } from "react-redux";

const Nav = () => {
  const { selectedConversation } = useSelector((state) => state.conversation);
  const { messages } = useSelector((state) => state.message);

  return (
    <>
      <div className=" h-14 flex items-center gap-2.5 px-5 border-b border-white/[0.06] bg-[#0d0f14]">
        <div className=" flex items-center justify-center rounded-lg bg-indigo-500/10 border border-indigo-500/10">
          <MessageSquare size={13} className=" text-indigo-400" />
        </div>
        <div>{selectedConversation?.title || "New Chaat"}</div>
        <div> {messages?.length} Messages</div>
      </div>
    </>
  );
};

export default Nav;
