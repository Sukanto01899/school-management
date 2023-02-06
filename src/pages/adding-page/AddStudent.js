import React, { useState } from 'react';
import axiosPrivate from '../../api/axiosPrivate';
import StudentForm from '../../components/info-form/StudentForm';

const AddStudent = () => {
    const [student, setStudent] = useState('');
    const [firstName, setFirstName] = useState('Sukanto');
    const [lastName, setLastName] = useState('');
    const [gender, setGender] = useState('');
    const [dob, setDob] = useState('');
    const [roll, setRoll] = useState('');
    const [bloodGroup, setBloodGroup] = useState('');
    const [stuClass, setStuClass] = useState('');
    const [section, setSection] = useState('');
    const [admissionID, setAdmissionID] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [parentName, setParentName] = useState('');
    const [img, setImg] = useState('');

    const handleAddNewStudent = ()=>{
        axiosPrivate.post('/student', {
            firstName,
            lastName,
            gender,
            dob,
            roll,
            bloodGroup,
            stuClass,
            section,
            admissionID,
            phone,
            address,
            parentName,
            img
        })
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
    
    return (
        <div className='px-5 mt-8 mb-8'>
        <div>
            <h1 className='text-2xl font-semibold'>New Students</h1>
        </div>
        
        <div className='mt-5 bg-white px-3 py-5 rounded-md'>
            <div className='flex justify-between items-center'>
                <h3 className='text-xl text-semibold'>Add Student Information</h3>
           </div>
           {/* form */}
           <StudentForm handleSubmit={handleAddNewStudent} studentData={{firstName, lastName, gender, dob, roll, bloodGroup, stuClass, section, admissionID, phone, address, parentName, img}} setStudentData={{setFirstName, setLastName, setGender,setDob, setRoll, setBloodGroup, setStuClass, setSection, setAdmissionID, setPhone, setAddress, setParentName, setImg}}/>
           {/* form end */}
        </div>
    </div>
    );
};

export default AddStudent;