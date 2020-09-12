import React from 'react';
import classnames from 'classnames';
import ProgressBar from '../ProgressBar';
import './style.scss';

const RATE = 100 / 14;

const LEVELS = {
  newbie: { percentage: RATE * 1, name: 'Newbie' },
  novice: { percentage: RATE * 2, name: 'Novice' },
  rookie: { percentage: RATE * 3, name: 'Rookie' },
  beginner: { percentage: RATE * 4, name: 'Beginner' },
  talented: { percentage: RATE * 5, name: 'Talented' },
  skilled: { percentage: RATE * 6, name: 'Skilled' },
  intermediate: { percentage: RATE * 7, name: 'Intermediate' },
  skillful: { percentage: RATE * 8, name: 'Skillful' },
  seasoned: { percentage: RATE * 9, name: 'Seasoned' },
  proficient: { percentage: RATE * 10, name: 'Pro' },
  experienced: { percentage: RATE * 11, name: 'Experienced' },
  advanced: { percentage: RATE * 12, name: 'Advanced' },
  senior: { percentage: RATE * 13, name: 'Senior' },
  expert: { percentage: RATE * 14, name: 'Expert' },
};

const SkillProgressBar = (props) => {
  const { className, name, levelKey } = props;
  const { percentage: levelPercentage, name: levelName } = LEVELS[levelKey] || {
    percentage: 0,
    name: 'Not specified',
  };

  return (
    <div className={classnames('skill-progress-bar', className)}>
      <div className="skill-progress-bar__details">
        <div className="skill-progress-bar__details__name">{name}</div>
        <div className="skill-progress-bar__details__level-name">{levelName}</div>
      </div>
      <div className="skill-progress-bar__progress-bar">
        <ProgressBar percentage={levelPercentage} />
      </div>
    </div>
  );
};

export default SkillProgressBar;
