import React, { useState } from 'react'
import { MdContentCopy } from "react-icons/md";
import { FaAndroid } from "react-icons/fa";
import "./input.css"

const Input = ({value}) => {

    const [tooltipText, setTooltipText] = useState('Copy');
    const [showTooltip, setShowTooltip] = useState(false);

    const handleMouseEnter = () => {
        setShowTooltip(true);
    };

    const handleMouseLeave = () => {
        setShowTooltip(false);
        setTooltipText('Copy'); 
    };

    const handleCopyClick = () => {
        navigator.clipboard.writeText(value); 
        setTooltipText('Copied!'); 
        setTimeout(() => setTooltipText('Copy'), 2000); 
    };


  return (
    <div className='password-container'>

    <FaAndroid className='android-icon' />
    <div className='main-hero'>
      <input type="text" className='passwordBox'    value={  value || "Hmm... 🤔"  } readOnly />
      <button className="copy" 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleCopyClick}>
        <MdContentCopy className='copy-icon active' 
        />
      </button>
    </div>
    
    <div className="copy-icon-container">
        

        {showTooltip && (
            <div
                className="tooltip"
                style={{
                    
                }}
            >
                
                {tooltipText}
            </div>
        )}


    </div>

    </div>
  )
}

export default Input
