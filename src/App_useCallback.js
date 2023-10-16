 // хук useCallback
//  Хук useCallback вернёт мемоизированную версию колбэка, который изменяется только, если изменяются значения одной из зависимостей. Это полезно при передаче колбэков оптимизированным дочерним компонентам, которые полагаются на равенство ссылок для предотвращения ненужных рендеров

import {useState, useCallback, useEffect} from 'react';
import {Container} from 'react-bootstrap';
import './App.css';


// дочерний компонент для визова у другому компоненті з функцією в пропсах
const Slide = ({getSomeImages}) => {
    const [slides, setSlide] = useState([]);

    useEffect(() => {
        setSlide(getSomeImages())
    }, [getSomeImages]);

   return(
    <>
        { slides.map((url, i) => {
        return (
            <img key={i} className="d-block w-100" src={url} alt="slide" />
        )
    })}
    </>
   )
}


const Slider = (props) => {

    const [slide, setSlide] = useState(0);
    const [autoplay, setAutoPlay] = useState(false);

    const toggleAutoplay = () => {
        setAutoPlay(autoplay => !autoplay)
    }


    const getSomeImages = useCallback(() => {
        console.log('fetch');
        return(
            [
                "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg",
                "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
            ]
        )
    }, [slide])

    return (
        <Container>
            <div className="slider w-50 m-auto">
                {/* {
                       getSomeImages().map((url, i) => {
                        return(
                            <img key={i} className="d-block w-100" src={url} alt="slide" />
                        )
                    })

                } */}
                <Slide getSomeImages={getSomeImages}/>
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

  return (
    <Slider/>
  );
}

export default App;
