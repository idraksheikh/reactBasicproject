import logo from '../magnifying-glass.png';
import {Link} from 'react-router-dom';
export default function Header(){
    return (<>
      

        <div className="h-15 flex bg-purple-100 bg-gradient-to-l from-gray-400 border-2  border-gray-600 sticky top-0 z-50 ">
            <div className="mt-2  ml-2  text-emerald-700  text-4xl cursor-pointer">
            <Link to="/" className="no-underline">
            Pos<span className="text-gray-900 text-4xl">Tech</span> 
            </Link>
            </div>
            <nav className="navbar">
                <ul className="text-sm flex mt-6 ml-96  cursor-pointer ">
                    <li className="home">
                    <Link to="/" className="no-underline  from-slate-300  hover:border-b-2 border-emerald-700from-slate-300">Home</Link>
                    </li>
                    <li className="aboutus pl-4">
                    <Link to="aboutus" className="no-underline  from-slate-300 hover:border-b-2  border-emerald-700from-slate-300">About Us</Link>
                    </li>
                    <li className="contactus pl-4 ">
                    <Link to="contactus" className="no-underline  from-slate-300 hover:border-b-2  border-emerald-700from-slate-300">Contact Us</Link>
                    </li>
                </ul>
            </nav>
            
            <input type="text" className="bg-white border-2 border-gray-600 rounded-sm h-7 p-1 w-25 text-sm mx-0 my-5 ml-3 border-r-0 focus:outline-none" placeholder="Search" />
            <img src= {logo} className=" h-7 w-7 my-5 border-2 border-gray-600 rounded-sm py-1 pl-1 pr-1 hover:border-emerald-700 hover:bg-white" alt='magnifying-glass' />
          
           
           
        </div>
        </>
        );
}