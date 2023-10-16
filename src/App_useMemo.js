 // хук useMemo
 import {useState, useCallback, useEffect, useMemo} from 'react';
 import {Container} from 'react-bootstrap';
 import './App.css';



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

 const countTotal = (num) => {
     console.log('count...');
     return num = num + 1;
 }

 const Slider = (props) => {

     const [slide, setSlide] = useState(0);
     const [autoplay, setAutoPlay] = useState(false);

     const total = useMemo(() => {
        return countTotal(slide)
     }, [slide]);



     const toggleAutoplay = () => {
         setAutoPlay(autoplay => !autoplay)
     }
  // обєект не меняється для стейта autoplay
     const style = useMemo(()=>{
         return (
             { color: slide>5 ? 'red' : 'black'}
         )

     }, [slide])

     useEffect(() => {
         console.log('style!');
     }, [style])

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

                 <Slide getSomeImages={getSomeImages}/>
                 <div className="text-center mt-5">Active slide {slide} <br/> {autoplay ? 'auto' : null}</div>
                 <div style={style} className="text-center mt-1">Total slide: {total}</div>
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
