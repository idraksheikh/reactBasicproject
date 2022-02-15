import {useState , useEffect} from 'react';

export default function TextPost(){
    
    const [formInfo1,setFormInfo1]=useState({});  
    const objOld=JSON.parse(localStorage.getItem('postTextData'));
    const   ChangeForText=(event)=>{

        const {name , value} = event.target;
            setFormInfo1((oldArray)=>{            

            return{...oldArray,
                id:new Date().getUTCDate(),
                [name]:value,                
            }
        });
    }   
    
    
        const formInfo=(e)=>{
            e.preventDefault();
            let arrobj=[];
            if(objOld!=null){
                arrobj=[...objOld,formInfo1]
                
            }
            else{
                arrobj=[formInfo1];
            }
            localStorage.setItem('postTextData',JSON.stringify(arrobj));
           
        }
    
    
    return(
            <>
                <form  className=' text-left' action=""  >  
                <label className='text-sm'>User Name</label>    
                <input className='mt-5 ml-4 border-2 border-gray-600' type='text' value={formInfo1.uname} onChange={ChangeForText} name='username'/><br/>
                <label className='text-sm'>Post</label>    
                <textarea className='mt-5 ml-14 border-2 border-gray-600 align-middle'  value={formInfo1.post} onChange={ChangeForText} name='post'  >
               
                </textarea><br/>
                <button id='sub' className=" text-sm ml-28 mt-4  border-2  rounded-sm h-6 w-24 text-black border-black cursor-pointer bg-purple-100 bg-gradient-to-l from-gray-400 hover:text-black hover:bg-white hover:from-white hover:border-emerald-700" onClick={formInfo}>Submit</button>
            </form>
            </>
    );
}