import React, { useState } from 'react';
import StudentForm from '../../components/info-form/StudentForm';

const UpdateStudent = () => {
    const [student, setStudent] = useState({})

    const studentUpdate = ()=>{}
    return (
        <div className='px-5 mt-8 mb-8'>
        <div>
            <h1 className='text-2xl font-semibold'>Update Students</h1>
        </div>
        
        <div className='mt-5 bg-white px-3 py-5 rounded-md'>
            <div className='flex justify-between items-center'>
                <h3 className='text-xl text-semibold'>Update Student Information</h3>
           </div>
           {/* form */}
           <StudentForm/>
           {/* form end */}
        </div>
    </div>
    );
};

export default UpdateStudent;