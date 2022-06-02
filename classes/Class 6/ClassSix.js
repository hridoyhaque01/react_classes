import React from 'react';
import ReactDom from 'react-dom';


const index = 0;

// function Clock({locale}){
//     return (
//         <h1 className='heading' tabIndex={index}>
//             <span className='time'>Hello {new Date().toLocaleTimeString(locale)}</span>
//             <img src="" alt="" />
//         </h1>
//     )
// }

// ReactDom.render(<Clock locale="bn-BD" />, document.getElementById('root'));



class Clock extends React.Component{
    render(){
        return (
            <h1 className='heading' tabIndex={index}>
                <span className='time'>Hello {new Date().toLocaleTimeString(this.props.locale)}</span>
                <img src="" alt="" />
            </h1>
        )
    }
}


ReactDom.render(<Clock locale='bn-BD'></Clock>,document.getElementById('root'))
