import React from 'react';
import './importAllIcons';
import './icon.scss';
import classes from '../helpers/classes';

interface IIconProps extends React.SVGAttributes<SVGElement>{
  name: string;
}

const Icon: React.FunctionComponent<IIconProps> =
({
   className, name, ...restProps
}) => {
  return (
    <svg className={classes('x-icon', className)}
         {...restProps}
    >
      <use xlinkHref={`#${name}`}/>
    </svg>
  );
};

export default Icon;
