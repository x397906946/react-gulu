import React from 'react';
import {scopedClassMaker} from '../helpers/classes';

interface IProps extends React.HTMLAttributes<HTMLElement> {

}

const sc = scopedClassMaker('gu-layout');
const Content: React.FunctionComponent<IProps> = props => {
  const {className, ...rest} = props;
  return (
    <div className={sc('content', {extra: className})} {...rest}>
      content
    </div>
  );
};

export default Content;
