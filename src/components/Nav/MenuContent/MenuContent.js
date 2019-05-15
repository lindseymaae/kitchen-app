import React, { Component } from 'react'

import './MenuContent.css'
import Home from '../../Home/Home';

class MenuContent extends Component {
    constructor(props) {
        super(props)

    this.items = [<a href='#/home'>Home</a> , <a href='#/projects'>Existing Rooms</a>, <a href='#/create'>Create New Room</a>, <a href="#/addAppliance">Add Appliance</a>]
       
    }

    render() {
        return (
            <div className="menu">
                {this.items.map(i => <div className="menu-item" key={i}>
                    <a
                        // href="https://github.com/Middlerun/cheeseburger-menu"
                        onClick={this.props.closeCallback}
                        target="_blank">
                        {i}
                    </a>
                </div>)}

                <p className="hint">Click outside the menu to close it, or swipe it closed on touch device</p>
            </div>
        )
    }
}



export default MenuContent
