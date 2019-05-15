import React, { Component } from 'react';
import kitchen from '../Home/kitch1.jpeg'
import './Rooms.css'

//Public Home page 
class Rooms extends Component {



    componentDidMount() {
        console.log('home component mounted');

    }


    render() {


        return (
            <main>
                <section className="home">
                    <h1>Rooms</h1>
                    <article>
                        <p>Here you can view each room in your house and the appliances in each</p>
                    </article>
                </section>
                <section className="kitchens" id="kitchens">
                    <p>View your created rooms</p>
                    <figure>
                        <img alt="first kitchen example" src={kitchen} />
                        <figcaption><h3>Fake kitchen<a >View</a></h3></figcaption>
                    </figure>
                    <br />
                    <figure>
                        <img alt="Second kitchen example" src={kitchen} />
                        <figcaption><h3>Fake Laundry Room <a href='#/rooms/bathroom'>View</a></h3></figcaption>
                    </figure>
                    <br />
                    <figure>
                        <img src={kitchen}/>
                        <figcaption><h3>Fake Bathroom <a href='#/projects'>View</a></h3></figcaption>
                    </figure>

                </section>
                <br />
                <p>To begin a new project click <a href='https://www.google.com'>here</a></p>

            </main>
        )
    }
}




export default Rooms;
