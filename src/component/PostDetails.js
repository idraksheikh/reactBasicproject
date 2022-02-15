import '../css/PostDetails.css';
import '../css/Switch.css';
import {useState} from 'react';
import TextPost from './TextPost';
import ImagePost from './ImagePost';
export default function PostDetails(){
    const [flag,setFlag]=useState(0);
    const [opt,setOpt]=useState("Image");
   
    
    // console.log(text);
    const chngdisplay=()=>{   
        document.getElementById("postinfo").style.display='block';
    };    
    const chkflag=(event)=>{   
        if(event.target.checked) setFlag(1);
        else setFlag(0);
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
        <div className="text-sm text-center text-emerald-700 pt-2 h-screen bg-white  border-2 border-gray-600 border-y-0">
        <div className='border-b-2 border-gray-600 pb-2'>
        <span className='mt-24 text-black'>Click To Post</span> 
        <button id="show" onClick={chngdisplay} className=" text-sm ml-8  border-2  rounded-sm h-6 w-24 text-black border-black cursor-pointer bg-purple-100 bg-gradient-to-l from-gray-400 hover:text-black hover:bg-white hover:from-white hover:border-emerald-700" value="post">POST</button> 
        </div>

            <div className="hidden mt-2" id="postinfo">
            <label className='text-sm'>Image</label>
                    <div className='Switch  flex justify-center items-center'>
                        <label htmlFor='toggle-switch'>
                        <input type="checkbox" id="toggle-switch" className='cursor-pointer h-9 w-16 rounded-full appearance-none bg-white bg-opacity-5 border-2 border-emerald-700 checked:bg-white-100 transition duration-200 realtive '  value={flag} onChange={chkflag}/>
                        </label> 
                    </div>
            <label className='text-sm'>Text</label>

            <div className='hidden' id='frm1'> 
                <TextPost/>
            </div>
            <div className='' id='frm2'> 
                <ImagePost/>
            </div>
                <br/><label>{opt}</label> 
        </div>
        </div>
        </>
    );
}
