import React, { Component } from 'react';
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
                        <p> Welcome to your personal Kitchen Designer</p>
                    </article>
                </section>
                <section className="kitchens" id="kitchens">
                    <p>View our latest kitchen designs</p>
                   
                    <ul>
                        <p>Designed in this app these kitchens came to life</p>
                        <li>
                            <figure>
                                <img alt="first kitchen example" src={kitchen} />
                                <figcaption><h3>Fake kitchen project</h3></figcaption>
                            </figure>
                        </li>
                    </ul>
                </section>
                <br />
                <p>To begin a new project click <a href='https://www.google.com'>here</a></p>

            </main>
        )
    }
}




export default Home;
