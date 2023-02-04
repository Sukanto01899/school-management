import React, { useState } from 'react';
import { CiCircleList, CiGrid41, CiMemoPad, CiSettings, CiShop, CiSquareChevRight, CiText, CiUser, CiViewTable, CiViewTimeline } from "react-icons/ci";
import { Outlet, useNavigate } from 'react-router-dom';

const Home = () => {
    const [open, setOpen] = useState(true);
    const navigate = useNavigate()
    const menus = [
        {name: 'Dashboard', icon: <CiGrid41/>},
        {name: 'Students', icon: <CiUser/>},
        {name: 'Teachers', icon: <CiText/>},
        {name: 'Department', icon: <CiShop/>, gap: true},
        {name: 'Subject', icon: <CiMemoPad/>},
        {name: 'Library', icon: <CiViewTable/>},
        {name: 'Blog', icon: <CiViewTimeline/>},
        {name: 'Setting', icon: <CiSettings/>, gap: true},
        {name: 'More', icon: <CiCircleList/>},
    ]
    return (
        <div className='flex'>
            {/* Side Bar */}
            <div className={`${open ? 'w-72' : 'w-0 lg:w-20'} duration-300  h-screen bg-indigo-700 relative`}>
                <div>
                    <CiSquareChevRight onClick={()=> setOpen(!open)} className={`absolute h-10 top-2 border-2 border-black cursor-pointer w-10 right-[-18px] bg-white ${open && 'rotate-180'}`}/>
                </div>
                <div className='flex items-center justify-center mt-3'>
                    <h1 className='text-white text-2xl'>{!open ? 'M' : 'Manager'}</h1>
                </div>
                <div className='mt-14 ml-5'>
                    <ul className='space-y-1'>
                    {menus.map((menu, index) => <li onClick={()=> navigate(`/${menu.name.toLowerCase()}`)}  key={index} className='flex items-center cursor-pointer hover:bg-indigo-600 py-5 px-3 rounded-md'>
                        <span className='text-2xl mr-5 text-white'>{menu.icon}</span>
                        <h3 className={`${!open && 'hidden'} duration-300 text-white`}>{menu.name}</h3>
                    </li>)}
                    </ul>
                </div>
            </div>

            {/* Home Page */}
            <div className='bg-[#e2e8f0] lg:ml-3 w-full'>
                <div className='flex justify-between items-center px-8 bg-white w-full h-12'>
                    <div>
                        <input className='border-2 outline-none py-1 px-2 rounded-md' type="text" placeholder='Search'/>
                    </div>
                    <div>
                        <h4>Sukanto</h4>
                    </div>
                </div>
                <div>
                <Outlet/>
                </div>
            </div>
        </div>
    );
};

export default Home;