import React, { useState } from 'react';


function NewPost () {
const [comment, setComment] = useState("");


function handleSubmit(e) {
    e.preventDefault()
}
return (

    <div>
        <label>
            <span>Comment</span>
            <input></input>
            <button type="button" onSubmit={handleSubmit}></button>
        </label>
        
    </div>
)

}

export default NewPost;