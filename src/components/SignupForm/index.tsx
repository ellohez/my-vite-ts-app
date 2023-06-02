import { useState } from 'react';
import LoginDetails from '../LoginDetails';
import './styles.css'

// FC (Functional Component) interface does not include 'children'
// If needed, add to interface as optional (using '?')
const SignupForm = (): JSX.Element => {

  const formTitles: Array<string> = ['Sign Up',
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
    return (
      // TODO: Change this to a standard for loop 
      // so we can calculate the steps remaining.
      // or can we stop map when we get to the current stage?
      // see - https://www.telerik.com/blogs/beginners-guide-loops-in-react-jsx 
      <div className='breadcrumb-trail'>
        {formTitles.map((title, index) => (
          <div className='breadcrumb-item'>
            <p>
              Step {index + 1}
            </p>
            <p>
              {title} &gt;
            </p>
          </div>
        ))}
        <div className='breadcrumb-item'>
          <p>Steps remaining</p>
          <p>TODO</p>
        </div>
      </div>
    )
  }

  return (
    <>
      <div>
        <h1>Let's get you signed up!</h1>
      </div>
      {/* Draw breadcrumb trail, showing where the user is up to */}
      {BreadcrumbDisplay()}
      <div className='form-container'>
        {/* TODO: ?? Do we need a form element? */}
        {/* Load the relevant component for the page number */}
        <div className='header'>
          {/* Display the relevant title for the current page */}
          <h2>{formTitles[page]}</h2>
        </div>
        {PageDisplay()}
        <div className='row'>
          <button
            disabled={page == 0}
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
