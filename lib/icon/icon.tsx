import React from 'react';
import './importAllIcons';
import './icon.scss';

interface IIconProps {
  name: string
}

const Icon: React.FunctionComponent<IIconProps> = (props) => {
  return (
    <svg className="x-icon">
      <use xlinkHref={`#${props.name}`}/>
    </svg>
  );
};

export default Icon;
