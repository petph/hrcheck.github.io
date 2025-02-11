
import { useState } from 'react';
import './App.css';

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}

function App() {
  const [position, setPosition] = useState({ left: 0, top: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const getClickYes = () => {
    alert('Вы получите оффер');
    const link = document.createElement('a');
    link.href = 'https://t.me/nisidn';
    link.click();
  };

  const moveButton = () => {
    if (!isHovered) {
      setIsHovered(true);
    }
    setPosition({
      left: getRandomInt(10, 80),
      top: getRandomInt(10, 80)
    });
  };

  return (
    <div className='App'>
      <div className='App-header'>
        <h1>Hr я получу оффер?</h1>
        <hr />
        <img src='https://i.pinimg.com/originals/c2/55/2a/c2552a95983aa61b54dd7b40446f2be5.gif' alt='gif' />
        <hr />
        <button id='yes' onClick={getClickYes}>Да</button>
        <button
          id='no'
          style={{ position: 'absolute', left: `${position.left}%`, top: `${position.top}%` }}
          onMouseEnter={moveButton}
        >
          Нет
        </button>
      </div>
    </div>
  );
}

export default App;

