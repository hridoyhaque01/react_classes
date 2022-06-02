import React from "react";

export default class Button extends React.Component{
    render(){
        const {change,locale,same} = this.props ;
        return (
            <div>
                <button type="button" onClick={()=> change(locale)}>{same ?"change clock" : "ঘড়ি পরিবর্তন করুন" }</button>
            </div>
        )
    }
}