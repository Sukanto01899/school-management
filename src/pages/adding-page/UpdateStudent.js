import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import StudentForm from '../../components/info-form/StudentForm';

const UpdateStudent = () => {
    const {studentid} = useParams()
    
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gender, setGender] = useState('');
    const [dob, setDob] = useState();
    const [roll, setRoll] = useState('');
    const [bloodGroup, setBloodGroup] = useState('');
    const [stuClass, setStuClass] = useState('');
    const [section, setSection] = useState('');
    const [admissionID, setAdmissionID] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [parentName, setParentName] = useState('');
    const [img, setImg] = useState('');

    useEffect(()=>{
        axios.get(`http://localhost:5000/student/${studentid}`)
        .then(res => {
            const student =  res.data
            setFirstName(student.firstName);
            setLastName(student.lastName);
            setGender(student.gender);
            setDob(student.dob);
            setRoll(student.roll);
            setBloodGroup(student.stuClass);
            setSection(student.section);
            setAdmissionID(student.admissionID);
            setPhone(student.phone);
            setAddress(student.address);
            setParentName(student.parentName);
            setImg(student.img)
        })
        .catch(err => console.log(err))
    }, [])

    const handleStudentUpdate = ()=>{
        axios.put(`http://localhost:5000/student/${studentid}`, {
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
        .then(res => {
            if(res){
                toast.success('Student successfully updated')
            }
        })
        .catch(err => {
            toast.error(err.message)
        })
    }
    return (
        <div className='px-5 mt-8 mb-8'>
        <div>
            <h1 className='text-2xl font-semibold'>Update Student</h1>
        </div>
        
        <div className='mt-5 bg-white px-3 py-5 rounded-md'>
            <div className='flex justify-between items-center'>
                <h3 className='text-xl text-semibold'>Update Student Information</h3>
           </div>
           <StudentForm handleSubmit={handleStudentUpdate} studentData={{firstName, lastName, gender, dob, roll, bloodGroup, stuClass, section, admissionID, phone, address, parentName, img}} setStudentData={{setFirstName, setLastName, setGender,setDob, setRoll, setBloodGroup, setStuClass, setSection, setAdmissionID, setPhone, setAddress, setParentName, setImg}}/>
        </div>
    </div>
    );
};

export default UpdateStudent;