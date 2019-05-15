import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom'

import './NewProject.css'


class NewProject extends Component {

    componentDidMount() {
        console.log('project component mounted');

    }
   
    //auto expand textarea
   adjust_textarea(h) {
        h.style.height = "20px";
    h.style.height = (h.scrollHeight)+"px";
}



    render() {


        return (
            <div class="form-style-8">
            
                <h2>Add your room</h2>
                <form>
                    <input type="text" name="field1" placeholder="Name" />
                    <input type="email" name="field2" placeholder="Location (Ex. first floor)" />
                    <textarea placeholder="Notes" onKeyUp={this.adjust_textarea}></textarea>
                 
                </form>
            </div>
        )
    }
}




export default NewProject;
