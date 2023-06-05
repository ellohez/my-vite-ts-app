import { useState, useRef, useEffect } from 'react';
import LoginDetails from '../LoginDetails';
import './styles.css'

// FC (Functional Component) interface does not include 'children'
// If needed, add to interface as optional (using '?')
const SignupForm = (): JSX.Element => {

  const formTitles: Array<string> = [
    'Sign Up',
    'Login Details',
    'Personal Information',
    'Address'];

  // TODO: Check TS - using object as state with initial null
  const [page, setPage] = useState(0);

  // TODO: TS type for formData
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    surname: '',
    birthDate: null,
    address: '',
  })

  const PageDisplay = () => {
    if (page === 1) {
      return <LoginDetails />
    }
  };

  const BreadcrumbDisplay = () => {
    let content: Array<JSX.Element> = [];

    for (let i = 0; i < page; i++) {
      content.push(
        <div className='breadcrumb-item'>
          <p>
            Step {i + 1}
          </p>
          <p>
            {formTitles[i]} &gt;
          </p>
        </div>);
    }

    content.push(
      <div className='breadcrumb-item'>
        <p>Steps Remaining</p>
        <p>{formTitles.length - page}</p>
      </div>
    );

    return (
      <div className='breadcrumb-trail'>
        {content}
      </div>
    )
  }

  return (
    <>
      <div className='title'>
        <h2>Let's get you signed up!</h2>
      </div>
      {/* Draw breadcrumb trail, showing where the user is up to */}
      {BreadcrumbDisplay()}
      <div className='form-container'>
        {/* TODO: ?? Do we need a form element? */}
        <div className='header'>
          {/* Display the relevant title for the current page */}
          <h2>{formTitles[page]}</h2>
        </div>
        {/* Display the relevant page for the current step */}
        {PageDisplay()}
        <div className='row'>
          <button
          // Aria-disabled attibute not needed if disabled 
          // attribute included
            disabled={page == 0} 
            tabIndex={0}
            onClick={() => {
              setPage((currentPg) => currentPg - 1);
            }}>
            Previous
          </button>
          <button
            disabled={page == formTitles.length - 1}
            onClick={() => {
              setPage((currentPg) => currentPg + 1);
            }}>
            Next
          </button>
        </div>
      </div>
    </>
  )
}

export default SignupForm;
