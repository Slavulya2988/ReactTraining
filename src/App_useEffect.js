// Использование хука состояния - useEffect
// Что же делает useEffect? Используя этот хук, вы говорите React сделать что-то после рендера. React запомнит функцию (то есть «эффект»), которую вы передали и вызовет её после того, как внесёт все изменения в DOM

// Почему же мы вызываем useEffect непосредственно внутри компонента? Это даёт нам доступ к переменной состояния

// Выполняется ли useEffect после каждого рендера? Разумеется! По умолчанию он будет выполняться после каждого рендера и обновления.


import {useState, useEffect} from 'react';
import {Container} from 'react-bootstrap';
import './App.css';


const Slider = (props) => {

    const [slide, setSlide] = useState(0);
    const [autoplay, setAutoPlay] = useState(false);

    function loggin(){
        console.log('log!')
    }

    useEffect(()=> {
        console.log('effect');
        document.title = `Slide: ${slide}`;

        window.addEventListener('click', loggin);

     return () => {
        window.removeEventListener('click', loggin);
     }

    }, [slide]);

    const toggleAutoplay = () => {
        setAutoPlay(autoplay => !autoplay)
    }

    return (
        <Container>
            <div className="slider w-50 m-auto">
                <img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />
                <div className="text-center mt-5">Active slide {slide} <br/> {autoplay ? 'auto' : null}</div>
                <div className="buttons mt-3">
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => setSlide(slide => slide - 1)}>-1</button>
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => setSlide(slide => slide + 1)}>+1</button>
                    <button
                        className="btn btn-primary me-2"
                        onClick={ toggleAutoplay}>toggle autoplay</button>
                </div>
            </div>
        </Container>
    )
}


function App() {

    const [slider, setSlaider] = useState(true);
  return (
        <>
        <button onClick={() => setSlaider(!slider)}>Click me</button>
        {slider ? <Slider/> : null}
        </>
  );
}

export default App;
