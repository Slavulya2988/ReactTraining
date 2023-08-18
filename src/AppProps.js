// Пропси
// props - це обєкт
// в якості пропса може бути: строка, обєкт або функція
// пропси тільки для читання
// механизм реконсиляції для обїектів типу списку - використання атрибуту key
import './App.css';


const WhoAmI = ( {name, surname, link}) => {

    return(
        <div>
            <h2>My name is - {name.firstname}, surname - {surname}</h2>
            <a href={link()}>Мой профіль</a>
        </div>
    )
}

const hrefForLink = () => {
    return "google.com"
}

function  App() {
   return(
    <div className='App'>
        <WhoAmI name = {{firstname: 'Lena'}} surname = 'Khomenko' link = {hrefForLink}/>
        <WhoAmI name = {{firstname: 'Alex'}} surname = 'shepard' link = {hrefForLink}/>
    </div>


   )
}
;

export default App;
