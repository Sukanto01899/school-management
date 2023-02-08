import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { useState } from 'react';
import { v4 } from 'uuid';
import { storage } from '../firebase.init';

const useUpload = () => {
    const [file, setFile] = useState(null);
    const [imgLink, setImgLink] = useState('');
    const [uploadStatus, setUploadStatus] = useState(true)

    const uploadImage = (e)=>{
        setUploadStatus(false)
        setFile(e.target.files[0])
        if(file === null) return;
        const imageRef = ref(storage, `/images/${file.name + v4()}`)
        uploadBytes(imageRef, file)
        .then(res => getFileLink(res.metadata.fullPath))
        .catch(err => console.log(err))
    }
    
    const getFileLink = (filePath)=>{
        getDownloadURL(ref(storage, filePath))
        .then(url => {
            const xhr = new XMLHttpRequest();
            xhr.responseType = 'blob';
            xhr.onload = (event) => {
                const blob  = xhr.response
            };
            xhr.open('GET', url);
            xhr.send()
    
            setImgLink(url)
            setUploadStatus(true)
        })
        .catch(err => console.log(err))
    }

    return [uploadImage, imgLink, uploadStatus]
    
};

export default useUpload;