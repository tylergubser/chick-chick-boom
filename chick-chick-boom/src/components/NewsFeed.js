import React, { useState } from 'react';
import Messages from "./Messages.js";

function NewsFeed() {
    const [posts, setPosts] = useState([])

    fetch("http://localhost:3000/posts")
    .then(resp => resp.json())
    .then(resp => setPosts(resp))
  const post = posts.map( post => 
   <Messages post = {post}/> )

return(
    <div>
        <div>
            <h5>News Feed Goes Here</h5>
        </div>
    </div>
)


}

export default NewsFeed;