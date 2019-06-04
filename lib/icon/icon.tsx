import React from 'react';
import './importAllIcons';

interface IIconProps {
  name: string
}

const Icon: React.FunctionComponent<IIconProps> = (props) => {
  return (
    <span>
      <svg>
        <use xlinkHref={`#${props.name}`}/>
      </svg>
    </span>
  );
};

export default Icon;
