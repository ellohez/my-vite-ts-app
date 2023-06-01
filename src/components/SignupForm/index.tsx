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
      if(page === 1) {
        return <LoginDetails />
      }
  };
    
  return (
    <div className='form'>
      <div className='bread-crumb'>
        <div className='form-container'>
            <div className='header'>
              {/* Display the relevant title for the current page */}
              <h1>{formTitles[page]}</h1>
            </div>
            {/* Load the relevant component for the page number */}
            <div className='body'>{PageDisplay()}</div>
            <div className='footer'>
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
      </div>
    </div>
  )
}

export default SignupForm;
