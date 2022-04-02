import React, { useState, useEffect } from "react";
import './Post.css'
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { MdOutlineModeComment } from 'react-icons/md';

export default function Post({post}) {
    const [likes, setLikes] = useState(0);

    const clickUp = () => likes === 1 ? setLikes(() => 0) : setLikes(() => 1);
    const clickDown = () => likes === -1 ? setLikes(() => 0) : setLikes(() => -1);

    const timeBetween = () => {
        const now = Date.now();
        const timeDif = Math.abs(+now.toString().split('').slice(0,10).join('') - post.created_utc);
        const daysBet = Math.ceil(timeDif/(60*60*24));
        const hoursBet = Math.ceil(timeDif/(60*60));
        return <p className="grey">{hoursBet < 24 ? hoursBet+' hours ago' : daysBet+' days ago'}</p>
    }

    return (
        <div className="postDiv flex">
            <div>
                <FaArrowUp onClick={clickUp} style={likes===1 ? { color: '#001ed8' } : { color: 'gray' }} className='arrow' size={25}></FaArrowUp>
                <p className="grey">{post.ups + likes}</p>
                <FaArrowDown onClick={clickDown} style={likes===-1 ? { color: '#001ed8' } : { color: 'gray' }} className='arrow' size={25}></FaArrowDown>
            </div>
            <div className="post">
                <p>{post.title}</p>
                <img src={post.url} alt='' />
                {post.media &&  post.secure_media.reddit_video? 
                <video width="520" height="440" controls>
                    <source src={post.secure_media.reddit_video.scrubber_media_url} type="video/mp4"></source>
                </video> : ''}
                
                <div className="flex space-between">
                <p className="grey">Posted by {post.author}</p>
                {timeBetween()}
                <div className="comments">
                <MdOutlineModeComment size={20} className="comIcon grey"></MdOutlineModeComment>
                <p>{post.num_comments}</p>
                </div>
            </div>
            </div>
        </div>
    )
}