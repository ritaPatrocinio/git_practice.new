import React from "react";
import './Comments.css';
import Comment from "../Comment/Comment";

export default function Comments({comments}) { 
    console.log('comments', comments)
    return comments.map(comment => <Comment key={comment.id} comment={comment}></Comment>)
}