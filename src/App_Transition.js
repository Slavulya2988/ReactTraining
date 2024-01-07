// работа с React Transition
// 1 компонент Transition инсталяція npm install react-transition-group --save
// источник https://reactcommunity.org/react-transition-group/
// пример з сайту: https://reactcommunity.org/react-transition-group/transition
// 1. додаем импорт компоненту: mport { Transition } from 'react-transition-group';
// 2. додаем  в компонент Modal переменние: duration, defaultStyle, transitionStyles
// 3. создаем компонент-обертку - Transition и помещаем внутрености модального окна, компонент модельного окна должен бить октренрен в функції
// виставляем два пропска: timeout и in
//  в родітельском компоненте App для компонента Modal задаем пропс show со значеніем стейта showModal
// цей пропс передаме в качестве аргумента для пропса in в компоненте Transition
// в стілях добавили свойство visibility для правільной работи с уже сущестующими стилями boostrap
// пропс unmountOnExit - убирает компонент из ДОМ дереве после скрития
// для компонента Transition добавляем еще два метода onEnter и onExited
// скривать кнопку при появлении модального окна и показивать при закритиї модального окна

import {useState} from 'react';
import {Container} from 'react-bootstrap';
import { Transition } from 'react-transition-group';
import './App.css';

const Modal = (props) => {
	const duration = 600;

	const defaultStyle = {
	transition: `all ${duration}ms ease-in-out`,
	opacity: 0,
	visibility: 'hidden'
	}

	const transitionStyles = {
	entering: { opacity: 1 , visibility: 'visible'},
	entered:  { opacity: 1 , visibility: 'visible'},
	exiting:  { opacity: 0, visibility: 'hidden' },
	exited:  { opacity: 0, visibility: 'hidden' },
	};

    return (

		 <Transition
		 	in={props.show}
			timeout={duration}
			unmountOnExit
			onEnter={() => {props.setShowTrigger(false)}}
			onExited={() => {props.setShowTrigger(true)}}>
			   {
					(state) => (
						<div className="modal mt-5 d-block"
						style={{
							...defaultStyle,
							...transitionStyles[state]
						 }}>
							<div className="modal-dialog">
								<div className="modal-content">
								<div className="modal-header">
									<h5 className="modal-title">Typical modal window</h5>
									<button onClick={() => props.onClose(false)} type="button" className="btn-close" aria-label="Close"></button>
								</div>
								<div className="modal-body">
									<p>Modal body content</p>
								</div>
								<div className="modal-footer">
									<button onClick={() => props.onClose(false)} type="button" className="btn btn-secondary">Close</button>
									<button onClick={() => props.onClose(false)} type="button" className="btn btn-primary">Save changes</button>
								</div>
								</div>
							</div>
        				</div>
					)
				}
		 </Transition>
    )
}

function App() {
    const [showModal, setShowModal] = useState(false);
	 const [showTrigger, setShowTrigger] = useState(true);

    return (
        <Container>
            <Modal show={showModal} onClose={setShowModal} setShowTrigger={setShowTrigger}/>
            {showTrigger ? <button
                type="button"
                className="btn btn-warning mt-5"
                onClick={() => setShowModal(true)}>Open Modal</button>: null}
        </Container>
    );
}

export default App;
