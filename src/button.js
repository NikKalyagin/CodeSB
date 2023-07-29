/*Компонент Button:
1. Возвращает кнопку с текстом из пропсов.
2. Присваивает значения атрибутам type и disabled из пропсов.
3. Добавляет всем кнопкам класс .ui-button.*/

//import React from "react";
import { render } from "react-dom";
function Button({ label, disabled, type }) {
  return (
    <button className="ui-button" type={type} disabled={disabled}>
      {label}
    </button>
  );
}
export default Button;
