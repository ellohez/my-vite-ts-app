import { FocusEvent, ChangeEvent, useEffect, useState, useRef } from 'react';
import UserData from '../../types';

interface loginDetailsProps {
  userData: UserData;
  setUserData: (data: UserData) => void;
}

// TODO: Fix type issue for props
const LoginDetails: React.FC<loginDetailsProps> = ({ userData, setUserData }): JSX.Element => {

  //const [userInput, setUserInput] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [isBlur, setIsBlur] = useState(false);

  const inputRef = useRef(null);

  const blurHandler = (e: FocusEvent<HTMLInputElement>) => {

    setUserData({ ...userData, email: e.target.value });

    setIsBlur(true);
    // For now - consider input valid if it contains '@'
    setIsValid(userData.email.includes('@'));
  }

  // TODO: remove userInput state hook
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {

    setUserData({ ...userData, email: e.target.value });
  }

  useEffect(() => {
    console.log("Login details useEffect");
    if (inputRef.current != null) {
      inputRef.current.focus();
    }
  }, [])

  return (
    <>
      <div className='row'>
        <div className='col-15'>
          {/* TODO - checkout aria-placeholder, would descriptive label be preferable? */}
          <label
            placeholder='your email here'
            className='input-label'
            htmlFor='email'
            id='emailLabel'>Email:</label>
        </div>
        <div className='col-75'>
          <input
            name='email'
            id='email'
            type='text'
            placeholder='your email here'
            aria-placeholder='your email here'
            aria-labelledby='emailLabel'
            aria-required='true'
            value={userData.email}
            onBlur={blurHandler}
            onChange={changeHandler}
            ref={inputRef}
          />
          {/* TODO: Increase validation and give specific help on what is wrong/missing etc.  */}
          {isBlur && !isValid && <p className="error"><span>&#10007;</span> The name you entered is not valid</p>}
          {isBlur && isValid && <p className="success"><span>&#10003;</span> The name you entered looks good</p>}
        </div>
      </div>
      <div className='row'>
        <div className='col-15'>
          <label
            className='input-label'
            htmlFor='password'
            id='pwd-label'>Password:</label>
        </div>
        <div className='col-75'>
          <input
            name='password'
            id='password'
            type='text'
            placeholder='your password here'
            aria-placeholder='your password here'
            aria-labelledby='pwd-label'
            aria-required='true'
          // value={userInput}
          // onBlur={blurHandler}
          // onChange={changeHandler}
          // type='password'
          />
        </div>
      </div>
    </>
  )
}

export default LoginDetails;
