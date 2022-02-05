import '../css/PostDetails.css';
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
            setOpt("Text");
        }
        else{
            setOpt("Image");
        }
        
    };   
    return(<>
        <div className="text-sm text-center text-teal-600 bg-gray-300 p-2 h-screen">
        
        <span className='mt-24'>Click To Post</span> 
        <button id="show" onClick={chngdisplay} className=" bg-gray-300 text-sm ml-8  border-2 border-teal-600 rounded-md h-6 w-24 text-teal-600  cursor-pointer hover:border-black" value="post">POST</button> 
        

            <div className="hidden mt-2" id="postinfo">
            <label className='text-sm'>Image</label>
                      
                        <div className="flex justify-center">
                            <div className="form-check form-switch">
                                <input className="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-white bg-no-repeat bg-contain bg-gray-00 focus:outline-none cursor-pointer shadow-sm" type="checkbox" value={flag} role="switch" id="flexSwitchCheckDefault" onChange={chkflag}/>
                               
                            </div>    
                        </div>  
                    <label className='text-sm'>Text</label>
                <form action=""  >      
                    
                   
                    <br/>
                   
                    <label>{opt}</label> 
                </form>
        </div>
        </div>
        </>
    );
}
