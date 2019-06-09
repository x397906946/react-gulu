import React from 'react';
import {scopedClassMaker} from '../helpers/classes';

interface IProps extends React.HTMLAttributes<HTMLElement> {

}

const sc = scopedClassMaker('gu-layout');
const Header: React.FunctionComponent<IProps> = props => {
  const {className, ...rest} = props;
  return (
    <div className={sc('header', {extra: className})} {...rest}>
      header
    </div>
  );
};

export default Header;
