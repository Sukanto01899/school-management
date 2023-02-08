import React from 'react';
import useUpload from '../../hooks/useUpload';

const StudentForm = ({studentData, setStudentData, handleSubmit}) => {
    const {firstName, lastName, gender, dob, roll, bloodGroup, stuClass, section, admissionID, phone, address, parentName, img} = studentData;
    const {setFirstName, setLastName, setGender,setDob, setRoll, setBloodGroup, setStuClass, setSection, setAdmissionID, setPhone, setAddress, setParentName, setImg} = setStudentData

   const [uploadImage, imgLink, uploadStatus] = useUpload();

   if(imgLink){
    setImg(imgLink)
   }

    return (

        <>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 add-form-style mt-5'>
            {/* 1 */}
             
                <div>
                <label htmlFor="firstname">First name</label>
                <input onChange={(e)=> setFirstName(e.target.value)} type="text" name="firstname" id="firstname" value={firstName}/>
                </div>
                <div>
                <label htmlFor="lastname">Last name</label>
                <input onChange={(e)=> setLastName(e.target.value)} type="text" name="lastname" id="lastname" value={lastName}/>
                </div>
                <div>
                <label htmlFor="gender">Gender</label>
                <select name="gender" id="gender" onChange={(e)=> setGender(e.target.value)} value={gender}>
                    <option value="">Male</option>
                    <option value="">Female</option>
                    <option value="">Other</option>
                </select>
                </div>
             
             {/* 2 */}
             
                <div>
                <label htmlFor="dob">Date of birth</label>
                <input onChange={(e)=> setDob(e.target.value)} type="date" name="dob" id="dob" value={dob}/>
                </div>
                <div>
                <label htmlFor="roll">Roll number</label>
                <input onChange={(e)=> setRoll(e.target.value)} type="number" name="roll" id="roll" value={roll}/>
                </div>
                <div>
                <label htmlFor="bloodgroup">Blood group</label>
                <select onChange={(e)=> setBloodGroup(e.target.value)} name="bloodgroup" id="bloodgroup" value={bloodGroup}>
                    <option value="A+">A+</option>
                    <option value="B+">B+</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="o+">o+</option>
                    <option value="o-">o-</option>
                </select>
                </div>
             
             {/* 3 */}
             
                <div>
                <label htmlFor="class">Class</label>
                <select onChange={(e)=> setStuClass(e.target.value)} name="class" id="class" value={stuClass}>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                </select>
                </div>
             
             {/* 4 */}
             
                <div>
                <label htmlFor="section">Section</label>
                <select onChange={(e)=> setSection(e.target.value)} name="section" id="section" value={section}>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                </select>
                </div>
                <div>
                <label htmlFor="admissionid">Admission ID</label>
                <input onChange={(e)=> setAdmissionID(e.target.value)} type="text" name="admissionid" id="admissionid" value={admissionID}/>
                </div>
                <div>
                <label htmlFor="phone">Phone</label>
                <input onChange={(e)=> setPhone(e.target.value)} type="text" name="phone" id="phone" value={phone}/>
                </div>
                <div>
                <label htmlFor="parent">Parent Name</label>
                <input onChange={(e)=> setParentName(e.target.value)} type="text" name="parent" id="parent" value={parentName}/>
                </div>
                <div>
                <label htmlFor="address">Address</label>
                <input onChange={(e)=> setAddress(e.target.value)} type="text" name="address" id="address" value={address}/>
                </div>

                <div>
                <label className='text-lg font-semibold' htmlFor="file">Upload Student Photo (150px X 150px)</label>
                <input type="file" name="" id="" onChange={uploadImage}/>
                </div>
             </div>

             <div className='mt-4'>
                <button disabled={!uploadStatus} onClick={handleSubmit} className='border-2 bg-indigo-700 py-2 px-6 rounded-md text-white text-lg hover:bg-indigo-500'>Update</button>
             </div>
        </>
             
    );
};

export default StudentForm;