import React from "react";
import './Comment.css';
import Markdown from 'markdown-to-jsx';

export default function Comment({comment}) { 
    return (
    <div className="comDiv">
        <h6 style={{textAlign: 'justify'}}>{comment.author}</h6>
       <Markdown style={{textAlign: 'justify'}}>{comment.body}</Markdown> 
    </div>) 
}