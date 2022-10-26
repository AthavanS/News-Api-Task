
import './App.css';
import Header  from './Components/Header'
import Content from './Components/Content';
import { useState } from 'react';
import Services from './Components/Services';
function App() {
  const [run,setrun] = useState("everything")

  return (
    <div className="App">
      <Header
      work={setrun}
      />
    
      <Services
      values={run}/>
    </div>
  );
}

export default App;
