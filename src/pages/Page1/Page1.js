import React, {Component} from 'react';
import image from './images/IMG_2602.JPG'

export default class Home extends Component {
    render() {
        return (
            <div>
                this is Page1!
                <img src={image}/>
            </div>
        )
    }
}