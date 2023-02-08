import axios from 'axios';
import React from 'react';
import { FiEdit, FiX } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Student = ({student}) => {
    const {_id, firstName, lastName, stuClass, dob, parentName, phone, address, img} = student;
    const navigate = useNavigate()
    const handleStudentUpdate = ()=>{
        navigate(`/update-student/${_id}`)
    }
    const handleStudentDelete = ()=>{
        console.log(_id)
        axios.delete(`http://localhost:5000/student/${_id}`)
        .then(res => {
            if(res.data.deletedCount === 1){
                toast.success(`Successfully deleted ${firstName + ' ' + lastName}`)
            }
        })
        .catch(err => console.log(err))
    }
    return (
        <>
            <tr class="bg-white">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    <input className='h-4 w-4' type="checkbox" />
                </th>
                <td title={_id} class="px-6 py-4">
                    {_id.substring(0, 8) + '...'}
                </td>
                <td class="px-6 py-4 flex items-center">
                <img className='w-[35px] h-[35px] ring-1 mr-3 rounded-full' src={img} alt="" />
                    <span>{firstName + ' ' + lastName}</span>
                </td>
                <td class="px-6 py-4">
                    {stuClass}
                </td>
                <td class="px-6 py-4">
                {dob}
                </td>
                <td class="px-6 py-4">
                    {parentName}
                </td>
                <td class="px-6 py-4">
                    {phone}
                </td>
                <td class="px-6 py-4">
                    {address}
                </td>
                <td class="px-6 py-4">
                <div className='flex space-x-5 text-xl'>
                <span onClick={handleStudentUpdate} className='cursor-pointer hover:bg-slate-100 p-2 rounded-full'><FiEdit/></span>
                <span onClick={handleStudentDelete} className='cursor-pointer hover:bg-slate-100 p-2 rounded-full'><FiX/></span>
                </div>
                </td>
            </tr>
        </>
    );
};

export default Student;