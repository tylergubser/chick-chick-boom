import React, { useState } from 'react';


function NewPost () {
const [comment, setComment] = useState("");


function handleSubmit(e) {
    e.preventDefault()
    const formData = new FormData();
        formData.append('comment', comment)
        fetch('http://localhost:3000/posts', {
            method: 'POST',
            body: formData
        })
        .then(resp => resp.json())
        .then(post => console.log(post))
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