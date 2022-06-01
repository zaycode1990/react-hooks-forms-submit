import React, { useState } from "react";
import {v4 as uuidv4} from 'uuid';

function Form() {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");
  const [submittedData, setSubmittedData] = useState([])
  const [errors, setErrors] = useState([])

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

function handleSubmit(event) {
event.preventDefault()
if (firstName.length > 0){
const formData = {
firstName: firstName,
lastName: lastName,
}
const dataArray = [...submittedData, formData]
setSubmittedData(dataArray);
setFirstName("")
setLastName("")
setErrors([])
} else {
  setErrors(["First name is required!"])
}


}

const listOfSubmissions = submittedData.map((data)=> {

return (
<div key={uuidv4()}>
{data.firstName} {data.lastName}

</div>
 )
})


  return (
   <div>
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
    </form>
    {errors.length > 0
      ? errors.map((error) => (
          <p key={uuidv4()} style={{ color: "red" }}>
            {error}
          </p>
        ))
      : null}
    <h3>Submissions</h3>
    {listOfSubmissions}
   </div> 
  );
}

export default Form;
