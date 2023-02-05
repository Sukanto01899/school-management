import React from 'react';
import { FiEdit, FiX } from 'react-icons/fi';

const Department = () => {
    return (
        <>
            <tr class="bg-white">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    <input className='h-4 w-4' type="checkbox" />
                </th>
                <td class="px-6 py-4">
                    IPRE834
                </td>
                <td class="px-6 py-4">    
                    MCA
                </td>
                <td class="px-6 py-4">
                    Lois A
                </td>
                <td class="px-6 py-4">
                1992
                </td>
                <td class="px-6 py-4">
                    200
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

export default Department;