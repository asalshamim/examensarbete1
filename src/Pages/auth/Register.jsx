import { useState } from "react";
import styles from './auth.module.scss';
import { Link,  useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth";
import Card from '../../Components/card/Card';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { auth } from '../../firebase/config';


const Register = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");

  const navigate = useNavigate();

  const registerUser = (e) => {
    e.preventDefault();
    if (password !== cPassword) {
      toast.error("Passwords do not match.");
     
    }
    console.log(email, password, cPassword);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        toast.success('Registration Successful...')
        navigate('/login');

      })
      .catch((error) => {
        toast.error(error.message);
    
      });

    

  };
  return (<>
    <ToastContainer/>
      <section className={`container ${styles.auth}`}>
          <Card>
          <div className={styles.form}>
              <h2>Register</h2>
              

              <form onSubmit={registerUser}>
              <input
                type="text"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                
                
              />
              <input
                type="password"
                placeholder="Password"
                required
                value={password}
                  onChange={(e) => setPassword(e.target.value)}
                      />
                <input
                type="password"
                placeholder="Confirm Password"
                required
                value={cPassword}
                  onChange={(e) => setCPassword(e.target.value)}
              
              />
              <button type="submit" className="--btn --btn-primary --btn-block">
              Register
                  </button>
                
        
         
                  </form>
                 
             
                <span className={styles.register}>
                   <p>Already an account?</p>
                    <Link to="/login">Login</Link>
                </span>
          </div>
          </Card>
    </section>
    </>
  )
};

export default Register;