import React from 'react';   /* импорт в веб-проект библиотеки React которая передает методу ReactDOM.render() JSX-код и выводит HTML-разметку, создаваемую на его основе, на страницу. */
import ReactDOM from 'react-dom';   /* принимает ссылку на React-элемент или компонент (что рендерить) */


/* КАРТОЧКА ПРОДУКТА */
const image = React.createElement(   /* создание react елемента img */
    "img",   /* type */
    {
    src: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640",   /* props */
    alt: "Tacos With Lime",   /* props */
    width: 640,   /* props */
    }
);
const title = React.createElement("h2", null, "Tacos With Lime");   /* создание react елемента h2 */
const price = React.createElement("p", null, "Price: 10.99$");   /* создание react елемента p */
const button = React.createElement("button", { type: "button" }, "Add to cart");   /* создание react елемента button */
  
const productWithChildrenInProps = React.createElement(   /* создание react елемента div */
  "div",
  {
  children: [image, title, price, button],   /* Для передачи детей используется свойство children */
  }
);
  
ReactDOM.render(productWithChildrenInProps, document.querySelector('#root'));   /* рендер react элемента в DOM-дерево (первым передается что нужно зарендерить, а вторым куда зарендерить) */