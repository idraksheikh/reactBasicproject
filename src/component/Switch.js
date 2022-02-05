import React from 'react';

function Switch() {
    
  return (<>
        <div className='Switch bg-blue-300 h-screen flex justify-center items-center'>
             <label htmlFor='toggle'>
            <input type="checkbox" id="toggle" className='cursor-pointer h-32 w-64 rounded-full appearance-none bg-white border-2 border-black checked:bg-gray:600 transition duration-200' />
            </label> 
        </div>
</>
  );
}

export default Switch;