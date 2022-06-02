import React from "react";
import Button from "./Button";

class Clock extends React.Component {

    state = {
        date : new Date(),
        locale : "bn-BD"
    }
    
    componentWillUnmount(){
        clearInterval(this.counter)
    }

    componentDidMount(){
        this.counter = setInterval(()=> this.tick(),1000)
    }

    handleClick = (locale) => {
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
        // let button;
        // if(locale === "bn-BD"){
        //     button = (
        //     <Button change={this.handleClick} 
        //     locale = "en-US"></Button>
        //      ) ;
        // }else{
        //     button = (
        //         <Button change={this.handleClick} 
        //         locale = "bn-BD"></Button>
        //     ) ;
        // }
        return(
            <div>
                <h1>
                    <span>{date.toLocaleTimeString(locale)}</span>
                </h1>
                {locale === 'bn-BD' ? (
                <Button change={this.handleClick} locale = "en-US" same={false}></Button>
                )  :  (
                <Button change={this.handleClick} locale = "bn-BD" same></Button>
                )}
                {/* {button} */}
    
            </div>
        )
    }
}

export default Clock  ;