import { FocusEvent, useState, ChangeEvent } from 'react';

// TODO: Fix type issue for props
const LoginDetails = (formData, setFormData): JSX.Element => {

  //const [userInput, setUserInput] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [isBlur, setIsBlur] = useState(false);

  const blurHandler = (e: FocusEvent<HTMLInputElement>) => {
    //setUserInput(e.target.value);
    setFormData({ ...formData, email: e.target.value });

    setIsBlur(true);
    // For now - consider input valid if it contains '@'
    setIsValid(formData.email.includes('@'));
  }

  // TODO: remove userInput state hook
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    //setUserInput(e.target.value);
    setFormData({ ...formData, email: e.target.value });
  }

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
            value={formData.email}
            onBlur={blurHandler}
            onChange={changeHandler}
          />
          {isBlur && !isValid && <p className="error">The name you entered is not valid</p>}
          {isBlur && isValid && <p className="success">The name you entered looks good</p>}
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
