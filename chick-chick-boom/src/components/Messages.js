import React from "react";

function Messages({post}) {


return(
    <div>
        <div>
            <h1>{post.user}</h1>
            <h3>{post.message}</h3>
            <h3>{post.image}</h3>
        </div>
    </div>
)

}

export default Messages;