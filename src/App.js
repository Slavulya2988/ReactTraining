// useReducer аналог хука useState
// решает проблему когда функцій изменения состояний может бить много
// useReducer также возвращает кортеж стейт и функцию через которую ментяется стейт
// єту функцию обіно називают dispatch
// у хука useReducer  - три аргумента:
// reducer - функция, отвечает за модификацію значения
// initial - начальное значение
// init - ленивое назначение начального значения
// в dispatch передают обект  тип действия и значение - єто функція визова изменений
// payload аргумент  dispatch

import {useState, useReducer} from 'react';
import {Container} from 'react-bootstrap';

function reducer(state, action){
    switch(action.type){
        case 'toggle':
            return {autoplay: !state.autoplay}
        case 'slow':
            return {autoplay: 300};
        case 'fast':
            return {autoplay: 700};
        case 'custom':
            return {autoplay: action.payload}
        default:
            throw new Error();

    }
}

function init (initial) {
    return {autoplay: initial};
}

const Slider = ({initial}) => {
    const [slide, setSlide] = useState(0);
    // const [autoplay, setAutoplay] = useState(false);
    const [state, dispatch] = useReducer(reducer, initial, init);

    function changeSlide(i) {
        setSlide(slide => slide + i);
    }

    return (
        <Container>
            <div className="slider w-50 pt-5 m-auto">
                <img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />
                <div className="text-center mt-5">Active slide {slide} <br/>{state.autoplay ? 'auto' : null} </div>
                <div className="buttons mt-3">
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(-1)}>-1</button>
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(1)}>+1</button>
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => dispatch({type: 'toggle'})}>toggle autoplay</button>
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => dispatch({type: 'slow'})}>slow autoplay</button>
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => dispatch({type: 'fast'})}>fast autoplay</button>
                     <button
                        className="btn btn-primary me-2"
                        onClick={(e) => dispatch({type: 'custom', payload: +e.target.textContent})}>1000</button>
                </div>
            </div>
        </Container>
    )
}

function App() {
    return (
        <Slider initial={false}/>
    );
}

export default App;
