//Иммутабельность состояния
// изменяем стейт не на прямую а через метод создания нового обекта, например здесь filter
import { Component } from "react"

 class EmployeesListItem  extends Component {
    constructor (props){
        super(props);
        this.state = {
            increase: false
        }
    }

    onIcrease = () => {
        this.setState(({increase}) => ({
            increase: !increase
        }))
    }

  render(){
    const {name, salary, onDel} = this.props;
    const {increase} = this.state;
    const styleSpan = increase ? {color: 'red'} : {color: 'green'}
    return (
        <li>
            <span
            style = {styleSpan}>{name}
            </span>
            <input defaultValue={salary + '$'}/>
            <button
            onClick={this.onIcrease}
            >На підвищення</button>
            <button
    onClick={onDel}
            >Удалить</button>
        </li>
)
  }
}

const EmployeesList = ({data , onDelete }) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <EmployeesListItem  key= {id}
                                {...itemProps}
                                onDel = {() => onDelete(id)}/>
        )
    })
    return (
        <ul>
            {elements}
        </ul>
    )
}

class FormZarp extends Component {
    constructor (props){
        super(props);
        this.state = {
            salary: '',
            name: ''
        }
    }

    onChangeValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


render(){
    const {name, salary} = this.state;
    return(
        <form>
            <label htmlFor="salary">Нова зарплата</label>
            <input name="salary"
            onChange={this.onChangeValue}
            value={salary}
            />
            <label htmlFor="name">Нова людина</label>
            <input name="name"
             onChange={this.onChangeValue}
             value={name}
             />
        </form>
    )
}
}

class  App extends Component {
    constructor(props){
        super(props);
        this.state = {
            data : [
        {name: 'John C.', salary: 800, increase: false, id: 1},
        {name: 'Alex M.', salary: 3000, increase: true, id: 2},
        {name: 'Carl W.', salary: 5000, increase: false, id: 3}
    ]
        }
    }

    onDeleteItem = (id) => {
        console.log(id);
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    render(){
        return(
            <div className='App'>
                <EmployeesList data={this.state.data}
                onDelete = { (id) => this.onDeleteItem(id)}
                />
                <FormZarp/>
            </div>
        )
   }
}

export default App;
