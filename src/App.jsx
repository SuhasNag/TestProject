import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import PersonalInfo from './Component/PersonalInfo';
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <PersonalInfo />
    </>
  );
}

export default App;
