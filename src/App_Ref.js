// Рефи в класових комонентах - дают возможность получить доступ к ДОМ елементам и реакт компонентам на після рендеринга
// Два метода об'явления рефов:
// 1. Прямое об'явление у конструкторе с помощью команди React.createRef()
// 2. Через колбек функція - колбек-рефи
import React, {Component}  from 'react';
import {Container} from 'react-bootstrap';


class Form extends Component {
   // Первий метод
//     myRef = React.createRef();

//    componentDidMount(){
//         this.myRef.current.focus();
//    }
   // второй метод - через функцію - таким образом можна создавать масив рефов на дом елементи
   setInputRef = (elem) => {
    this.myRef = elem;
   }

   componentDidMount(){
    if(this.myRef){
        this.myRef.focus();
    }

   }

render(){
    console.log(this.myRef);
    return (
        <Container  onClick={(e) => console.log(e.target)}>
            <form className="w-50 border mt-5 p-3 m-auto">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                    <input
                     //   ref={this.myRef}

                        ref = {this.setInputRef}
                        type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                    </div>
                    <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                    <textarea
                         onClick={(e) => console.log(e.target)}
                        className="form-control"
                        id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </form>
        </Container>

    )

}
}

function App() {
    return (
        <Form/>
    );
}

export default App;
