import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoaderRing from '../components/LoaderRing';
import Student from '../components/Student';
import useStudent from '../hooks/useStudent';

const Students = () => {
    const [students, setStudents] = useState(null);
    const [studentCount] = useStudent()
    const [limit, setLimit] = useState('5');
    const [pages, setPages] = useState(0);
    const [pageCount, setPageCount] = useState(1)
    const naviagte = useNavigate();

    useEffect(()=>{
        axios.get(`http://localhost:5000/students?total=${limit}&page=${pages}`)
        .then(res => {
            const {all_students, estimate} = res.data;
            setStudents(all_students);
            const pageSize = Math.ceil(parseInt(estimate) / parseInt(limit));
            console.log(pageSize);
            setPageCount(pageSize);
        })
        .catch(err => console.log(err))
    }, [limit, pages])
    
    return (
        <div className='px-5 mt-8 mb-8'>
            <div>
                <h1 className='text-2xl font-semibold'>Students</h1>
            </div>
            <div className='flex space-y-2 lg:space-y-0 flex-col lg:flex-row justify-between mt-5'>
                <input className='h-10 w-60 outline-none px-3 rounded-md border-1' type="text" placeholder='Search by ID...'/>
                <input className='h-10 w-60 outline-none px-3 rounded-md border-1'type="text" placeholder='Search by Name...'/>
                <input className='h-10 w-60 outline-none px-3 rounded-md border-1'type="text" placeholder='Search by Phone...'/>
                <input className='h-10 w-60 outline-none rounded-md border-1 bg-indigo-700 text-white cursor-pointer'type="submit" value='Search'  />
            </div>
            <div className='mt-5 bg-white px-3 py-5 rounded-md'>
                <div className='flex justify-between items-center'>
                    <h3 className='text-xl text-semibold'>All Students</h3>
                    <button onClick={()=>naviagte('/add-student')} className='py-2 rounded-md bg-indigo-700 text-white px-5'>Add Student</button>
               </div>
               <div className='mt-5 mb-3'>
                <label htmlFor="entries">Show</label>
                <select onChange={(e)=> setLimit(e.target.value)} className='border-2 outline-none focus:border-indigo-700 py-1 px-2 ml-2' id='entries'>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                </select>
               </div>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
    <table className="w-full text-sm text-left">
        <thead className="text-xs text-gray-100 uppercase bg-indigo-700">
            <tr>
                <th scope="col" className="px-6 py-3">
                    <input className='h-4 w-4' type="checkbox" />
                </th>
                <th scope="col" className="px-6 py-3">
                    ID
                </th>
                <th scope="col" className="px-6 py-3">
                    Name
                </th>
                <th scope="col" className="px-6 py-3">
                    className
                </th>
                <th scope="col" className="px-6 py-3">
                    DOB
                </th>
                <th scope="col" className="px-6 py-3">
                    Parent Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Number
                </th>
                <th scope="col" className="px-6 py-3">
                    Address
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            { students ? students.map((student, index) => <Student key={index} student={student}/>) : <LoaderRing/>  }
           
        </tbody>
    </table>
</div>


                <div className='mt-5 flex justify-between'>
                    <p>Showing {1} to 10 of {studentCount} entries</p>
                    <div>
                    {[...Array(parseInt(pageCount))].map((value, index) => <button onClick={(e)=> setPages(index)} key={index} className={`border-2 border-indigo-700 px-2 mr-1 ${pages === index && 'bg-indigo-700 text-white'}`}>{index + 1}</button>)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Students;