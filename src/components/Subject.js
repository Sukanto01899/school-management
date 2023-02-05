import React from 'react';
import { FiEdit, FiX } from 'react-icons/fi';

const Subject = () => {
    return (
        <>
            <tr class="bg-white">
                <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    <input className='h-4 w-4' type="checkbox" />
                </td>
                <td class="px-6 py-4">
                    IPRE834
                </td>
                <td class="px-6 py-4">    
                    Mathmatic
                </td>
                <td class="px-6 py-4">
                    5
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

export default Subject;