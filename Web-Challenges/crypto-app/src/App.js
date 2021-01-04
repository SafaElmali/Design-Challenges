import './App.css';
import { Button } from './stories/Button';

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Button secondary  backgroundColor="red" label="Hello" />
    </div>
  );
}

export default App;
