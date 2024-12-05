import './App.css';
import PetInfo from './components/PetInfo';

function App() {
  return (
    <div className="App">
      <PetInfo animal="dog" age={5} hasPet/>
      <PetInfo animal="bird" age="2" hasPet={false}/>
    </div>
  );
}

export default App;
