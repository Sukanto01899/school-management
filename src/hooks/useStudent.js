import axios from 'axios';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const useStudent = () => {
    const [students, setStudents] = useState(null);
    
    useEffect(()=>{
        axios.get('http://localhost:5000/students')
        .then(res => setStudents(res.data.estimate))
        .catch(err => toast.error(err.message))
    }, [])
    
    return [students]
};

export default useStudent;