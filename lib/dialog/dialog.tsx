import React, {Fragment, ReactElement, FunctionComponent, ReactNode} from 'react';
import * as ReactDOM from 'react-dom';
import {Icon} from '../index';
import {scopedClassMaker} from '../helpers/classes';
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
  const result = props.visible &&
    <Fragment>
      <div className={sc('mask')} onClick={onClickMask}/>
      <div className={sc()}>
        <div className={sc('close')} onClick={onClickClose}>
          <Icon name="close"/>
        </div>
        <header className={sc('header')}>提示</header>
        <main className={sc('main')}>{props.children}</main>
        {props.buttons && props.buttons.length > 0 &&
        <footer className={sc('footer')}>
          {props.buttons && props.buttons.map((button, index) =>
            React.cloneElement(button, {key: index})
          )}
        </footer>
        }
      </div>
    </Fragment>;
  return ReactDOM.createPortal(result, document.body);
};
Dialog.defaultProps = {
  closeOnClickMsk: false
};
const modal = (content: ReactNode, buttons?: Array<ReactElement>, afterClose?: () => void) => {
  const close = () => {
    ReactDOM.render(React.cloneElement(component, {visible: false}), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
  };
  const component =
    <Dialog visible={true}
            buttons={buttons}
            onClose={() => {
              close();
              afterClose && afterClose();
            }}
    >{content}</Dialog>;
  const div = document.createElement('div');
  document.body.append(div);
  ReactDOM.render(component, div);
  return close;
};
const confirm = (content: string, yes?: () => void, no?: () => void) => {
  const onYes = () => {
    close();
    yes && yes();
  };
  const onNo = () => {
    close();
    no && no();
  };
  const buttons = [
    <button onClick={onYes}>yes</button>,
    <button onClick={onNo}>no</button>
  ];
  const close = modal(content, buttons, no);
};
const alert = (content: string) => {
  const button = <button onClick={() => close()}>OK</button>;
  const close = modal(content, [button]);
};

export {alert, confirm, modal};
export default Dialog;

