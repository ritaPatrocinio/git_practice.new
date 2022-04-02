import React, { useState, useEffect } from "react";
import './Comment.css'

export default function Comment({comment}) { 
    return (
    <div>
        <h6>{comment.author}</h6>
       <p>{comment.body}</p> 
    </div>) 
}