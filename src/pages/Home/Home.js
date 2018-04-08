import React, {Component} from 'react';
import {Button} from 'antd';
import './home.css';
// import { browserHistory } from 'react-router';
export default class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            num: 1,
        }
    }

    handleClick = () => {
        let {num} = this.state;
        num++;
        this.setState({
            num: num,
        }, () => {
            console.log(this.state.num);
        })
    }
    handleTransfer = () => {
        this.props.history.push('/page3');
    }
    render() {
        return (
            <div>
                <div className="home">
                    this is Home!
                </div>
                <Button onClick={this.handleClick}>+1</Button>
                <Button onClick={this.handleTransfer}>跳转</Button>
            </div>
        )
    }
}