import React from 'react';
import Student from '../components/Student';

const Students = () => {
    return (
        <div className='px-5 mt-8'>
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
                    <button className='py-2 rounded-md bg-indigo-700 text-white px-5'>Add Student</button>
                </div>
                <table className='w-full mt-5'>
                    <thead className='text-white text-lg'>
                        <tr className='text-left bg-indigo-700'>
                            <th className='py-3 pl-5'><input type="checkbox" /></th>
                            <th className='py-3'>ID</th>
                            <th className='py-3'>Name</th>
                            <th className='py-3'>Class</th>
                            <th className='py-3'>DOB</th>
                            <th className='py-3'>Parent Name</th>
                            <th className='py-3'>Mobile Number</th>
                            <th className='py-3'>Address</th>
                            <th className='py-3 pr-5'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <Student/>
                        <Student/>
                        <Student/>
                        <Student/>
                        <Student/>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Students;