import React from 'react';
import { Circles } from 'react-loader-spinner';

const PageLoading = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
           <Circles
  height="80"
  width="80"
  color="#3F00FF"
  ariaLabel="circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
        </div>
    );
};

export default PageLoading;