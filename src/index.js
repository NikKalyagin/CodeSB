import { createRoot } from "react-dom/client";
import Button from "./button";
import Container from "./container";
import Input from "./Input";
import Link from "./link";
import "./styles.css";

const rootElement = document.getElementById("root");
//const root = createRoot(rootElement);

/*function App() {
  return (
    <Container>
      <Input placeholder="ВВОД" />
      <Button label="КНОПКА" />
      <Link href="https://ru.reactjs.org/" label="Документация React" />
    </Container>
  );
}*/

createRoot(rootElement).render(
  <Container>
    <Input placeholder="ВВОД" />
    <Button label="КНОПКА" />
    <Link href="https://ru.reactjs.org/" label="Документация React" />
  </Container>
);
