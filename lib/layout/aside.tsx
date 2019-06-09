import React from 'react';
import {scopedClassMaker} from '../helpers/classes';

interface IProps extends React.HTMLAttributes<HTMLElement> {

}

const sc = scopedClassMaker('gu-layout');
const Aside: React.FunctionComponent<IProps> = props => {
  const {className, ...rest} = props;
  return (
    <div className={sc('aside', {extra: className})} {...rest}>
      aside
    </div>
  );
};

export default Aside;
