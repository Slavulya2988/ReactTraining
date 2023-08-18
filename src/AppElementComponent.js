// Елементи та компоненти у React
import { Component } from 'react';
import './App.css';


const Header = () => {
    const text = ('Hello world!').split();
    return ( <h2 className='tr'>{text}</h2>);
}

class Field extends Component  {
    render(){
        const styleField =
        {'width' : '300px'};
       return (
           <input
               type="text"
               placeholder='Type here'
               style = {styleField} />
       )
    }

}

const Button = () => {
    const label = () => {
        return 'Click here';
    }
    return(
        <button>{label()}</button>
    )
}

function  App() {
   return(
    <div className='App'>
         <Header/>
         <Field/>
         <Button/>
    </div>


   )
}
;

export default App;
export {Header} ;
