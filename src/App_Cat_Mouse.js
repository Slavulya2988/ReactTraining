import {Component}  from 'react';
import CatImg from './img/cat.jpg';
class Cat extends Component {
    render() {
      const mouse = this.props.mouse;
      return (
        <img src={CatImg} style={{ position: 'absolute', left: mouse.x, top: mouse.y }} alt='cat'/>
      );
    }
  }


  class Mouse extends Component {

    state = { x: 0, y: 0 };

    handleMouseMove = (event) => {
      this.setState({
        x: event.clientX,
        y: event.clientY
      });
    }

    render() {
        const {x, y} = this.state;
      return (
        <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
        <p>Текущее положение курсора мыши: ({x}, {y})</p>
          {/* <Cat mouse={this.state} /> */}
          {this.props.render({x, y})};
        </div>
      );
    }
  }


  class MouseTracker extends Component {
    render(){
        return(
            <>
             <h1>Перемещайте курсор мыши!</h1>
             <Mouse render = {mouse => (
                <Cat mouse= {mouse}/>
             )}/>
            </>

        )
    }
  }


function App() {
    return (
       <MouseTracker/>

    );
}

export default App;
