import './App.css';
import { createContext } from 'react';
import Comp from './Comp';
import C2 from './C2';

const Fname = createContext();
const Lname = createContext();
function App() {
  return (
    <div className="App">
      {/* <Fname.Provider value='abc'>
        <Comp />
      </Fname.Provider> */}

      <Fname.Provider value='Romil'>
        <Lname.Provider value=' Patel'>
          <C2 />
        </Lname.Provider>
      </Fname.Provider>

    </div>
  );
}

export default App;
export { Fname };
export { Lname };