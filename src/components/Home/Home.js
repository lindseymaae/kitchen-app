import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom'
import projects from '../Rooms/Rooms'
import kitchen from './kitch1.jpeg'
import './Home.css'

//Public Home page 
class Home extends Component {

    
    
    componentDidMount() {
        console.log('home component mounted');

    }


    render() {


        return (
            <main>
                <section className="home">
                    <h1>Home</h1>
                    <article>
                        <p> Welcome to your personal Appliance Tracker</p>
                    </article>
                </section>
                <section className="kitchens" id="kitchens">
                    <p>Here you will find a list of the rooms you have added</p>
                   
                    <ul>
                        <p>View your appliances by room</p>
                        <li>
                           <figure>
                                <img alt="first kitchen example" src={kitchen} />
                                <figcaption><h3>Fake kitchen <a href='#/projects'>View</a></h3></figcaption>
                            </figure>
                        </li>
                    </ul>
                </section>
                <br />
                <p>To add a new room click <a href='#/create'>here</a></p>

            </main>
        )
    }
}




export default Home;
