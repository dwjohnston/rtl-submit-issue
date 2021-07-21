import logo from './logo.svg';
import './App.css';
import { Form } from './Form';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Form onSubmit = {(value) => console.log(value)}/>
      </header>
    </div>
  );
}

export default App;
