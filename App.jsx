import { useState } from "react";
import Dat from './All';
import { Routes,Route ,NavLink} from "react-router-dom";

const App=()=>{
     
     const [values,updateValue]=useState({
          username:"",
          password:"",
          email:"",

     })
     const formSubmit= async (e)=>{
           e.preventDefault();
           alert("form is subs");

           try{
               const re=await fetch("http://localhost:500/router/register",{
                  method:"POST",
                  headers:{
                     "Content-Type":"application/json",
                  },
                  body:JSON.stringify(values),
               })

               if(re.ok){
                  alert("data is send succesful");
               }

           }

           catch(erro){
            console.log(erro," this is from app.js react");
           }
              
           
     }

     const setings=(pre)=>{
      const val=pre.target.value;
      const name=pre.target.name;
      console.log(val,"this is from react ",name)
      updateValue({

        ...values,
        [name]:val,
      })

     }


  return <>
  
     <form  onSubmit={formSubmit}>

            <label>enter your name  </label>
            
            <input type="text"      onChange={setings} placeholder="enter your username "    value={values.username} name="username" />
            <br/>
            <label>enter your password  </label>
            <input  type="password"    onChange={setings} placeholder="enter your passsword"  value={values.password} name="password"/>
            <br/>
            <label>enter your email id  </label>
            <input type="email"   onChange={setings}  placeholder="enter your email id "   value={values.email} name="email" />

               
               <button type="submit">submit</button>
      

     </form>

   

  
  </>

}


export default App;