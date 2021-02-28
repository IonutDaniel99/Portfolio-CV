import './App.css';
import Container from "./components/Container"
import resumeData from './packages/resumeData.json'


const App = () => {
  return (
    <div className="main">
      <Container data={resumeData} />
    </div>
  );
}

export default App;

