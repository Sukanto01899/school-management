import React from 'react';
import { FiEdit, FiX } from 'react-icons/fi';

const Teacher = () => {
    return (
        <>
             <tr class="bg-white">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    <input type="checkbox" />
                </th>
                <td class="px-6 py-4">
                    IPRE834
                </td>
                <td class="px-6 py-4 flex items-center">
                <img className='w-[35px] h-[35px] ring-1 mr-3 rounded-full' src="" alt="" />
                    <span>Sukanto</span>
                </td>
                <td class="px-6 py-4">
                    10
                </td>
                <td class="px-6 py-4">
                    Male
                </td>
                <td class="px-6 py-4">
                    Biology
                </td>
                <td class="px-6 py-4">
                    A
                </td>
                <td class="px-6 py-4">
                    01400424010
                </td>
                <td class="px-6 py-4">
                    Kutubdia
                </td>
                <td class="px-6 py-4">
                <div className='flex space-x-5'>
                <span><FiEdit/></span>
                <span><FiX/></span>
                </div>
                </td>
            </tr>
        </>
    );
};

export default Teacher;