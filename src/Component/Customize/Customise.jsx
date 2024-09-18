import React,{ useState , useCallback ,useEffect } from 'react'
import { LuRefreshCcw } from "react-icons/lu";
import "./customise.css"
const Customise = ({setPassword}) => {

  const [length , setLength ] = useState(8);
  const [ isCharacterAllowed , setIsCharacterAllowed] = useState(false);
  const [ isUpperCaseAllowed , setIsUsUpperCaseAllowed] = useState(true);
  const [ isLowerCaseAllowed , setIsLowerCaseAllowed] = useState(true);
  const [ isNumberAllowed , setIsNumberAllowed] = useState(false);
  const [ regenerate , setRegenrate ]  = useState(false)


  const generatePassword = useCallback(()=>{

    let pass="";

    let sampleSpace = "";
    const Lowercase = "qwertyuiopasdfghjklzxcvbnm";
    const Uppercase = "QWERTYUIOPASDFGHJKLZXCVBNM"
    const number = '1234567890';
    const character = "?!@#$%&:.,?!:;."

    if(isCharacterAllowed) sampleSpace+=character;
    if(isNumberAllowed) sampleSpace+=number;
    if(isUpperCaseAllowed) sampleSpace+=Uppercase;
    if(isLowerCaseAllowed) sampleSpace+=Lowercase;
    
    for(let i=0 ; i<length ; i++){
      const char = sampleSpace.charAt(Math.floor(Math.random()*sampleSpace.length))
      pass+=char;
    }
    setPassword(pass);
  },[isCharacterAllowed,isNumberAllowed,length,isLowerCaseAllowed,isUpperCaseAllowed])

  useEffect(()=>{
    generatePassword()
  },[isCharacterAllowed,isNumberAllowed,length,regenerate, isLowerCaseAllowed,isUpperCaseAllowed])

  

  return (

    <div className='customise-container'>
      <main>

        <div className="customise">
          
        <div className="check-div">
          <input defaultChecked={true} type="checkbox" onChange={()=>{setIsUsUpperCaseAllowed((prevValue)=>!prevValue)}} name="" id="uppercase" /> 
          <label htmlFor="uppercase">Uppercase [ A - Z ]</label>
        </div>

        <div className="check-div">
          <input defaultChecked={true} type="checkbox" onChange={()=>{setIsLowerCaseAllowed((prevValue)=>!prevValue)}} name="" id="lowercase" /> 
          <label htmlFor="lowercase">Lowercase [ a - z ]</label>
        </div>
          
        <div className="check-div">
          <input type="checkbox" onChange={()=>{setIsNumberAllowed((prevValue)=>!prevValue)}} name="" id="numeric" /> 
          <label htmlFor="numeric">Numeric [ 0 - 9]</label>
        </div>

        <div className="check-div">
          <input type="checkbox" onChange={()=>{setIsCharacterAllowed((prevValue)=>!prevValue)}} name="" id="symbol" /> 
          <label htmlFor="symbol">Symbol</label>
        </div>

        <div className='range'>
          <input type="range"  max={25} min={8} value={length}  onChange={(e)=>setLength(e.target.value)}/>
          <div className="range-number-box">
            {length}
          </div>
          
        </div> 
  </div>
     

      <button className='regenerate-btn' onClick={()=>{setRegenrate((prevValue)=>!prevValue)}}><LuRefreshCcw className='refresh-btn'/></button>
      
      </main>
    </div>
      
  )
}

export default Customise
