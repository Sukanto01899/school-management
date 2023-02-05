import React from 'react';
import GeneralSetting from '../components/settings-components/GeneralSetting';

const Settings = () => {
    return (
        <div className='px-5 my-8'>
            <div>
                <h1 className='text-2xl font-semibold mb-5'>Setting</h1>
            </div>
            {/* Button */}
            <div>
                <button className='py-2 px-4 bg-indigo-700 text-white rounded-md'>General Settings</button>
            </div>
            {/* Setting Form */}
            <div>
                <GeneralSetting/>
            </div>
        </div>
    );
};

export default Settings;