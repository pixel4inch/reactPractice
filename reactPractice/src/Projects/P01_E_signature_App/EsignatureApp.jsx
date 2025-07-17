import React from 'react';
import MainTitle from '../../Components/MainTitle';

function EsignatureApp() {
    const [name, setName] = React.useState('');
    const [dob, setDob] = React.useState('');
  return (
    <>
      <MainTitle titletext='P01-E-Signature App'/>
        <br/>
         <div className='max-w-100 mx-auto px-5 py-2 bg-gray-100'>
            <p className='font-bold py-2'>Name: {name}</p>
             <p className='font-bold py-2'>DOB: {dob}</p>
              <hr/> 
        </div>
       
         <div className='gap-2.5 flex justify-around max-w-100 mx-auto px-5 py-2 bg-gray-100'>
          <input type='date' className='border bg-white'value={dob} onChange={e => setDob(e.target.value)} />
          <input type='text'className='border bg-white' value={name} onChange={e => setName(e.target.value)}/>
        </div>
    </>
  );
}

export default EsignatureApp;
