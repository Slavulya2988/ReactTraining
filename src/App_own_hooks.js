import { useState, useEffect} from 'react';
import {Container} from 'react-bootstrap';
// import './App.css';

const Form = () => {

    function useInputwithValidation(initialValue){
        const [value, setValue] = useState(initialValue);

        const onChange = event => {
            setValue(event.target.value);
        }

        const validateInput = () => {
            return value.search(/\d/) >= 0
         }

         return {value , onChange, validateInput}
    }

    const text = useInputwithValidation('');
    const textArea = useInputwithValidation('');

    const color = text.validateInput() ? 'text-danger' : null;
    return (
        <Container>
            <form className="w-50 border mt-5 p-3 m-auto">
                <div className="mb-3">
                    <input value={`${text.value}  / ${textArea.value}`} type="text" className="form-control" readOnly/>
                    <label htmlFor="exampleFormControlInput1" className="form-label mt-3">Email address</label>
                    <input
                        onChange={text.onChange}
                        type="email"
                        value = {text.value}
                        className={`form-control ${color}`}
                        id="exampleFormControlInput1"
                        placeholder="name@example.com"/>
                    </div>
                    <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                    <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        onChange={textArea.onChange}
                        value={textArea.value}
                        >

                        </textarea>
                </div>
            </form>
        </Container>
    )
}

function App() {
    return (
        <Form/>
    );
}

export default App;
