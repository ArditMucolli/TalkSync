import Cam from "../images/cam.png";
import Add from "../images/add.png";
import More from "../images/more.png";
import Messages from "./Messages";
import Input from "./Input";

const Chat = () => {
  return (
    <div className="bg-zinc-300 w-3/4 h-screen flex flex-col">
      <div className="bg-slate-600 p-3 flex justify-between">
        <span className="text-lg font-bold text-white flex ml-3 items-center">
          Ardit
        </span>
        <div className="flex gap-3 mr-3">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <div className="bg-slate-200 flex-1 overflow-auto">
        <div className="min-h-[80%]">
          <Messages />
        </div>
      </div>
      <div className=" bg-white">
        <Input />
      </div>
    </div>
  );
};

export default Chat;
