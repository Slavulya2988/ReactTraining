import { Component } from 'react';
import styled from 'styled-components'


const Header = styled.h2`
  font-size: 1.5em;
`
// Створення Styled Component
const Wrapper = styled.div`
  width: 600px;
  margin: 80px auto 0 auto;
`;
export const Button = styled.button`
    display: block;
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0 1em;
    padding: 0.25em 1em;
`;

const EmpItem = styled.div`
  padding: 20px;
  margin-bottom: 15px;
  border-radius: 5px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2)

`;

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
      <Wrapper>
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
      </Wrapper>
    )
  }
}


// в якості пропсів можна передавати будь що
// у прикладі name - просто строка
// surname - обєкт
// link - як функція
function App() {
  return (
    <div className="App">
      {/* <Field />
      <Btn />
      <WhoIAm name='Olena' surname={{ secondName: 'Beatu' }} link={() => { return 'google.com' }} />
      <WhoIAm name='Danya' surname={{ secondName: 'Strong' }} link={() => { return 'google.com' }} /> */}
      <WhoIAmClass name='Olena' surname='Class' link='https://ru.reactjs.org/docs/state-and-lifecycle.html' />
      <WhoIAmClass name='Victor' surname='Classnenko' link='https://ru.reactjs.org/docs/state-and-lifecycle.html' />
      {/* <div className='buttonGr'><Button>Styled Component</Button></div> */}
    </div>
  );
}


export { Header };
export default App;
