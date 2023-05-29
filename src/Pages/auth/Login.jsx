import {useState} from 'react';
import styles from './auth.module.scss';
import { Link, useNavigate  } from 'react-router-dom';
import Google from '../../images/Google.png';
import Card from '../../Components/card/Card';
import {
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signInWithPopup,
} from "firebase/auth";
import 'react-toastify/dist/ReactToastify.css';
import { auth } from "../../firebase/config";
import { toast, ToastContainer } from "react-toastify";



const Login = () => {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate();

    const loginUser = (e) => {
        e.preventDefault();
     
      signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            
          
            toast.success("Login Successful...");
            navigate('/');
           
          })
          .catch((error) => {
           
            toast.error(error.message);
          });
        console.log(email, password);
    };
    
     // Login with Gooogle
  const provider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        
        toast.success("Login Successfully");
        navigate('/');
       
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
              <h2>Login</h2>
              

              <form onSubmit={loginUser}>
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
              <button type="submit" className="--btn --btn-primary --btn-block">
                Login
                  </button>
                  <div className={styles.links}>
                <Link to="/reset">Reset Password</Link>
              </div>
              <p>------ or ------</p>
         
                  </form>
                 
              <button
              className="--btn --btn-danger --btn-block" onClick={signInWithGoogle}>
                  <img src={Google} alt='Google'/> Login With Google
              </button>
                <span className={styles.register}>
                   <p>Don't have an account?</p>
                    <Link to="/register">Register</Link>
                </span>
          </div>
          </Card>
        </section>
        </>
  )
};

export default Login;