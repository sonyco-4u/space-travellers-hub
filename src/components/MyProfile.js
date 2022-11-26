import React from 'react';
<<<<<<< Updated upstream
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const rockets = useSelector((state) => state.rocketsReducer);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);

  return (
    <main className="profile-main">
      <div>
        <h1>My Rockets</h1>
        <div className="profile-rockets">
          {
          reservedRockets.map((rocket) => (
            <h3 key={rocket.id} className="profile-res-rocket">{rocket.name}</h3>
          ))
        }
        </div>
      </div>
      <div>
        <h1>My Missions</h1>
      </div>
    </main>
  );
};
=======
import MissionProfile from './missionsComponent/missionsProfile';
import RocketProfile from './rocketsComponent/RocketProfile';

const MyProfile = () => (

  <main className="profile-main">
    <MissionProfile />
    <RocketProfile />
  </main>
);
>>>>>>> Stashed changes

export default MyProfile;
