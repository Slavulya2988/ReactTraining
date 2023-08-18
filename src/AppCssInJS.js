// Створення Styled Component
// вендорние префікси ставятся автоматическі
// можно использовать значение пропсов
// можна использовать вложенность тегов как в SASS
// Стили в реакт
// Технологія SCC in JS  її представитель Styled Component
// https://styled-components.com/


import { Component } from 'react';
import styled from 'styled-components';
import './App.css';



const Wrapper = styled.div`
width: 600px;
margin: 80px auto 0 auto;
`;

const EmpItem = styled.div`
  padding: 20px;
  margin-bottom: 15px;
  border-radius: 5px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2)
`;
const Header = styled.h2`
  font-size: 1.5em;
`;

const Button = styled.button`
     display: block;
     padding: 5px 15px;
     background: gold;
     border: 1px solid rgba(0,0,0, 0.2);
     box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
     cursor: pointer;

 `;



class  WhoAmI extends Component  {
    constructor(props){
        super(props);
        this.state = {
            age: 27,
            position: ''
        }

    }


    nextYear = () => {
        this.setState({
         age: this.state.age + 1
        })
     }



    render(){
        const {name,  surname, link} = this.props;
        const {age, position} = this.state;
        return(
            <EmpItem>
    <Button onClick={this.nextYear}>  +++ </Button>

                <Header> My name is - {name},
                    surname - {surname},
                    my age - {age},
                    my position - {position}

                    </Header>
                <a href={link}>Мой профіль</a>

            </EmpItem>
        )
    }

}

function  App() {
   return(
    <Wrapper>
        <WhoAmI name =  'Lena' surname = 'Khomenko' link = 'google.com'/>
        <WhoAmI name =  'Alex' surname = 'shepard' link = 'google.com'/>
    </Wrapper>


   )
}


export default App;
