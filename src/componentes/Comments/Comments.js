import React, { useState, useEffect } from "react";
import './Comments.css';
import Comment from "../Comment/Comment";

export default function Comments({comments}) { 
    return comments.map(comment => <Comment comment={comment}></Comment>)
}