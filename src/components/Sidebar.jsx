import Navbar from "./Navbar";
import Search from "./Search";
import Chats from "./Chats";

const Sidebar = () => {
  return (
    <div className="bg-slate-100 dark:bg-slate-900 w-1/4 h-screen">
      <Navbar />
      <Search />
      <Chats />
    </div>
  );
};

export default Sidebar;
