// Робота з управляемимі елменами
// стейт синхронізірован с интерфейсом
// единстенний неуправляем input єто інпут типа file
import { Component } from 'react';
import './App.css';


class  WhoAmI extends Component  {
    constructor(props){
        super(props);
        this.state = {
            age: 27,
            nameState: ''
        }
    }

    prevYear = () => {
        this.setState( ({age}) => ({
            age: age  - 1
        }))
    }


    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        const {name,  surname, link} = this.props;
        const {age, nameState, salary} = this.state;
        return(
            <div>
                <button onClick={this.nextYear}>  +++ </button>
                <h2> My name is - {name},
                    surname - {surname},
                    my age - {age}

                    </h2>
                <a href={link()}>Мой профіль</a>
                <form>
                    <span>Введить дані про посаду</span>
                    <input type="text"
                            onChange={this.onValueChange}
                            name = 'nameState'
                            value = {nameState}
                            />

                    <input type="text"
                             />

                </form>
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
