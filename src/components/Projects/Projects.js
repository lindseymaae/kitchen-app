import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom'
import projects from '../Projects/Projects'
import kitchen from '../Home/kitch1.jpeg'
import './Projects.css'

//Public Home page 
class Home extends Component {



    componentDidMount() {
        console.log('home component mounted');

    }


    render() {


        return (
            <main>
                <section className="home">
                    <h1>Projects</h1>
                    <article>
                        <p>Here you can view previous designs</p>
                    </article>
                </section>
                <section className="kitchens" id="kitchens">
                    <p>View our latest kitchen designs</p>
                            <figure>
                                <img alt="first kitchen example" src={kitchen} />
                                <figcaption><h3>Fake kitchen project <a >View</a></h3></figcaption>
                            </figure>
                            <br />
                    <figure>
                        <img alt="first kitchen example" src={kitchen} />
                        <figcaption><h3>Fake kitchen project <a href='#/projects'>View</a></h3></figcaption>
                    </figure>
                       
                </section>
                <br />
                <p>To begin a new project click <a href='https://www.google.com'>here</a></p>

            </main>
        )
    }
}




export default Home;
