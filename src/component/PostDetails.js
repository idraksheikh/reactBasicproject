import '../css/PostDetails.css';
import '../css/Switch.css';
import {useState} from 'react';

export default function PostDetails(){
    const [flag,setFlag]=useState(0);
    const [opt,setOpt]=useState("Image");
    
    // console.log(text);
    const chngdisplay=()=>{   
        document.getElementById("postinfo").style.display='block';
    };    
    const chkflag=(event)=>{   
        if(event.target.checked){
            setFlag(1);
        
        }
        else{
            setFlag(0);
        
        }
        if(flag===0){
            document.getElementById("frm1").style.display='block';
            document.getElementById("frm2").style.display='none';
            setOpt("Text");
        }
        else{
            document.getElementById("frm1").style.display='none';
            document.getElementById("frm2").style.display='block';
            setOpt("Image");
        }
        
    };   
    return(<>
        <div className="text-sm text-center text-teal-600 bg-gray-300 p-2 h-screen">
        
        <span className='mt-24'>Click To Post</span> 
        <button id="show" onClick={chngdisplay} className=" bg-gray-300 text-sm ml-8  border-2 border-teal-600 rounded-md h-6 w-24 text-teal-600  cursor-pointer hover:border-black" value="post">POST</button> 
        

            <div className="hidden mt-2" id="postinfo">
            <label className='text-sm'>Image</label>
                    <div className='Switch  flex justify-center items-center'>
                        <label htmlFor='toggle-switch'>
                        <input type="checkbox" id="toggle-switch" className='cursor-pointer h-8 w-16 rounded-full appearance-none bg-white bg-opacity-5 border-2 border-teal-600 checked:bg-gray-300 transition duration-200 realtive '  value={flag} onChange={chkflag}/>
                        </label> 
                    </div>
            <label className='text-sm'>Text</label>


            <form  className='hidden text-left' action="" id='frm1' >  
                <label className='text-sm'>User Name</label>    
                <input className='mt-5 ml-5 border-2 border-gray-600' type='text' value='' /><br/>
                <label className='text-sm'>Post</label>    
                <textarea className='mt-5 ml-16 border-2 border-gray-600 align-middle' value='' >

                </textarea><br/>
            </form>
            <form  className=' text-left' action="" id='frm2' >  
                <label className='text-sm'>User Name</label>    
                <input className='mt-5 ml-5 border-2 border-gray-600' type='text' value='' /><br/>
                <label className='text-sm'>Post Image</label>    
                <textarea className='mt-5 ml-5 border-2 border-gray-600 align-middle' value='' >

                </textarea><br/>
            </form>
                <br/><label>{opt}</label> 
        </div>
        </div>
        </>
    );
}
