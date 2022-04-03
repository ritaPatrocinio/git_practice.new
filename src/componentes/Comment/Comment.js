import React, { useState, useEffect } from "react";
import './Comment.css'

export default function Comment({comment}) { 
    return (
    <div className="comDiv">
        <h6 style={{textAlign: 'justify'}}>{comment.author}</h6>
       <p style={{textAlign: 'justify'}}>{comment.body}</p> 
    </div>) 
}