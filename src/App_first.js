import React, {Component} from 'react';
import { createPortal } from 'react-dom';
import {Container} from 'react-bootstrap';


class Form extends Component {
    state = {
        advOpen: false
    }

    componentDidMount() {
        setTimeout(this.handleClick, 5000)
    }

    handleClick = () => {
        this.setState(state => ({
            advOpen: !this.state.advOpen}))
    }


    render() {
        return (
            <Container>
                <form className="w-50 border mt-5 p-3 m-auto"
                      onClick={this.handleClick}
                style={{'overflow': 'hidden',
                        'position': 'relative'}}>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                        <input  type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    {
                        this.state.advOpen ?
                            <Portal>
                                <Msg/>
                            </Portal> : null
                    }

                </form>
            </Container>
        )
    }
}

const Portal = (props) => {
    const node = document.createElement('div');
    document.body.append(node);

    return createPortal(props.children, node );
}

const Msg = () => {
    return(
        <div
            style={{'width': '500px',
                    'height': '150px',
                    'backgroundColor': 'red',
                    'position': 'absolute',
                    'right': '0',
                    'bottom': '0'}}>
            Hello
        </div>
    )
}


class MyComponent extends React.Component {
    constructor(props) {
      super(props);

      this.inputRef = React.createRef();
    }

    render() {
      return <input type="text" ref={this.inputRef} />;  }

    componentDidMount() {
      this.inputRef.current.focus();  }
  }




function App() {
    return (
      <>
        <Form/>
        <MyComponent/>
      </>
    );
}

export default App;
