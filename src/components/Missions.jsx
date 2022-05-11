import React from 'react';
import MissionCard from './MissionCard';
import Title from './Title';
import missoes from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        { missoes.map((missao) => (<MissionCard
          key={ missao.name }
          name={ missao.name }
          year={ missao.year }
          country={ missao.country }
          destination={ missao.destination }
        />)) }
      </div>
    );
  }
}

export default Missions;
