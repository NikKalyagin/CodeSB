/*1. Возвращает элемент <input /> с классом .ui-textfield.
2. Задает значение атрибута type="text", если оно отсутствует в пропсах.
3. Принимает также атрибуты placeholder и name. */

import React from "react";

function Input({ type = "text", placeholder, name }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      className="ui-textfield"
    />
  );
}

export default Input;
