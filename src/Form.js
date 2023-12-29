import {Container} from 'react-bootstrap';
import InputComponent from './Input';

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

export default Form;
