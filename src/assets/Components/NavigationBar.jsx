
import { useState } from "react";
import logo from "/tdg_logo.webp";
const NavigationBar = () => {
    const [height, setHeight] = useState(0);
    const changeNavHeight = (index, newHeight) => {
        if (index === 1) {
            if (height >= 280) {
                setHeight(0); // Set the height to 0 immediately if the current height is higher than the opened menu
            }
            else {
                setHeight(newHeight); // Set the height to the new height for the first button
            }
        }
        else {
            setHeight(newHeight); // Set the height based on the newHeight value for other cases
        }
    };

    const [dropDownMenu, setDropDownMenu] = useState([false, false]);
    const ToggleDropDownMenu = (index) => {
        const newDropDownMenu = dropDownMenu.map((_, i) => (index === i ? !dropDownMenu[i] : false));
        setDropDownMenu(newDropDownMenu); //if the index of the button and the 'i' variable is equal, the dropDownMenu's value goes from true to false and vice versa
    }
    return (
        <nav className="flex items-center p-3 w-full justify-between bg-gray-50">
            <div id="Logo"><a href="/"><img src={logo} alt="The Developer Guy Logo" style={{height: 50}} /></a></div>
            <div id="NavLinks" className="md:!h-auto overflow-hidden md:static absolute top-20 left-0 z-10 w-full transition-height duration-500 bg-inherit" style={{ height: `${height}px` }}>
                <ul className="flex md:gap-4 items-center md:flex-row flex-col w-full text-center justify-end h-auto">
                    <li className="md:w-auto w-full"><a href="" className="Nav-Link">Learn hub</a></li>
                    <li>
                        <button type="button" onClick={() => { ((dropDownMenu[0] ? changeNavHeight(3, 280) : changeNavHeight(3, 392)), ToggleDropDownMenu(0)) }} className="md:w-full Nav-Link box-border w-screen"> Courses v </button>
                        <div id="DropDownMenu-1" className={`${dropDownMenu[0] ? "!h-28 border-2 border-t-green-600" : ""} DropDown-Menu rounded-b-xl z-20`}>
                            <ul>
                                <li className="md:w-auto w-full"><a href="" className="Nav-Link">Python quickstart course</a></li>
                                <li className="md:w-auto w-full"><a href="" className="Nav-Link">Embedded dev fundamentals</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="md:w-auto w-full"><a href="" className="Nav-Link">Blog</a></li>
                    <li className="md:w-auto w-full"><a href="" className="Nav-Link">Downloads</a></li>
                    <li>
                        <button type="button" onClick={() => { ((dropDownMenu[1] ? changeNavHeight(2, 280) : changeNavHeight(2, 350)), ToggleDropDownMenu(1)) }} className="md:w-full Nav-Link w-screen"> Projects v </button>
                        <div id="DropDownMenu-2" className={`${dropDownMenu[1] ? "!h-15 border-2 border-t-green-600" : ""} DropDown-Menu right-0 rounded-b-xl z-10`}>
                            <ul>
                                <li className="md:w-auto w-full "><a href="" className="Nav-Link">Vacuum Tweezers / Pickup tool</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
            <div id="MenuToggle" className="md:hidden block">
                <button type="button" className="p-4" onClick={() => { height >= 280 ? changeNavHeight(1, 0) : changeNavHeight(1, 280) }}>
                    <span id="Line" className="w-6 h-1 bg-gray-900 transition-transform block rounded-lg"></span>
                    <span id="Line" className="w-6 h-1 bg-gray-900 transition-opacity block rounded-lg my-1"></span>
                    <span id="Line" className="w-6 h-1 bg-gray-900 transition-transform block rounded-lg"></span>
                </button>
            </div>
        </nav>
    );
};
export default NavigationBar;