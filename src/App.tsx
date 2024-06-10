import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import MyButton from './components/MyButton/MyButton';
import Label from './components/Label/Label';
import Text from './components/Text/Text';
import Dropdown from './components/Dropdown/Dropdown';
import Card from './components/Card/Card';

function App() {
  const [count, setCount] = useState(0);

  const dropdownOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' }
  ];

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <MyButton disabled={false}>Know More about me</MyButton>
      <Label>This is a label for me</Label>
      <Text>I am Prachi Sharma</Text>
      <Dropdown options={dropdownOptions} disabled={false} />
      <Card disabled={false}>This is a card</Card>
    </>
  );
}

export default App;
