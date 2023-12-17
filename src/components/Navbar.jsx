const Navbar = () => {
  return (
    <div className="bg-slate-800 sm:h-16 flex flex-col sm:flex-row items-center justify-between px-4">
      <div className="flex items-center gap-2">
        <img
          className="w-12 h-12 rounded-full object-cover sm:w-8 sm:h-8"
          src="https://images.pexels.com/photos/19479545/pexels-photo-19479545/free-photo-of-a-woman-in-jeans-and-a-leather-jacket-posing-for-a-photo.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
          alt=""
        />
        <span className="text-white text-sm sm:text-base">Ardit</span>
      </div>
      <button className="bg-slate-500 py-1 px-2 rounded-md shadow-md hover:bg-gray-200 focus:outline-none mt-2 sm:mt-0">
        Logout
      </button>
    </div>
  );
};

export default Navbar;
