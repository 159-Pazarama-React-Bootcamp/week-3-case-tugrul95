import React from 'react'
import "./index.css"

function index(props) {
    
    const { text } = props;

    return (
        <div className="label" >
            {text}
        </div>
    )
}
 
export default index
