// import './styles/MyProfile.css';
// import './styles/Rockets.css';
// import './components/Missions.css';
// import './styles/Header.css';
import { Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import MyProfile from './components/MyProfile';
// import Rockets from './components/Rockets';
import Missions from './components/missionspage/Missions';

function App() {
  return (

    <Routes>
      <Route path="/Missions" element={<Missions />} />
    </Routes>

  );
}
export default App;
