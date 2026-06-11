import {Link} from 'react-router-dom';
import {useState} from 'react';
function Navbar(){
    const [isLoggedIn,setIsLoggedIn] = useState(false);
    const [name, setName] = useState('');
    function handleClick(){
        setIsLoggedIn(!isLoggedIn);
    }

    function handleInputBoxChange(){
        setName(event.target.value);
        // console.log(event.target.value);
    }


    return(
        <div
            style = {{
                display: 'flex',
                justifyContent: 'center',
                gap: '10px',
            }}
        >
            <input type="text" onChange = {handleInputBoxChange} />
            <Link to ="/contact">Contact Us</Link>
            <Link to = "/">Home</Link>
            <h2>His name is {name}</h2>
            <button onClick = {handleClick}>{isLoggedIn ? 'LogOut' : 'Login'}</button>
        </div>
    );
}
export default Navbar;