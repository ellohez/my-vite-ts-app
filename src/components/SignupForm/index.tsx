import { useState, useEffect } from 'react';
import LoginDetails from '../LoginDetails';
import './styles.css'
import UserData from '../../types';

// FC (Functional Component) interface does not include 'children'
// If needed, add to interface as optional (using '?')
const SignupForm = (): JSX.Element => {

  const formTitles: Array<string> = [
    'Sign Up',
    'Login Details',
    'Personal Information',
    'Address'];

  // Store the current page the user is viewing
  const [page, setPage] = useState<number>(0);

  // TS type for formData
  const [userData, setUserData] = useState<UserData>({
    email: '',
    password: '',
    firstName: '',
    surname: '',
    birthDate: null,
    address: '',
  });

  // TODO: Use this to control the focus 
  // to make buttons navigable by keyboard
  useEffect(() => {
    console.log("SignUpForm useEffect");
  }, []);


  const PageDisplay = () => {
    if (page === 1) {
      return <LoginDetails userData={userData} setUserData={setUserData} />
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
          <h3>{formTitles[page]}</h3>
        </div>
        {/* Display the relevant page for the current step */}
        {PageDisplay()}
        <div className='row'>
          <button
            className='form-button'
          // Aria-disabled attibute not needed if disabled 
          // attribute included
            disabled={page == 0} 
            tabIndex={0}
            // No need to add Aria role of 'button' if button has type='button'
            type='button' 
            onClick={() => {
              setPage((currentPg) => currentPg - 1);
            }}>
            Previous
          </button>
          <button
            className='form-button'
            type='button'
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
