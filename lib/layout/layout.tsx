import React, {ReactElement} from 'react';
import {scopedClassMaker} from '../helpers/classes';
import Aside from './aside';
import './layout.scss';

interface IProps extends React.HTMLAttributes<HTMLElement> {
  children: ReactElement | ReactElement[];
}

const sc = scopedClassMaker('gu-layout');

const Layout: React.FunctionComponent<IProps> = props => {
  const {className, ...rest} = props;
  const children = props.children as ReactElement[];
  const hasAside = 'length' in children &&
    children.reduce((result, node) => result || node.type === Aside, false);
  return (
    <div className={sc({'': true, hasAside}, {extra: className})} {...rest}>
      {props.children}
    </div>
  );
};

export default Layout;
export {Layout};
export {default as Header} from './header';
export {default as Content} from './content';
export {default as Footer} from './footer';
export {default as Aside} from './aside';
