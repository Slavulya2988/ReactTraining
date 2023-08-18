// Обработчики собитий
// Обработчик собитий
// 1. стрелочная функція - shangeInput
// 2. обичная функція - тогда привязка через операцію bind - shangeInputV2
// 3. обичная функція - визов через анонімную струлочную функцію
import { Component } from 'react';
import './App.css';


class  WhoAmI extends Component  {
    constructor(props){
        super(props);
        this.state = {
            age: 27,
            position: ''
        }
        this.nextYearV1 = this.nextYearV1.bind(this);
    }

    nextYear = () => {
       this.setState({
        age: this.state.age + 1
       })
    }

    сhangeInput = (e, color) => {
        this.setState({
            position: e.target.value
        })
        console.log(color);
    }


    nextYearV1(){
        this.setState({
            age: this.state.age + 1
           })
    }

    nextYearV2(){
        this.setState({
            age: this.state.age + 1
           })
    }

    render(){
        const {name,  surname, link} = this.props;
        const {age, position} = this.state;
        return(
            <div>
                <button onClick={this.nextYear}>  + стрелочная функція </button>
                <button onClick={this.nextYearV1}>  +  метод bind </button>
                <button onClick={() => this.nextYearV2()}>  + метод анонимная стрлочная функція </button>
                <h2> My name is - {name},
                    surname - {surname},
                    my age - {age},
                    my position - {position}

                    </h2>
                <a href={link()}>Мой профіль</a>
                <form>
                    <span>Введить дані про посаду</span>
                    <input type="text" onChange={(e) => this.сhangeInput(e, 'some color')} />

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
