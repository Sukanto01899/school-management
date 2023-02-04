import React from 'react';
import { FcCurrencyExchange, FcDepartment, FcDonate, FcManager } from "react-icons/fc";
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {

    const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
    return (
        <div className='px-5'>
          <div>
            <h1>Welcome to Dashboard</h1>
          </div>
            {/* Head Data */}
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-5 mt-5'>
                <div className='main-data'>
                    <div>
                        <h3>Student</h3>
                        <h4>5646</h4>
                    </div>
                    <div>
                    <FcManager className='text-5xl'/>
                    </div>
                </div>
                <div className='main-data'>
                    <div>
                    <h3>Awards</h3>
                    <h4>5646</h4>
                    </div>
                    <FcDonate className='text-5xl'/>
                </div>
                <div className='main-data'>
                    <div>
                    <h3>Department</h3>
                    <h4>5646</h4>
                    </div>
                    <FcDepartment className='text-5xl'/>
                </div>
                <div className='main-data'>
                    <div>
                    <h3>Revenue</h3>
                    <h4>5646</h4>
                    </div>
                    <FcCurrencyExchange className='text-5xl'/>
                </div>
            </div>


            {/* Chart Data */}
            <div className='grid grid-cols-2 gap-10 mt-8'>

            {/* Chart */}
                <div className='bg-white px-4 py-6 rounded-md'>
                    <div>
                        <h3 className='font-semibold text-xl'>Overview</h3>
                    </div>
                <div >
                
                <LineChart
                 width={550}
                 height={300}
                 data={data}
                 margin={{
                   top: 5,
                   right: 30,
                   left: 20,
                   bottom: 5,
                 }}
                 >
                   <CartesianGrid strokeDasharray="3 3" />
                   <XAxis dataKey="name" />
                   <YAxis yAxisId="left" />
                   <YAxis yAxisId="right" orientation="right" />
                   <Tooltip />
                   <Legend />
                   <Line yAxisId="left" type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                   <Line yAxisId="right" type="monotone" dataKey="uv" stroke="#82ca9d" />
                 </LineChart>
      
                    </div>
                </div>
                <div>

            <div className='bg-white px-4  py-6'>

                {/* Student Bar Chart */}
                <div>
                    <h3 className='font-semibold text-xl'>Number of Students</h3>
                </div>
                    <BarChart
                     width={550}
                     height={300}
                     data={data}
                     margin={{
                       top: 5,
                       right: 30,
                       left: 20,
                       bottom: 5,
                     }}
                     >
                       <CartesianGrid strokeDasharray="3 3" />
                       <XAxis dataKey="name" />
                       <YAxis />
                       <Tooltip />
                       <Legend />
                       <Bar dataKey="pv" fill="#8884d8" />
                       <Bar dataKey="uv" fill="#82ca9d" />
                     </BarChart>
                    </div>
                </div>

                {/* Star Student */}
                <div className='bg-white'>
                    <div>
                    <h3>Star Students</h3>
                    </div>
                    <div className=''>
                        <table className='table-auto w-full'>
                            <thead>
                            <tr className='text-left'>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Marks</th>
                                <th>Percentage</th>
                                <th>Year</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>sj44nf</td>
                                <td>sj44nf</td>
                                <td>sj44nf</td>
                                <td>sj44nf</td>
                                <td>sj44nf</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Student Activity */}
                <div className='bg-white'>
                    <div>
                        <h3>Student Activity</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;