// Поля классов и static
// создание свойств без конструктора

import { Component } from 'react';
import './App.css';


class  WhoAmI extends Component  {
    // було так
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         age: 27,
    //         text_next: '+++'
    //     }
    // }
    //стало так: синтаксис полей класса - без конструктора
    state = {
                age: 27
            }

// варіант зміни состояния з учетом попереднього state
    prevYear = () => {
        this.setState( ({age}) => ({
            age: age  - 1
        }))
    }
// использование ключевого слова static
// использование метода без создания екземпляра класса називается статическим методом
   static onLog = () => {
        console.log('static metod')
    }
// поля классов дозовляют создавать не только методи но і свойства, когда для целого класса может бить одно свойство
    static logged = 'on';

    render(){
        const {name,  surname, link} = this.props;
        const {age} = this.state;
        return(
            <div>
                <button onClick={this.prevYear}>---</button>
                <h2>My name is - {name}, surname - {surname}, my age - {age}</h2>
                <a href={link}>Мой профіль</a>
            </div>
        )
    }

}


function  App() {
   return(
    <div className='App'>
        <WhoAmI name =  'Lena' surname = 'Khomenko' link = 'google.com'/>
        <WhoAmI name =  'Alex' surname = 'shepard' link = 'google.com'/>
    </div>


   )
}
;

WhoAmI.onLog();
console.log(WhoAmI.logged);
export default App;
