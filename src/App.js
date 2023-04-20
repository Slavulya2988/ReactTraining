import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import BootstrapElement from './bootstrapElement';
import { Form, Button } from 'react-bootstrap';

const Header = styled.h2`
  font-size: 1.5em;
`
// Створення Styled Component
const Wrapper = styled.div`
  width: 1000px;
  margin: 80px auto 0 auto;
`;
// export const Button = styled.button`
//     display: block;
//     background: transparent;
//     border-radius: 3px;
//     border: 2px solid palevioletred;
//     color: palevioletred;
//     margin: 0 1em;
//     padding: 0.25em 1em;
// `;

const EmpItem = styled.div`
  padding: 20px;
  margin-bottom: 15px;
  border-radius: 5px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2)

`;
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

        <button
          className="me-3 btn btn-primary"
          onClick={this.addCounter}>
          Add counter
        </button>


        <button
          className=' btn btn-success '
          onClick={this.minusCounter}>
          Minus counter
        </button>
        {this.props.render(this.state.counter)}
      </>
    )
  }
}

// прилкад створення компонента у вигляді класу
// class Field extends Component {
//   render() {
//     const holder = 'Type here'
//     const styledField = {
//       width: '300px'
//     }
//     return (
//       <input
//         style={styledField}
//         placeholder={holder}
//         type="text" />
//     )
//   }
// }
// приклад створення функціонального компонента
// const Field = () => {
//   const holder = 'Type here'
//   const styledField = {
//     width: '300px'
//   }
//   return (
//     <input
//       style={styledField}
//       placeholder={holder}
//       type="text" />
//   )
// }

// function Btn() {
//   const text = 'Log in'
//   const logged = false
//   const res = () => {
//     return text
//   }
//   return (
//     <button>{logged ? 'Enter' : res()}</button>
//   )
// }
// Створення  функціонального компонента с props
// в якості пропсів можна передавати будь що
// у прикладі name - просто строка
// surname - обєкт
// link - як функція
// function WhoIAm({ name, surname, link }) {
//   return (
//     <div>
//       <h2>'My name is {name}, surname - {surname.secondName}'</h2>
//       <a href={link()}>My profile</a>
//     </div>
//   )
// }


// Створення классового компонента с props

class WhoIAmClass extends Component {
  constructor(props) {
    super(props)
    this.state = {
      age: 50,
      position: ''
    }
  }
  // без отслеживания состояния
  // nextYear = () => {
  //   this.setState({
  //     age: this.state.age + 1
  //   })
  // }
  // с отслеживанием состояния
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


      <EmpItem>
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
      </EmpItem>

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
      <Form className='w-100 border mt-5 mb-5 p-3 m-auto'
        style={{
          'overflow': 'hidden',
          'position': 'relative'
        }}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={this.setInputRef}
            type="email"
            placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onClick={this.focusFirastTI}
            type="password"
            placeholder="Password" />
        </Form.Group>

        <Portal>
          <Msg />
        </Portal>
      </Form>
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


// в якості пропсів можна передавати будь що
// у прикладі name - просто строка
// surname - обєкт
// link - як функція
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
