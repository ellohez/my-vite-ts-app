import React, { FocusEvent, FC, useState, ChangeEvent } from 'react';
import './styles.css'
interface TitleProps {
  title: string; // Required 
  subtitle?: string; // optional
  children?: React.ReactNode
}

// FC (Functional Component) interface always adds the 'children' prop 
const BasicForm: FC<TitleProps> = ({ title, subtitle, children }) => {

  // 
  const [userInput, setUserInput] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [isBlur, setIsBlur] = useState(false);

  const blurHandler = (e: FocusEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
    setIsBlur(true);
    // For now - consider input valid if it contains '@'
    setIsValid(userInput.includes('@'));
  }

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      setUserInput(e.target.value);
  }
    
  return (
      <div>
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
        <div>{children}</div>

      <form className='grid'>
          {/* TODO - checkout aria-placeholder, would descriptive label be preferable? */}
          <label 
            className='input-label'
            htmlFor='input1' 
            id='inputLabel1'>Input1:</label>
          <input
            className='bold-input'
            name='input1'
            id='input1'
            placeholder='your input here'
            aria-placeholder='your input here'
            aria-labelledby='inputLabel1'
            aria-required='true'
            value={userInput}
            onBlur={blurHandler}
            onChange={changeHandler}
          />
          {isBlur && !isValid && <p className="error">The name you entered is not valid</p>}
          {isBlur && isValid && <p className="success">The name you entered looks good</p>}

          <label htmlFor='input2' id='inputLabel2'>Input2:</label>
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
          />
      </form>
      </div>
  )
}

export default BasicForm;
