import { useState, useEffect } from 'react';
import logo from './logo.svg';

function D() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // Clean up on unmount
  }, []);

  return (
    <div>
      <h1 style={{ color: 'blue', fontSize: '25px' }}>Good Morning</h1>

      <h3>{dateTime.toLocaleDateString()}</h3>
      <h4>{dateTime.toLocaleTimeString()}</h4>

      <img src={logo} alt="" height="100px" />

      <ol type="A">
        <li>Apple</li>
        <li>Banana</li>
        <li>Kiwi</li>
      </ol>

      <p></p>
    </div>
  );
}

export default D;
