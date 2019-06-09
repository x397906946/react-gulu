import React from 'react';
import {scopedClassMaker} from '../helpers/classes';

interface IProps extends React.HTMLAttributes<HTMLElement> {

}

const sc = scopedClassMaker('gu-layout');
const Footer: React.FunctionComponent<IProps> = props => {
  const {className, ...rest} = props;
  return (
    <div className={sc('footer', {extra: className})} {...rest}>
      footer
    </div>
  );
};

export default Footer;
