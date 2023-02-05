import React from 'react';
import { FiEdit, FiX } from "react-icons/fi";

const Student = () => {
    return (
        <>
            <tr class="bg-white">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    <input className='h-4 w-4' type="checkbox" />
                </th>
                <td class="px-6 py-4">
                    IPRE834
                </td>
                <td class="px-6 py-4 flex items-center">
                <img className='w-[35px] h-[35px] ring-1 mr-3 rounded-full' src="" alt="" />
                    <span>Sukanto</span>
                </td>
                <td class="px-6 py-4">
                    10A
                </td>
                <td class="px-6 py-4">
                13 FEB 2001
                </td>
                <td class="px-6 py-4">
                    Sunil FDAS
                </td>
                <td class="px-6 py-4">
                    01860385185
                </td>
                <td class="px-6 py-4">
                    Chittagong
                </td>
                <td class="px-6 py-4">
                <div className='flex space-x-5 text-xl'>
                <span className='cursor-pointer hover:bg-slate-100 p-2 rounded-full'><FiEdit/></span>
                <span className='cursor-pointer hover:bg-slate-100 p-2 rounded-full'><FiX/></span>
                </div>
                </td>
            </tr>
        </>
    );
};

export default Student;