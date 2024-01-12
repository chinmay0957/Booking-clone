import React,{useState} from "react";

function MyFile(){
   
    const [Name,setNewName] = useState('welcome');
    const n =()=>{
    const New ="welcome to my page";
       setNewName(New);
    }

    const[Colors,setNewColor] = useState('red');
    const m = ()=>{

        const NewColor = 'green';
        setNewColor(NewColor);
       
    }
    return(
        <>
        
        <div style={{backgroundColor:Colors}}>
        <h1>{Name}</h1>
        <button onClick={n}>Click</button>
        <button onClick={m}>changebgcolor</button>
        </div>
        </>
    );
}

export default MyFile;