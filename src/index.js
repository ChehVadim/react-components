import React from 'react';   /* импорт в веб-проект библиотеки React которая передает методу ReactDOM.render() JSX-код и выводит HTML-разметку, создаваемую на его основе, на страницу. */
import ReactDOM from 'react-dom';   /* принимает ссылку на React-элемент или компонент (что рендерить) */


/* ССЫЛКИ НА САЙТ REACTJS.ORG */
const element = React.createElement(   /* создание react елемента */
  'a',   /* type */
  {
    href: "https://reactjs.org/",   /* props */
    target: "_blank",   /* props */
    rel: "noreferrer noopener",   /* props */
  },
  "Ссылка на reactjs.org"   /* children */
);   

console.log(element);

ReactDOM.render(element,document.querySelector('#root'));   /* рендер react элемента в DOM-дерево (первым передается что нужно зарендерить, а вторым куда зарендерить) */




/*import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();*/
