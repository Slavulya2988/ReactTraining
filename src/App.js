// работа с React CSSTransition
// 1 компонент CSSTransition инсталяція npm install react-transition-group --save
// источник https://reactcommunity.org/react-transition-group/
// пример з сайту: https://reactcommunity.org/react-transition-group/css-transition
// 1. додаем импорт компоненту: import { CSSTransition } from 'react-transition-group';
// 2. компонент внутри Transition помещается просто как дочерний обєкт без виклику функції
// 3. в компоненте Transition есть проперти classNames, класи с указаним стиля в разних состояниих

import {useState} from 'react';
import {Container} from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
import './App.css';

const Modal = (props) => {
	const duration = 600;

    return (

		 <CSSTransition
		 	in={props.show}
			timeout={duration}
			unmountOnExit
			mountOnEnter
			onEnter={() => {props.setShowTrigger(false)}}
			onExited={() => {props.setShowTrigger(true)}}
			classNames="modal">
						<div className="modal mt-5 d-block">
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
		 </CSSTransition>
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
