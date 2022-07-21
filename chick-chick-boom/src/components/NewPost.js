import React, { useState } from 'react';


function NewPost () {
const [comment, setComment] = useState("");

return (

    <div>
        <label>
            <span>Comment</span>
            <input></input>
        </label>
        
    </div>
)

}

export default NewPost;