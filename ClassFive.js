import React from 'react';
import ReactDom from 'react-dom';
// const element = React.createElement('h1', null, 'hello world');
// const element = <h1>Hello world </h1>;

// function element(user) {
//   if (user) {
//     return <h2>Hello {user}</h2>;
//   }
//   return <h2>user undefined..</h2>;
// }
// const element2 = <h1>welcome {element('hridoy')}</h1>
// console.log(element2)

const index = 0;

setInterval(() =>{
    const element = (
        <h1 className='heading' tabIndex={index}>
            <span className='time'>Hello {new Date().toLocaleTimeString()}</span>
            <img src="" alt="" />
        </h1>
    )
    ReactDom.render(element, document.getElementById('root'));
},1000)


/* 
# react a element change kora jai na 
# amra sudhu elemnt er value change korte parbo
# element change bolte ,, er property exp . className , tabIndex , type etc
# js a amra caile egula change korte partam

*/

/*

element2 = {
    type : h1,
    props : {
        children : ['welcome',{
            type : h2,
            props : {
                children :' hello world'
            }
        }]

    }
}


*/