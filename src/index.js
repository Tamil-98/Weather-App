import React from 'react';
import ReactDOM from 'react-dom/client';

// import App from './App';
import reportWebVitals from './reportWebVitals';
// import ProductBoxs from './components/ProductBox';
// import image2 from '../src/Assests/images/pngwing.com.png'
// import image1 from '../src/Assests/images/trivex_lg.avif'
import Temperature from './components/Temperature';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <Temperature/>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
