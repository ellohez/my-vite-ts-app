import React, { FC } from 'react';

interface TitleProps {
  title: string; // Required 
  subtitle?: string; // optional
  children?: React.ReactNode
}

// FC (Functional Component) interface always adds the 'children' prop 
const BasicForm: FC<TitleProps> = ({ title, subtitle, children }) => {
    
  return (
      <div>
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
        <div>{children}</div>

        {/* TODO - checkout aria-placeholder, would descriptive label be preferable? */}
        <label htmlFor='input1'>Input1:</label>
        <input
          name='input1'
          id='input1'
          placeholder='your input'
          aria-placeholder='your input'
        />
      </div>
  )
}

export default BasicForm;
