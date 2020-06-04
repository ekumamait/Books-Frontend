import React from 'react';
import NavBar from '../layout/NavBar';
import './HomePage.scss';

function HomePage({props}) {
    return (
        <>
            <NavBar />
            <div className="background">
                <div className="description mt-5 mr-5">
                    <h1>Hi, we're Books.</h1>
                    The world's most-loved storytelling platform
                    Books connects a global community of 80 million readers and writers through the power of story.
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                    GET STARTED
                </button>
                </div> 
            </div>
        </>
    )
}

export default HomePage;