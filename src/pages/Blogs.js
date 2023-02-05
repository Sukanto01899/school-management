import React from 'react';

const Blogs = () => {
    return (
        <div className='px-5 my-8'>
            {/* Head Button */}
            <div className='flex lg:flex-row flex-col justify-between items-center'>
                <div className='space-x-5'>
                    <button className='py-2 px-4 border-2 rounded-md border-indigo-700 text-indigo-700 '>Active Blog</button>
                    <button className='py-2 px-4 border-2 bg-slate-200 rounded-md'>Pending Blog</button>
                </div>
                <div>
                    <button className='py-2 px-4 bg-indigo-700 text-white rounded-md'>Add New Blog</button>
                </div>
            </div>

            {/* All Blogs */}
            <div></div>
        </div>
    );
};

export default Blogs;