import {useState} from 'react';

export default function TextPost(){
    const [formInfo1,setFormInfo1]=useState({});  
    const   userChangeForText=(event)=>{

        setFormInfo1((oldArray)=>{
            
            return{...oldArray,
                id:oldArray.length,
                uname:event.target.value
            }
                
            
        });
        console.log();
        
    }
    const   postChangeForText=(event)=>{

        setFormInfo1((oldArray)=>{
            
            return{...oldArray,
                
                post :event.target.value
            }
                
            
        });
        console.log();
        
    }
    const formInfo=()=>{
        console.log(formInfo1);
    }
    return(
            <>
                <form  className=' text-left' action=""  >  
                <label className='text-sm'>User Name</label>    
                <input className='mt-5 ml-4 border-2 border-gray-600' type='text' value={formInfo1.uname} onChange={userChangeForText} /><br/>
                <label className='text-sm'>Post</label>    
                <textarea className='mt-5 ml-14 border-2 border-gray-600 align-middle'  value={formInfo1.post} onChange={postChangeForText}  >
               
                </textarea><br/>
                <button id='sub' className=" text-sm ml-28 mt-4  border-2  rounded-sm h-6 w-24 text-black border-black cursor-pointer bg-purple-100 bg-gradient-to-l from-gray-400 hover:text-black hover:bg-white hover:from-white hover:border-emerald-700" onClick={formInfo}>Submit</button>
            </form>
            </>
    );
}