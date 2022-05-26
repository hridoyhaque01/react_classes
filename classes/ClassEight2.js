import React from "react";

class Button extends React.Component {

    shouldComponentUpdate(nextProps){
        const {change : currentChange, locale : currentLocale} = this.props ;
        const {change : nextChange, locale : nextLocale} = nextProps ; 

        if(currentChange === nextChange && currentLocale === nextLocale){
            return false
        }else{
            return true
        }

    }

    render(){
        console.log('Button component rendering') ;
        const {change,formate} = this.props ;
        return(
            <button type="button" onClick={()=> change(formate)}>Click Here</button>
        )
    }
}

export default Button ;