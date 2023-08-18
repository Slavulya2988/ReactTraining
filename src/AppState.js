// Состояния компонентов
// Состояние це обєкт, яки описує динамические речі які будуть у нас в компоненте
// setState - команда для изменения состояния, вона приймає обїект з новим состоянием
// Висновки:
// у компонента може бути внутренее состоняие, которое динамическі міняється
// воно може бути у классових і у функціональних компоентов
// state напрямую менять нельзя только чере команду setState
// setState - асинхронная команда тому якщо требя чітка послідовність то змінювати стейт нужно через колбек
// в команде setState моджна менять только ті стейт які нам потрібні остальні залишаться без змін
// setState - всегда визивает метод render
import { Component } from 'react';
import './App.css';


class  WhoAmI extends Component  {
    constructor(props){
        super(props);
        this.state = {
            age: 27,
            text_next: '+++'
        }
    }
// варіант зміни состояния без учета попереднього state
    nextYear = () => {
       this.setState({
        age: this.state.age + 1
       })
    }
// варіант зміни состояния з учетом попереднього state
    prevYear = () => {
        this.setState( ({age}) => ({
            age: age  - 1
        }))
    }
    render(){
        const {name,  surname, link} = this.props;
        const {age, text_next} = this.state;
        return(
            <div>
                <button onClick={this.nextYear}>  {text_next} </button>
                <button onClick={this.prevYear}>---</button>
                <h2>My name is - {name}, surname - {surname}, my age - {age}</h2>
                <a href={link()}>Мой профіль</a>
            </div>
        )
    }

}
//( {name, surname, link}) =>
const hrefForLink = () => {
    return "google.com"
}

function  App() {
   return(
    <div className='App'>
        <WhoAmI name =  'Lena' surname = 'Khomenko' link = {hrefForLink}/>
        <WhoAmI name =  'Alex' surname = 'shepard' link = {hrefForLink}/>
    </div>


   )
}
;

export default App;

// props - це обєкт
// в якості пропса може бути: строка, обєкт або функція
