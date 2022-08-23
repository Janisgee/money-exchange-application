import "./App.css";
import Calculator from "./Calculator";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Money Change Calculator</h1> <Calculator />
      </header>{" "}
      <footer>
        This project was coded by Janis Chan and is open-sourced on{" "}
        <a
          href="https://github.com/Janisgee/money-exchange-application"
          title="_blank"
        >
          GitHub
        </a>{" "}
        and hosted on Netlify.
      </footer>
    </div>
  );
}
