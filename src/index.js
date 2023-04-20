import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import { Button } from './App';
// import styled from 'styled-components';

import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapTest from './bootstrapTest';

const root = ReactDOM.createRoot(document.getElementById('root'));

// const BigButton = styled(Button)`
//   margin: 0 auto;
//   width: 245px;
//   text-align: center;
// `

root.render(
  <React.StrictMode>

    <App />
    {/* <BigButton as="a">Import Styled Component</BigButton> */}
    <BootstrapTest />

  </React.StrictMode>
);
