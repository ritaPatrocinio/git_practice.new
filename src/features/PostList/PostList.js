import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Post from '../../componentes/Post/Post';
import Search from "../Search/Search";

import { selectAllPosts, isLoading, loadAllPosts, hasError } from "./postListSlice"; 
import {selectTerm} from '../Search/searchSlice';

export default function PostList() {
    const dispatch = useDispatch();
    const posts = useSelector(selectAllPosts);
    const loading = useSelector(isLoading);
    const searchTerm = useSelector(selectTerm) ;
    const error = useSelector(hasError)
    const term = searchTerm !== '' ? searchTerm : 'popular';

    useEffect(() => {
        dispatch(loadAllPosts(term))
    }, [dispatch, term])

    if(loading){
        return <p>Loading</p>
    }
    if(error){
        return <p>Failed to load posts.</p>
    }
    console.log(posts)

    return (
        <div>
            <Search></Search>
            {posts.map(post => <Post key={post.id} post={post}></Post>)}
        </div>
    )
}