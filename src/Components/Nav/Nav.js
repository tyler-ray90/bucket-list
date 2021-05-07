import { Link } from 'react-router-dom';
 
const Nav = (props) => {
    return (
        <nav>
           <Link to='/'><h1>Bucket-List</h1></Link> 
           <ul>
               <Link to='/list'>List Page</Link>
           </ul>
        </nav>
    )
};

export default Nav;