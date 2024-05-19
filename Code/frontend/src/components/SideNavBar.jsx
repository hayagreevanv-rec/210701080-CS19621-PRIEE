import { useContext, useState } from "react";
import { ChevronLeft, ChevronRight, LayoutDashboardIcon, HospitalIcon} from 'lucide-react';
import { createContext } from "react";

const SideBarContext = createContext();
const SideNavBar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(true);
    return (
        <div className={`flex h-fit bg-gray-200 ${isOpen ? "w-48" : "w-16"} transition-all duration-300`}>
            {/* Sidebar */}
            <div className={`bg-white border-r ${isOpen ? "" : "border-gray-300"} w-full flex flex-col`}>
                {/* Sidebar Header */}
                <div className="flex items-center justify-between p-4 h-14">
                    <HospitalIcon className = "h-10 w-10" />
                    <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
                        {isOpen ? <ChevronLeft className= "w-6 h-6" /> : <ChevronRight className="w-4 h-4" />}
                    </button>
                </div>
                {/* Sidebar Content */}
                <SideBarContext.Provider value = {{isOpen}}>
                        <ul className="flex flex-col flex-1 overflow-hidden">
                        {children}
                    </ul>
                </SideBarContext.Provider>
            </div>
        </div>
    );
};

export default SideNavBar;

export const SideBarItem = ({text, icon}) =>{
    const {isOpen} = useContext(SideBarContext)
    return(
        <li className={`hover:bg-slate-500 hover:text-white overflow-hidden h-15 p-3 cursor-pointer ${isOpen ? "w-64" : "w-16" }`}>
            <div className="flex flex-row justify-start hover:scale-110 hover:transition-all">
                {icon}
                <span className={`overflow-hidden ${isOpen ? "" : "w-0"}`}>{text}</span>
            </div>
        </li>
    )
}