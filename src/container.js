/* Компонент Container:
1. Возвращает div, оборачивающий все остальные элементы.
2. Должен иметь класс .ui-container. */

import React from "react";

function Container({ children }) {
  return <div className="ui-container">{children}</div>;
}

export default Container;
