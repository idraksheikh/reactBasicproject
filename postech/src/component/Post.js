import PostDetails from "./PostDetails";
import Switch from "./Switch";
// document.getElementById("show").addEventListener('Click',chngdisplay);
export default function postMessage()
{
    
    return (<>
        <div className="grid grid-cols-6 auto-cols-max gap-1">
        

        <div className="col-span-4">        
            <Switch/>
       </div>
       
        <div className="col-span-2">
            <PostDetails /> 
        </div>
        </div>
     </>  
     );
    
}