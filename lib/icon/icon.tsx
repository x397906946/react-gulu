import React from 'react';
import './importAllIcons';
import './icon.scss';
import classes from '../helpers/classes';

interface IIconProps extends React.SVGAttributes<SVGElement>{
  name: string;
}

const Icon: React.FunctionComponent<IIconProps> = (props) => {
  const { className, ...restProps } = props
  return (
    <svg className={classes('x-icon', className)}
         {...restProps}
    >
      <use xlinkHref={`#${props.name}`}/>
    </svg>
  );
};

export default Icon;
