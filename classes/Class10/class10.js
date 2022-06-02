import React from "react";

export default class Form extends React.Component{

    state = {
        title : "JavaScript",
        message : "this is text area",
        library : 'React',
        isAwesome : true
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })

        if(e.target.type === 'checkbox'){
            this.setState({
                isAwesome : e.target.checked
            })
        }else{
            console.log('nothing here')
        }
        // if(e.target.type === 'text'){
        //     this.setState({
        //         title : e.target.value,
        //     })
        // }else if(e.target.type === 'textarea'){
        //     this.setState({
        //         message : e.target.value
        //     })
        // }else if(e.target.type === 'select-one'){
        //     this.setState({
        //         library : e.target.value
        //     })
        // }else if(e.target.type === 'checkbox'){
        //     this.setState({
        //         isAwesome : e.target.checked
        //     })
        // }else{
        //     console.log('nothing here')
        // }
        
    }

    submitHandle = (e) =>{
        e.preventDefault();
        const {title,message,library,isAwesome} = this.state
        console.log(title, message, library, isAwesome)
    }

    render(){
        const {title,message,library,isAwesome} = this.state
        return(
            <form onSubmit={this.submitHandle}>
                <input type="text" name='title' placeholder="Enter text" value={title} onChange={this.handleChange}/>
                <br />
                <br />
                <textarea name="message" value={message} onChange={this.handleChange}></textarea>
                <br />
                <br />
                <select name="library" value={library} id="" onChange={this.handleChange}>
                    <option value="javascript">javascript</option>
                    <option value="React">React</option>
                </select>
                <br />
                <br />
                <input type="checkbox" checked={isAwesome} onChange={this.handleChange}/>
                {/* <p>{title}</p> */}
                <br />
                <br />
                <input type="submit" value='submit'/>
            </form>
        )
    }
}