// import React from 'react';


function NewsFeed() {

    fetch("http://localhost:3000/posts")
    .then(resp => resp.json())
    .then(resp => setPosts(resp))
return(
    <div>
        <div>
            <h5>News Feed Goes Here</h5>
        </div>
    </div>
)


}

export default NewsFeed;