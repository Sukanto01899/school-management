import React from 'react';

const GeneralSetting = () => {
    return (
        <div className='flex justify-between space-x-6 mt-8'>
            {/* Website Basic Details */}
            <div className='bg-white p-3 w-full'>
                <h3 className='text-xl font-semibold border-b-2 pb-2'>Website Basic Details</h3>
                <div className='p-2'>
                    <form>
                        <div>
                            <label htmlFor="web-name">Website Name</label>
                            <input className='w-full border-2 outline-none px-3 h-12 text-lg' id='web-name' type="text" />
                        </div>
                        <div>
                            <label htmlFor="logo">Logo</label>
                            <input id='logo' type="file" />
                            <p>Recommended image size is 150px x 150px</p>
                        </div>
                        <div>
                            <label htmlFor="favicon">Favicon</label>
                            <input id='favicon' type="file" />
                            <p>Recommended image size is 16px x 16px or 32px x 32px <br/>Accepted formats: only png and ico</p>
                        </div>
                        <div>
                        <label htmlFor="rtl">RTL</label>
                            <input id='rtl' type="checkbox" />
                        </div>

                        <input type="submit" name="" id="" value='Update' />
                    </form>
                </div>
            </div>

            {/* Address */}
            <div className='bg-white p-3 w-full'>
                <h1>Address Details</h1>
                <div></div>
            </div>
        </div>
    );
};

export default GeneralSetting;