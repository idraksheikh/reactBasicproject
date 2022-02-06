import PostDetails from "./PostDetails";

// document.getElementById("show").addEventListener('Click',chngdisplay);
export default function postMessage()
{
    
    return (<>
        <div className="grid grid-cols-6 auto-cols-max gap-1">
        

        <div className="col-span-4">        
           <div className="bg-gray-300 h-screen"></div>
       </div>
       
        <div className="col-span-2">
            <PostDetails /> 
        </div>
        </div>
     </>  
     );
    
}