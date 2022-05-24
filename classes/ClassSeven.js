import React from 'react';


const index = 0;

class Clock extends React.Component{
    state = {date : new Date()} //  jodi props use na hoi
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         date : new Date()
    //     };
    // }
    componentDidMount(){
       this.clockTimer =  setInterval(() => this.tick(),1000)
    }

    componentWillUnmount(){
        clearInterval(this.clockTimer)
    }

    tick(){
        this.setState({
            date : new  Date()
        })
    }

    render(){
        return (
            <h1 className='heading' tabIndex={index}>
                <span className='time'>time is {this.state.date.toLocaleTimeString(this.props.locale)}</span>
                <img src="" alt="" />
            </h1>
        )
    }
}


export default Clock ;


// State is Javascript Object

// constructor by default props peye jai

// props  ke override korar khetre supar use kora hoyeche

// amara time ke nijeder moto kore change korte partam but amader  react er way te change korte hobe

// state ke change korte setState function call korte hobe er dara notun state toiri hobe

// componentDidMount eta jquery er document.ready er moto kaj kore orthat jokhon dom element browser a load howar por state change korar jonno componentDidMount ei method us kora hoi 

// browser load howar por componentDidMount autometic call hoi 

// jodi state change hoi tahole abar render call hobe 