import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom'

import './NewProject.css'


class NewProject extends Component {

    componentDidMount() {
        console.log('project component mounted');

    }


    render() {


        return (
            <div className="newProject">
           <h1>Create a New Project</h1>
            </div>
        )
    }
}




export default NewProject;
