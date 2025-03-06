
import { useState } from "react";

import './sty.css'
//import {Configuration,OpenAiApi} from 'openai';
const Chat=()=>{




    const [va,upd]=useState();
    const [com,updat]=useState();
    const [state,setState]=useState();
    const [ne,up]=useState("");



    const he=(pre)=>{
        const name=pre.target.name;
        const v=pre.target.value;
        upd(v)

    }

    const fin=async(e)=>{
        e.preventDefault();
        const send=va+" "+"into"+state;
        try{
            
            const res=await fetch(`http://localhost:500/router/chat/${send}`,{
                method:"GET"
            })
            if(res.ok){
            const data=await res.json();
            console.log(data," i am user");
            updat(data);
            }
            
        }
        catch(erro){
            console.log(erro, " this is from erro");
        }
    }


    
     const hand=(e)=>{

        setState(e.target.value);
        
        
     }

    return <>
           <div className="container">
            <h1 className="heading">Translator</h1>
            <div className="io">
                <form  onSubmit={fin}>
                      <textarea type="text"  onChange={he} placeholder=  {`type "your text" + into + "your language"`}  name={"in"} value={va}  />
                                   
                      <select name="select" id="se"  onChange={hand} >
                            <option value=" ">None</option>
                            <option value="hindi">Hindi</option>
                            <option value="English">English</option>
                            <option value="Spanish">Spanish</option>
                            <option value="German">German</option>
                            <option value="French">French</option>
                            <option value="Marathi">Marathi</option>
                        </select>    

                      <button type="submit">submit</button>                  
                      <h1>{com?com.mess:" "}</h1>
                </form>
            </div>

           </div>
          


          


    </>
}


export default Chat;