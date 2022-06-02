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
        const {change,locale,same} = this.props ;
        return(
            <div>
                <button type="button" onClick={()=> change(locale)}>{locale === "bn-BD" ? 'change clock' : 'ঘড়ি পরিবর্তন করুন'}</button>
                {same && <p>hello world</p>}
            </div>
        )
    }
}

export default Button ;