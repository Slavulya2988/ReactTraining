// Render - props патерн
import React, { Component }  from 'react';
// import BootstrapElement from './bootstrapElement';
import './App.css';

// компонент типа - модального окна
const Message = (props) => {
    return(
        <h2>The counter is {props.counter}</h2>
    )
}

// компонент изменния счетчика

class Counter extends Component{
    state = {
        counter: 0
    }

    changeCounter = () => {
        this.setState(({counter}) => ({
            counter: counter + 1
        }))
    }
    render(){
        return (
            <>
                <button
                    className={'btn btn-primary'}
                    onClick={this.changeCounter}>
                        Click me
                </button>
                {this.props.render(this.state.counter)}
            </>
        )
    }

}


function  App() {
   return(
    <div className='wrapper'>
        <Counter render={counter => (
            <Message counter = {counter}/>
        )}/>
    </div>


   )
}


export default App;
