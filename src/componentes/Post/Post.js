import React, { useState, useEffect } from "react";
import './Post.css'
import Comments from "../Comments/Comments";
import { FaArrowUp, FaArrowDown} from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import { MdOutlineModeComment } from 'react-icons/md';

export default function Post({post}) {
    const [likes, setLikes] = useState(0);
    const [comments, setComments] = useState([]);
    const [showComments, setShowComments] = useState(false);
    const ups = post.ups - post.downs + likes;

    const clickUp = () => likes === 1 ? setLikes(() => 0) : setLikes(() => 1);
    const clickDown = () => likes === -1 ? setLikes(() => 0) : setLikes(() => -1);

    const timeBetween = () => {
        const now = Date.now();
        const timeDif = Math.abs(+now.toString().split('').slice(0,10).join('') - post.created_utc);
        const daysBet = Math.ceil(timeDif/(60*60*24));
        const hoursBet = Math.ceil(timeDif/(60*60));
        return <p className="grey">{hoursBet < 24 ? hoursBet + ' hours ago' : daysBet + ' days ago'}</p>
    }

    const getComments = async () => {
        if(post.num_comments>0){
            const data = await fetch(`https://www.reddit.com/${post.permalink}.json`);
            const json = await data.json();
            console.log(json[1].data.children.map(comment => comment.data))
            setComments(() => json[1].data.children.map(comment => comment.data));
            setShowComments(!showComments)
        }
    }

    return (
        <div className="postDiv flex">
            <div>
                <FaArrowUp onClick={clickUp} style={likes===1 ? { color: '#001ed8' } : { color: 'gray' }} className='arrow' size={25}></FaArrowUp>
                <p className="grey">{ups/1000 > 1 ? Math.round(ups/1000)+'k' : ups}</p>
                <FaArrowDown onClick={clickDown} style={likes===-1 ? { color: '#001ed8' } : { color: 'gray' }} className='arrow' size={25}></FaArrowDown>
            </div>
            <div className="post">
                <a target="_blank" rel="noreferrer" href={`https://www.reddit.com/${post.permalink}`}><h4 className="title">{post.title}</h4></a>
                <p>{post.selftext}</p>
                { !post.media ? 
                post.preview ? 
                <div>
                    {!post.url.includes('png' ) && !post.url.includes('jpg') ? 
                    <a className="link" target="_blank" rel="noreferrer" href={post.url}>
                        <span>{post.url.split('').slice(12,50).join('') + '...'}
                        </span><FiExternalLink className="extLink"></FiExternalLink> 
                    </a> 
                    : '' }
                    <a target="_blank" rel="noreferrer" href={post.url}>
                        <img src={post.preview.images[0].source.url.replace('amp;', '')} alt='' />
                    </a>
                </div> 
                : ''  : 
                <img src={post.url} alt='' />}
                
                {post.media &&  post.secure_media.reddit_video? 
                <a target="_blank" rel="noreferrer" href={post.url}>
                    <video width="520" height="440" controls>
                        <source src={post.secure_media.reddit_video.scrubber_media_url} type="video/mp4"></source>
                    </video> 
                </a> : ''}
                
                <div className="flex space-between">
                <p className="grey">Posted by {post.author}</p>
                {timeBetween()}
                <div className="comments">
                <MdOutlineModeComment onClick={getComments} size={20} className="comIcon grey"></MdOutlineModeComment>
                <p onClick={getComments}>{post.num_comments}</p>
                </div>  
            </div>
            {showComments ? <Comments comments={comments}></Comments> : '' }
            </div>
        </div>
    )
}