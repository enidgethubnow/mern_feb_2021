import React from 'react';

const DisplayExperience = (props) => {
  const { results } = props;

  const clickDetails = (e, expObj) => {
    alert(`
    The details for this Work Experience include:
    Employer: ${ expObj.expEmployer }
    Years Experience: ${ expObj.expYears }
    Position: ${ expObj.expPosition }
    Salary: ${ expObj.expSalary }
    Location: ${ expObj.expLocation }
    `);
  }

  // {/* // display the object in the bottom of this form */}
  return (
    <div>
      <h3>You typed in:</h3>
      {
        results.map((expObj, index) => (
          <div key={index}>
            <p>Employer: { expObj.expEmployer }</p>
            <button onClick={(e) => clickDetails(e, expObj)} >Click for Details</button>
            {/* <p>Years Experience: { expObj.expYears }</p>
            <p>Position: { expObj.expPosition }</p>
            <p>Salary: { expObj.expSalary }</p>
            <p>Location: { expObj.expLocation }</p> */}
          </div>
        ))
      }
    </div>
  )
}

export default DisplayExperience;
