import './App.css';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Project from './components/Project';

function App() {
  return (
    <div className="App">
      <h2>Welcome To My Portfolio!</h2>
      <Navbar />
      <AboutMe />
      <Project title={"Window Wizard"} desc={"College student window washing"} likes={ 3 } />
      <Project title={"Puppy Rescue"} desc={"Find a foster family for puppies"} likes={ 10 } />
      <Project title={"Restroom Rater"} desc={"Ratings for public restrooms"} likes={ 1 } />
    </div>
  );
}

export default App;
