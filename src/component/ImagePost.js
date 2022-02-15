import {useState} from 'react';

export default function ImagePost(){
    const [formInfo2,setFormInfo2]=useState({}); 
    const objOld=JSON.parse(localStorage.getItem('postImageData'));
    const   ChangeForImage=(event)=>{
        const {name,value}=event.target;
        setFormInfo2((oldArray)=>{
            return{...oldArray,
                id:new Date().getUTCDate(),
                [name]:value,                
            }
        });
        console.log();
        
    }
    const formInfo=(e)=>{
        e.preventDefault();
        let arrobj=[];
        if(objOld!=null){
            arrobj=[...objOld,formInfo2]
            
        }
        else{
            arrobj=[formInfo2];
        }
        localStorage.setItem('postImageData',JSON.stringify(arrobj));
       
    }
    
    return(
            <>
                 <form  className=' text-left' action=""  >  
                <label className='text-sm'>User Name</label>    
                <input className='mt-5 ml-3 h-7 w-44 border-2 border-gray-600' type='text' value={formInfo2.uname} onChange={ChangeForImage} name='username' /><br/>
                <label className='text-sm'>Post Image</label>    
                <input className='mt-5 ml-3 h-7 w-44 border-2 border-gray-600 ' type='file' value={formInfo2.post} onChange={ChangeForImage} title='Upload Image' name='imagead'/>

                <br/>
                <button id='sub' className=" text-sm ml-28 mt-4  border-2  rounded-sm h-6 w-24 text-black border-black cursor-pointer bg-purple-100 bg-gradient-to-l from-gray-400 hover:text-black hover:bg-white hover:from-white hover:border-emerald-700" onClick={formInfo}>Submit</button>
            </form>
            </>
    );
}