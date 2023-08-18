import React, { Component } from 'react';
import ReactDOM from 'react-dom';


// пропс-чилдрен - помещает елемент в компонент  динамически - управление из вне
const DynamicGreating = (props) => {
  return (
    <div className={'p-3 border border-' + props.color}>
      {/* {props.children} */}
      {
        React.Children.map(props.children, (child) => {
          return (
            React.cloneElement(child, { className: 'shadow p-3 m-3 border rounded' })
          )
        })
      }
    </div>
  )
}
// рендер-пропс -- из вне компонента визивать его рендер
const Message = (props) => {
  return (
    <h2>The counter is {props.counter}</h2>
  )
}

class Counter extends Component {
  state = {
    counter: 0
  }

  addCounter = () => {
    this.setState(({ counter }) => ({
      counter: counter + 1
    }))
  }

  minusCounter = () => {
    this.setState(({ counter }) => ({
      counter: counter - 1
    }))
  }

  render() {
    return (
      <>

        {this.props.render(this.state.counter)}
      </>
    )
  }
}



// Створення классового компонента с props

class WhoIAmClass extends Component {
  constructor(props) {
    super(props)
    this.state = {
      age: 50,
      position: ''
    }
  }

  nextYear = () => {
    this.setState(state => (
      {
        age: state.age + 1
      }
    ))
  }

  onCommitInput = (e) => {
    this.setState({
      position: e.target.value
    })
  }

  render() {
    const { name, surname, link } = this.props;
    const { age, position } = this.state;
    return (

      <div>
        <h2>Реалізація на класах</h2>
        <Button onClick={this.nextYear}>+++</Button>
        <h2>My name is {name},
          surname - {surname},
          my age - {age},
          my position -  {position}
        </h2>
        <a href={link}>My profile</a>
        <form>
          <span>Введить свою посаду</span>
          <input type="text" onChange={(e) => this.onCommitInput(e, 'Хованки')} />
        </form>
      </div>

    )
  }
}


class FormRef extends Component {
  // myRef = React.createRef();

  // componentDidMount() {
  //   this.myRef.current.focus();
  // }
  setInputRef = (elem) => {
    this.myRef = elem;
  }

  focusFirastTI = () => {
    if (this.myRef) {
      this.myRef.focus();
    }
  }

  render() {
    return (

        <Portal>
          <Msg />
        </Portal>

    )
  }
}

const Portal = (props) => {
  const node = document.createElement('div');
  document.body.append(node);

  return ReactDOM.createPortal(props.children, node);
}
const Msg = () => {
  return (
    <div
      style={{
        'width': '500px',
        'height': '140px',
        'background': 'red',
        'position': 'absolute',
        'right': '0',
        'bottom': '0'
      }}
    >
      Hello
    </div>
  )
}

function Profile({name, surname, link}) {
  return (
    <div>
       <h1 >My name is {name}, surname - {surname}</h1>

       <a href={link} >My profile</a>
    </div>
  )
}


function App() {
  return (
    <div className="App">
      <Wrapper>
        <FormRef />

        {/* связиваем два независимих компонента Message і  Counter*/}
        <Counter render={counter => (<Message counter={counter} />)} />
        <BootstrapElement
          left={
            <DynamicGreating color={'primary'}>
              {/* в компоненте пустие елементи h2, но в самом компоненте над ними виполняються действия, в нашем случае - добавляетьс новие класси для всех h2 */}
              <h2>DynamicGreating</h2>
              <h2>Hello world!</h2>
            </DynamicGreating>
          }
          // компонент передается в виде пропсов
          right={
            <DynamicGreating color={'success'}>
              <h2>Право</h2>
            </DynamicGreating>
          }
        />
        <WhoIAmClass name='Olena' surname='Class' link='https://ru.reactjs.org/docs/state-and-lifecycle.html' />
        <WhoIAmClass name='Victor' surname='Classnenko' link='https://ru.reactjs.org/docs/state-and-lifecycle.html' />
        <Profile  name='John' surname='Smith' link='facebook.com'/>
      </Wrapper>
      {/* <Field />
      <Btn />
      <WhoIAm name='Olena' surname={{ secondName: 'Beatu' }} link={() => { return 'google.com' }} />
      <WhoIAm name='Danya' surname={{ secondName: 'Strong' }} link={() => { return 'google.com' }} /> */}

    </div>
  );
}




export { Header };
export default App;
