import React, {Fragment, ReactElement, FunctionComponent} from 'react';
import * as ReactDOM from 'react-dom';
import {Icon} from '../index';
import {scopedClassMaker} from '../classes';
import './dialog.scss';


interface IProps {
  visible: boolean
  buttons?: Array<ReactElement>
  onClose: React.MouseEventHandler
  closeOnClickMsk?: boolean
}

const scopedClass = scopedClassMaker('x-dialog');
const sc = scopedClass;

const Dialog: FunctionComponent<IProps> = props => {
  const onClickClose: React.MouseEventHandler = e => {
    props.onClose(e);
  };
  const onClickMask: React.MouseEventHandler = e => {
    if (props.closeOnClickMsk) {
      props.onClose(e);
    }
  };
  const x = props.visible ?
    <Fragment>
      <div className={sc('mask')} onClick={onClickMask}/>
      <div className={sc()}>
        <div className={sc('close')} onClick={onClickClose}>
          <Icon name="close"/>
        </div>
        <header className={sc('header')}>提示</header>
        <main className={sc('main')}>{props.children}</main>
        <footer className={sc('footer')}>
          {props.buttons && props.buttons.map((button, index) =>
            React.cloneElement(button, {key: index})
          )}
        </footer>
      </div>
    </Fragment>
    : null;
  return ReactDOM.createPortal(x, document.body);
};

Dialog.defaultProps = {
  closeOnClickMsk: false
};
const alert = (content: string) => {
  const component = <Dialog visible={true} onClose={() => {
    ReactDOM.render(React.cloneElement(component, {visible: false}), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
  }}>{content}</Dialog>;
  const div = document.createElement('div');
  document.body.append(div);
  ReactDOM.render(component, div);
};

const confirm = () => {};
const modal = () => {};

export {alert};
export default Dialog;

