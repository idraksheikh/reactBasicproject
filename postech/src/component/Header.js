import logo from '../magnifying-glass.png';
import {Link} from 'react-router-dom';
export default function Header(){
    return (<>
       {/* <div className="heading">
            <div className="logo">
            <Link to="/" className="homelink">
            Pos<span className="part2">Tech</span> 
            </Link>
            </div>
            <nav className="navbar">
                <ul className="nav">
                    <li className="home">
                    <Link to="/" className="homelink">Home</Link>
                    </li>
                    <li className="aboutus">
                    <Link to="aboutus" className="aboutuslink">About Us</Link>
                    </li>
                    <li className="contactus">
                    <Link to="contactus" className="contactuslink">Contact Us</Link>
                    </li>
                </ul>
            </nav>
             <div className="searchbar" id="searchbar" name="searchbar"> 
            <input type="text" className="search my-5 border rounded-xl" placeholder="Search" />
            <img src= {logo} className="magnifying-glass my-6 " alt='magnifying-glass' />
            </div>
        </div>*/}

        <div className="h-15 flex bg-gray-300 sticky top-0 z-50">
            <div className="mt-2  ml-2  text-teal-600 text-4xl cursor-pointer">
            <Link to="/" className="no-underline">
            Pos<span className="text-gray-900 text-4xl">Tech</span> 
            </Link>
            </div>
            <nav className="navbar">
                <ul className="text-sm flex mt-6 ml-56 pl-56 cursor-pointer ">
                    <li className="home pl-5">
                    <Link to="/" className="no-underline text-teal-600  hover:border-b-2 border-teal-600">Home</Link>
                    </li>
                    <li className="aboutus pl-5">
                    <Link to="aboutus" className="no-underline text-teal-600 hover:border-b-2  border-teal-600">About Us</Link>
                    </li>
                    <li className="contactus pl-5 ">
                    <Link to="contactus" className="no-underline text-teal-600 hover:border-b-2  border-teal-600">Contact Us</Link>
                    </li>
                </ul>
            </nav>
            
            <input type="text" className="bg-gray-300 h-6 w-30 text-sm mx-0 my-5 ml-4 focus:outline-none" placeholder="Search" />
            <img src= {logo} className=" h-3 w-3 my-6 " alt='magnifying-glass' />
          
           
           
        </div>
        </>
        );
}