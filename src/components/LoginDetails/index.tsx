import { FocusEvent, useState, ChangeEvent } from 'react';

const LoginDetails = (formData, setFormData): JSX.Element => {

	//const [userInput, setUserInput] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [isBlur, setIsBlur] = useState(false);

  const blurHandler = (e: FocusEvent<HTMLInputElement>) => {
    //setUserInput(e.target.value);
    setFormData({...formData, email: e.target.value});

    setIsBlur(true);
    // For now - consider input valid if it contains '@'
    setIsValid(formData.email.includes('@'));
  }

  // TODO: remove userInput state hook
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      //setUserInput(e.target.value);
      setFormData({...formData, email: e.target.value});
  }
    
  return (
      <div className='grid'>
        <div className='card'>
          {/* TODO - checkout aria-placeholder, would descriptive label be preferable? */}
          <label 
            className='input-label'
            htmlFor='email' 
            id='emailLabel'>Input1:</label>
          <input
            className='bold-input'
            name='email'
            id='email'
            placeholder='your input here'
            aria-placeholder='your input here'
            aria-labelledby='emailLabel'
            aria-required='true'
            value={formData.email}
            onBlur={blurHandler}
            onChange={changeHandler}
          />
          {isBlur && !isValid && <p className="error">The name you entered is not valid</p>}
          {isBlur && isValid && <p className="success">The name you entered looks good</p>}
        </div>
        <div className='card'>
          <label htmlFor='input2' 
          id='inputLabel2'>Input2:</label>
          <input
            className='bold-input'
            name='input2'
            id='input2'
            placeholder='more input here'
            aria-placeholder='more input here'
            aria-labelledby='inputLabel2'
            aria-required='true'
            // value={userInput}
            // onBlur={blurHandler}
            // onChange={changeHandler}
            // type='password'
          />
        </div>
      </div>
  )
}

export default LoginDetails;
