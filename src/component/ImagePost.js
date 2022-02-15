import {useState} from 'react';

export default function ImagePost(){
    const [formInfo2,setFormInfo2]=useState({}); 
    const   userChangeForImage=(event)=>{

        setFormInfo2((oldArray)=>{
            
            return{...oldArray,
                id:oldArray.length,
                uname :event.target.value
            }
                
            
        });
        console.log();
        
    }
    const   postChangeForImage=(event)=>{

        setFormInfo2((oldArray)=>{
            
            return{...oldArray,
                
                post :event.target.value
            }
                
            
        });
        console.log();
        
    }
    
    return(
            <>
                 <form  className=' text-left' action=""  >  
                <label className='text-sm'>User Name</label>    
                <input className='mt-5 ml-3 h-7 w-44 border-2 border-gray-600' type='text' value={formInfo2.uname} onChange={userChangeForImage}  /><br/>
                <label className='text-sm'>Post Image</label>    
                <input className='mt-5 ml-3 h-7 w-44 border-2 border-gray-600 ' type='file' value={formInfo2.post} onChange={postChangeForImage} title='Upload Image' />

                <br/>
            </form>
            </>
    );
}