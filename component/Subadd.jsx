import React,{useState} from "react";
var NewVal = 0;
function Subadd(){
const [Val,SetNewVal] = useState('0');

const Add=()=>{
 if(NewVal<10){
    NewVal +=1; 
       SetNewVal(NewVal);
 }
       
}

const Sub =()=>{
   if(NewVal>0)
      {NewVal -=1;
        SetNewVal(NewVal);} 
}

return(
  <>

<button onClick={Add} style={{width:'70px',height:'20px', backgroundColor:'grey'}}>+</button>
<input type="number" value={Val}/>
<button onClick={Sub} style={{width:'70px',height:'20px', backgroundColor:'grey'}}>-</button>

</>
);

}


export default Subadd;