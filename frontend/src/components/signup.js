import React from "react";
import { useState,useEffect } from "react";
import { Link,useNavigate} from "react-router-dom";
import axios from "axios";
import '../Ui/signup.css'



const Signup=()=>{
    const[email,setEmail]=useState('');
    const[firstName,setfirst]=useState('');
    const[lastName,setlast]=useState('');
    const[password,setPassword]=useState('');
    const[contactNumber,setPhone]=useState('');
    const[loading,setLoading]=useState(false);
    const[successfully,setSucessfull]=useState('');
    const[error,setError]=useState('');

    const navigate=useNavigate();

    const handlesignup = (e) => {
        e.preventDefault(); // Prevent default form submission
        setLoading(true);
        const data = {
            email,
            firstName,
            lastName,
            password,
            contactNumber
        };
    
        axios.post('http://localhost:8000/api/v1/users', data)
            .then((response) => {
                setLoading(false);
                if (response.status === 200) {
                    setSucessfull("Account successfully created");
                    setTimeout(() => {
                        navigate('/eshop/signin');
                    }, 2000);
                }
            })
            .catch((error) => {
                setError(error.response.data);
                setLoading(false);
            });
    }
    
    
    

    return(
    <div>
<div className="signup">

    <div className="signup1">

    <form onSubmit={handlesignup} className="signupform">
    <h3 className="signboard">Sign Up</h3><br/>
       <label className="uplabel"> Email</label><br/>
       <input type="email" placeholder="email" value={email} className="signup-input" onChange={(e)=>setEmail(e.target.value) }/><br/>
       <label className="uplabel">Password</label><br/>
       <input type="password" placeholder="password" value={password}  className="signup-input" onChange={(e)=>setPassword(e.target.value)}/><br/>
       <label className="uplabel">Firstname</label><br/>
       <input type="Text" placeholder="Firstname" value={firstName}  className="signup-input"onChange={(e)=>setfirst(e.target.value)}/><br/>
       <label className="uplabel">LastName</label><br/>
       <input type="Text" placeholder="Lastname" value={lastName}  className="signup-input" onChange={(e)=>setlast(e.target.value)}/><br/>
       <label className="uplabel">Phone Number</label><br/>
       <input type="text" placeholder="contactNumberr" value={contactNumber}  className="signup-input" onChange={(e)=>setPhone(e.target.value)}/><br/>
       <button className="signup-button">Submit</button>
       
    </form>
    </div>
    {loading && <p>loading</p>}
       {error && <p>error:{error}</p>}
       {successfully && <p>{successfully}</p>}
         
</div>
    </div>
    )
}

export default Signup;