// props.children
import React from 'react';
import BootstrapElement from './bootstrapElement';
import './App.css';


// блок должен ренедерить структуру, которую передадут при визове
const DynamicGreeting = (props) =>{
    return(
        <div className={'mb-3 p-3 border border-' + props.color}>
            {/* вместо етой конструкції появяться елементи, которие будут передани во внутрь компонента*/}
          {React.Children.map(props.children, (child) => {
            return React.cloneElement(child, {className:'shadow p-3 m-3 border rounded'})
          })  }
        </div>
    )
}

function  App() {
   return(
    <div className='wrapper'>
       <BootstrapElement left={
         <DynamicGreeting color={'primary'}>
         <h5>Ця конструкція із props.children</h5>
         <h5>color - це пропс для компонента DynamicGreeting</h5>
     </DynamicGreeting>
       }
       right ={
        <DynamicGreeting color={'primary'}>
        <h5>Right</h5>

    </DynamicGreeting>
       }/>

    </div>


   )
}


export default App;
