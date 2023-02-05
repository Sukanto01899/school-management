import React from 'react';
import { FiEdit, FiX } from 'react-icons/fi';

const Book = () => {
    return (
        <>
            <tr class="bg-white">
                <td class="px-6 py-4">
                    IPRE834
                </td>
                <td class="px-6 py-4">
                    The Cool
                </td>
                <td class="px-6 py-4">
                    Bangla
                </td>
                <td class="px-6 py-4">
                    Science
                </td>
                <td class="px-6 py-4">
                    Sunil FDAS
                </td>
                <td class="px-6 py-4">
                    Book
                </td>
                <td class="px-6 py-4">
                    <span className='bg-lime-500 px-1 text-white rounded-sm text-[14px] font-semibold'>In Stock</span>
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

export default Book;