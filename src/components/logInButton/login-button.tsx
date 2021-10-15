import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
// import cx from 'classnames'

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button className='btn btn-primary btn-block' onClick={loginWithRedirect}>
      Log In
    </button>
  );
};

export default LoginButton;

// Stosiu dodał
// interface Props {
//   danger?: boolean;
//   onClick: () => void;
// }

// const Button: React.FC<Props> = (props) => {
//   const classes = cx('btn', 'btn-block', props.danger ? 'btn-danger' : 'btn-primary');

//   return <button className={classes} onClick={props.onClick}>
//     {props.children}
//   </button>
// }

// <Button>Log In</Button>
