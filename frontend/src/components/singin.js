import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import "../Ui/signin.css"

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [successfully,setSucessfull]=useState('')

    const navigate=useNavigate()

    const handleData = (e) => {
        e.preventDefault(); 

        const data = {
            email,
            password
        };

        setLoading(true);
        axios.post('http://localhost:8000/api/v1/auth', data)
            .then((response) => {
                if(response.status==200){
                    setSucessfull("Login sucessfull");
                    sessionStorage.setItem("token",response.data.token)

              setTimeout(() => {
                        setLoading(false);
                        navigate('/eshop/product')
                    }, 1000);

              
                    


                }
              
            })
            .catch((error) => {
                if (error.response && error.response.data) {
                    setError(error.response.data); 
                    setLoading(false)
                } else {
                    setError(error.message); 
                    setLoading(false)
            
            };
    });
   }

  const handlesignup=()=>{
    navigate('/eshop/signup')
   }

    return (
        <div>
            <div className="form">
              
              <div className="form1">
            <form onSubmit={handleData}>

               <h3 className="signboard"> Sign In</h3><br/><br/>
                <label htmlFor="email">
                    Email
                </label><br/>
                <input type="email" placeholder="Enter your Email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}  required/><br/><br/>
                <label htmlFor="password">
                    Password
                </label><br/>
                <input type="password" placeholder="Enter your Password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required /><br/>
                <button type="submit" className="signin-button">Submit</button>
                <div className="line">
                <hr className="left"/><span>New to eshop</span>
                <hr className="right"/>
          
                </div>
                <button id="create" onClick={handlesignup}> Create your Eshop account</button>

            </form>
            </div>
            <div className="message">
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {successfully&&<p>{successfully}</p>}

            </div>
            
          
            </div>
        </div>
    );
};


export default SignIn;
