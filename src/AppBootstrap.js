// Готові компонети со стилями
// Bootstrap
// Наприклад:
// React Bootstrap
// https://react-bootstrap.github.io/getting-started/introduction
// npm install react-bootstrap bootstrap --save

// Ще одна библиека
// https://mui.com/

//шаг 1 - установить React Bootstrap
//шаг 2 - в файле index.js подключить стили import 'bootstrap/dist/css/bootstrap.min.css';
//шаг 3 - создали файл bootstrapTest.js с версткой із сайту https://react-bootstrap.github.io/docs/layout/grid
//шаг 4 - импортували файла bootstrapTest.js в файл приложения
// есть компоненти, в якіх вже є пропси
import BootstrapTest from'./bootstrapTest' ;
import './App.css';

function  App() {
   return(
    <div className='App'>
        <BootstrapTest/>
    </div>
   )
}


export default App;
