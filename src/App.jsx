import { useState } from 'react'
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import './App.css'
import app from './faitbase/fairbase.config';

const auth = getAuth(app);
/* const provider = new GoogleAuthProvider(); */
const GoogleProvider = new GoogleAuthProvider();

function App() {
  const [user,setuser]=useState(null);
 const handleGoogleSingnIn =() =>{
  signInWithPopup(auth,GoogleProvider)
  .then(result=>{
    const loggedUser =result.user
    setuser(loggedUser);
  })
  .catch(error=>{
    console.log(error);
  })
 }

  return (
    <div className="App">
      
      <h1>Fairbase + React</h1>
      <button onClick={handleGoogleSingnIn}>google singin</button>
     {user &&
       <div className="card">
        <p>name:{user.displayName}</p>
        <p>email:{user.email}</p>
        
       
        
       </div>
     }
      
    </div>
  )
}

export default App
