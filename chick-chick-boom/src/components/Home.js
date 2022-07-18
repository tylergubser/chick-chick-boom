import React from 'react';
import NewsFeed from './NewsFeed.js';
import Profile from './Profile.js'
function Home() {



return (

<div>
    <h5>Home</h5>
    <div>
        <NewsFeed/>
    </div>
    <div>
        <Profile/>
    </div>
</div>
)


}


export default Home;