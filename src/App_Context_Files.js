//React Context - в функціональних компонентах
// проблема: есть пропси, которіе по цепочки передаються в неколько компонент ниже по  иерархіі
// основнимт сущностями Context являються команди:
// create context
// provider - компонент которий передает(предоставляет) значание _currentValue ниже по іерархии
// consumer - комопент, которий позволяет получить значения и подписивается на изменение в контексте

// Таким образом создаем некое хранилище даних, которое передаем потом ниже по иерархии


// Варіант з іспользованием контекста якщо усе в різних файлах
// створюємо окремо файли
// файл-контектс context.js
// файл-компонент-інпут Input.js
// файл-компонент- форму Form.js

import {useState} from 'react';
import {Container,  Button, Row, Col} from 'react-bootstrap';
import Form from './Form';
import dataContext from "./context";


const {Provider} = dataContext;


function App() {
    const [data, setData] = useState({
        mail: "name@example.com",
        text: 'some text',
        forceChangeMail: forceChangeMail
    });

    function forceChangeMail(){
        setData({
            ...data, mail: "test@mail.com"
        })
    }

    return (

      <Provider value={data}>
        <Form  text={data.text}/>
        <Container>
            <Row className="justify-content-md-center">
                <Col  md="auto">
                <Button
                    className="mt-3"
                    onClick = {()=> setData({
                    ...data,
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
