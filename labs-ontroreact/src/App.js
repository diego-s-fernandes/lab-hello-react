
import './App.css';
import MainLanding from './components/MainLanding';
import ProfileCard from './components/ProfileCard/ProfileCard';

function App() {
  return (
    <div className="App">
         <ProfileCard/>
         <MainLanding/>
         <NavBar/>

    </div>
  );
}

export default App;
