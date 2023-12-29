//React Context - в функціональних компонентах
// проблема: есть пропси, которіе по цепочки передаються в неколько компонент ниже по  иерархіі
// основнимт сущностями Context являються команди:
// create context
// provider - компонент которий передает(предоставляет) значание _currentValue ниже по іерархии
// consumer - комопент, которий позволяет получить значения и подписивается на изменение в контексте

// Таким образом создаем некое хранилище даних, которое передаем потом ниже по иерархии

import {useState, createContext, useContext} from 'react';
import {Container,  Button, Row, Col} from 'react-bootstrap';


// 1. создаем переменную, которая будет принимать результат функції CreateContext
// единственний аргумент функціі CreateContext - значение по умолчанию
const dataContext = createContext({
    mail: "name@example.com",
    text: 'some text'
});


// 2. через деструктурізацію получим обекти provider i consumer
const {Provider} = dataContext;




const  Form = (props) =>  {

        return (
            <Container>
                <form className="w-50 border mt-5 p-3 m-auto"
                      >
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                        <InputComponent/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                        <textarea
                            className="form-control"
                            value = {props.text}></textarea>
                    </div>
                </form>
            </Container>
        )
    }




const  InputComponent = () => {
    const context = useContext(dataContext);
        return(
            <input
                value={context.mail}
                type="email"
                className='form-control'
                placeholder="name@example.com"
            />
        )
    }

// для классового компонента назначем статичное ствойство contextType
// либо так    InputComponent.contextType = dataContext;
// либо в самом классе через static

function App() {
    const [data, setDate] = useState({
        mail: "name@example.com",
        text: 'some text'
    });

    return (
// 3. Оборачиваем в компонент Provider
// и задаем данние -  value, которое будем передавать по иерархии
// Важно: когда меняется обект контекста в setState (в нашем случае data) єто изменение отслеживается Provider
// и на него подписан Consumer, компонент внутри Consumer тоже будет перерендериваться
      <Provider value={data}>
        <Form  text={data.text}/>
        <Container>
            <Row className="justify-content-md-center">
                <Col  md="auto">
                <Button
                    className="mt-3"
                    onClick = {()=> setDate({
                    mail: "second@example.com",
                    text: "another text"
        })}
        >
            Click me
            </Button>
                </Col>
            </Row>

        </Container>
      </Provider>
    );
}

export default App;
