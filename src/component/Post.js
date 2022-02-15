import PostDetails from "./PostDetails";

// document.getElementById("show").addEventListener('Click',chngdisplay);
export default function postMessage()
{
    
    return (<>
        <div className="grid grid-cols-6 auto-cols-max gap-0">
        

        <div className="col-span-4">        
           <div className="bg-white  border-2 border-gray-600 border-y-0 border-r-0 h-screen">
               
           </div>
       </div>
       
        <div className="col-span-2">
            <PostDetails /> 
        </div>
        </div>
     </>  
     );
    
}