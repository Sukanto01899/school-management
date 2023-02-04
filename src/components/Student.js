import React from 'react';
import { FiEdit, FiX } from "react-icons/fi";

const Student = () => {
    return (
        <>
            <tr className='border-b-2'>
                <td className='pl-5 border py-3'><input type="checkbox" /></td>
                <td className='py-3'>PRE3454</td>
                <td className='py-3'>Sukanto</td>
                <td className='py-3'>10A</td>
                <td className='py-3'>2 Feb 35345</td>
                <td className='py-3'>Sunil Das</td>
                <td className='py-3'>01860385185</td>
                <td className='py-3'>Kutubdia, coxbazaer</td>
                <td className='py-3 flex space-x-5'>
                <FiEdit/>
                <FiX/>
                </td>
            </tr>
        </>
    );
};

export default Student;