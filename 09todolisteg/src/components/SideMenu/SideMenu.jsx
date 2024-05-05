import SideMenuHomeButton from "./SideMenuHomeButton";

const SideMenu = () => {
    return (
        <div className="w-1/6 border-r-2 p-4 flex flex-col items-center">
          <span className="text-[70px] pb-3 font-bold text-slate-800">ATS</span>
          <div className="flex flex-col items-start w-full text-xl font-semibold text-slate-700 mt-4 gap-2">
            <SideMenuHomeButton />
            <div className='w-full p-2 cursor-pointer hover:bg-gray-100 flex flex-row items-center justify-between'>Settings</div>
            <div className='w-full p-2 cursor-pointer hover:bg-gray-100 flex flex-row items-center justify-between'>About</div>
            <div className='w-full p-2 cursor-pointer hover:bg-gray-100 flex flex-row items-center justify-between'>Contact us</div>
          </div>
        </div>
    )
}

export default SideMenu;