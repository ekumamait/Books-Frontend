import React from 'react';
import NavBar from '../layout/NavBar';
import './HomePage.scss';

function HomePage({props}) {
    return (
        <>
            <NavBar />
            <div className="background">
                <div className="description">
                    <h1 className="text-warning book-header font-weight-bold">Hi, we're Books.</h1>
                    <h4 className="plates font-weight-normal">
                        The world's most-loved book reading platform.
                    </h4>
                    <h5 className="plates font-weight-light">
                        Books connects a global community of 80 million readers 
                        <br/>and writers through the power of story.
                    </h5>
                    <button type="button" class="btn btn-warning font-weight-bold button text-white" data-toggle="modal" data-target="#exampleModal1">
                        GET STARTED
                    </button>
                </div> 
            </div>
        </>
    )
}

export default HomePage;