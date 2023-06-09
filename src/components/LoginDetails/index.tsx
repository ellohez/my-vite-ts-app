import { FocusEvent, ChangeEvent, useState, useRef } from 'react';
import UserData from '../../types';

interface loginDetailsProps {
  userData: UserData;
  setUserData: (data: UserData) => void;
}

const LoginDetails: React.FC<loginDetailsProps> = ({ userData, setUserData }): JSX.Element => {

  const [emailValid, setEmailValid] = useState(false);
  const [isBlur, setIsBlur] = useState(false);
  const [pwdIsVisible, setPwdIsVisible] = useState(false);
  // Specify the correct type for useRef to give type safe access
  const emailErrorMessage = useRef<HTMLInputElement>(null);

  const blurHandler = (e: FocusEvent<HTMLInputElement>) => {

    setUserData({ ...userData, email: e.target.value });
    setIsBlur(true);
    // TODO: need to test this regex
    const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    setEmailValid(emailRegex.test(userData.email));

    // Make it null safe
    if (emailErrorMessage && emailErrorMessage.current) {
      emailErrorMessage.current.style.display = 'block';
    } 
    // For now - consider input valid if it contains '@'
    // setEmailError(userData.email.includes('@'));
    console.log(`isBlur ${isBlur} emailValid ${emailValid} email ${userData.email} test ${emailRegex.test(userData.email)}`);
  }

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, email: e.target.value });
  }

  return (
    <>
      <div className='row'>
        <div className='col-75'>
          <label className='help-label'>
            <p>Please enter an email address in</p>
            <p>the format 'name@domain.com'</p></label>
        </div>
      </div>
      <form>
      <div className='row'>
        <div className='col-25'>

          {/* TODO - checkout aria-placeholder, would descriptive label be preferable? */}
            <label
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
              aria-invalid={isBlur && !emailValid}
            value={userData.email}
            onBlur={blurHandler}
            onChange={changeHandler}
          />
          {/* TODO: Increase validation and give specific help on what is wrong/missing etc.  */}
            <div className='error'
              id='emailErrorMsg'
              ref={emailErrorMessage}
              // If bad email input then hidden = false
              aria-hidden={!emailValid}
              role='alert'>
              {isBlur && !emailValid && <p className="error"><span>&#10007;</span> The email you entered is missing '@'</p>}
              {isBlur && emailValid && <p className="success"><span>&#10003;</span> The email you entered looks good</p>}
            </div>
        </div>
      </div>
      <div className='separator'></div>
      <div className='row'>
        <div className='col-25'>
          <label
            className='input-label'
            htmlFor='password'
            id='pwd-label'>Password:</label>
        </div>
        <div className='col-75'>
          <input
            name='password'
            id='password'
            type={pwdIsVisible ? 'text' : 'password'}
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
      <div>
        {/* Toggle between password visibility */}
        <label
          className='input-label'
          htmlFor="pwdCheckbox"
          id='pwdCheckboxLabel'>Show password?</label>
        <input
          id='pwdCheckbox'
          name='pwdCheckbox'
          type='checkbox'
          checked={pwdIsVisible}
          aria-labelledby='pwdCheckboxLabel'
          aria-checked={pwdIsVisible}
          onChange={() => { setPwdIsVisible((pwdIsVisible) => !pwdIsVisible) }}
        />
      </div>
      <div className='row'>
        <div className='col-25'>
          <label
            className='input-label'
            htmlFor='password-confirm'
            id='pwd-confirm-label'>Confirm password:</label>
        </div>
        <div className='col-75'>
          <input
            name='password-confirm'
            id='password-confirm'
            type='password'
            placeholder='confirm your password'
            aria-placeholder='confirm your password'
            aria-labelledby='pwd-confirm-label'
            aria-required='true'
          // value={userInput}
          // onBlur={blurHandler}
          // onChange={changeHandler}
          />
        </div>
      </div>
      </form>
    </>
  )
}

export default LoginDetails;
