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
        console.log('Clock component rendering') ;

        const {date,locale} = this.state ;
        return(
            <div>
                <h1>
                    <span>{date.toLocaleTimeString(locale)}</span>
                </h1>
                {/* <Button change={()=>this.handleClick("en-US")}></Button> */}
                <Button change={this.handleClick} formate = "en-US"></Button>
                {/* <button type="button" onClick={()=>this.handleClick("en-US")}>Click Here</button> */}


            </div>
        )
    }
}

export default Clock  ;