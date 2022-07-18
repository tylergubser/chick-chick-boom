import React, { useEffect, useState } from 'react';
import Messages from "./Messages.js";

function NewsFeed() {
    const [posts, setPosts] = useState([])

    useEffect( () => {
    fetch("http://localhost:3000/posts")
    .then(resp => resp.json())
    .then(resp => setPosts(resp))
    },[])
  
  
    const post = posts.map( post => 
   <Messages post = {post}/> )

return(
    <div>
        <div>
            {post}
        </div>
    </div>
)


}

export default NewsFeed;