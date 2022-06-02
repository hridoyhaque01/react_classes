import React from "react";
import Button from "./Button";

export default class Clock extends React.Component{
    state = {
        date : new Date(),
        locale : 'bn-BD'
    }

    componentDidMount(){
        this.clockTimer = setInterval(()=> this.tick(),1000)
    }

    componentWillUnmount(){
        clearInterval(this.tick())
    }

    handleClick = (locale) =>{
        this.setState({
            locale,
        })
    }

    tick(){
        this.setState({
            date : new Date()
        })
    }

    render(){
        const {date,locale} = this.state ;
        return(
            <div>
                <h1>
                    <span>{date.toLocaleTimeString(locale)}</span>
                </h1>
                {locale === "bn-BD" ? <Button change={this.handleClick} locale="en-US" same={false} /> : <Button change={this.handleClick} same locale="bn-BD" /> }
                
            </div>
        )
    }
}