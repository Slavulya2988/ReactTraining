import { useContext } from "react";
import dataContext from "./context";


const InputComponent = () => {

    const context = useContext(dataContext);
    //console.log(context);
    return(
        <input
            value={context.mail}
            type="email"
            className='form-control'
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            onFocus={context.forceChangeMail}
            />
    )
}

export default InputComponent;
