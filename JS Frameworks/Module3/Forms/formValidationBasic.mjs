//Different checks, like not empty field, specific pattern, length, range check, comparison check
//Good UX: on change feedback, on blur(when lost focus), on submit
//Store error in component state
const [nameError, setNameError] = useState('');

const validateName = (currentName) => {
  if (!currentName.trim()) {
    setNameError('Navn er påkrevd.');
    return false;
  }
  if (currentName.trim().length < 2) {
    setNameError('Navn må være minst 2 tegn.');
    return false;
  }
  setNameError('');
  return true;
};
const handleChange = (event) => {
  const newName = event.target.value;
  setName(newName);
  // Optional: Validate on change for immediate feedback
  // validateName(newName);
};

const handleBlur = () => {
  // Validate when the input loses focus
  validateName(name);
};

const handleSubmit = (event) => {
  event.preventDefault();
  // Validate on submit before proceeding
  if (validateName(name)) {
    alert(`Hei, ${name}! Ditt navn er sendt inn.`);
    setName(''); // Clear input
    setNameError(''); // Clear error
  } else {
    console.log('Validering feilet.');
  }
};

<form onSubmit={handleSubmit}>
  <div>
    <label htmlFor="nameInput">Navn:</label>
    <input
      type="text"
      id="nameInput"
      value={name}
      onChange={handleChange}
      onBlur={handleBlur} // Add onBlur handler
      aria-describedby="nameError" // For accessibility
    />
    {nameError && (
      <p id="nameError" style={{ color: 'red', fontSize: '0.9em' }}>
        {nameError}
      </p>
    )}
  </div>
  <button type="submit">Send inn</button>
</form>;

//aria-describedby="nameError": This ARIA attribute on the input field links it to the error message paragraph, improving accessibility for screen reader users.

///EXAMPLE:

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function ValidatedDugnadForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    bringsTools: false,
    preferredTask: 'Hagearbeid',
  });

  const [errors, setErrors] = useState({}); // Object to hold all error message

  const validateField = (fieldName, value) => {
    let newError = '';
    switch (fieldName) {
      case 'name':
        if (!value.trim()) {
          newError = 'Navn er påkrevd.';
        } else if (value.trim().length < 2) {
          newError = 'Navn må være minst 2 tegn.';
        }
        break;
      case 'email':
        if (!value.trim()) {
          newError = 'E-post er påkrevd.';
        } else if (!EMAIL_REGEX.test(value)) {
          newError =
            'Ugyldig e-postformat. Forventet format er "navn@domene.no".';
        }
        break;
      // Add more cases for other fields if needed
      default:
        break;
    }
    return newError;
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newFieldValue = type === 'checkbox' ? checked : value;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: newFieldValue,
    }));

    // Validate on change for immediate feedback
    const fieldError = validateField(name, newFieldValue);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: fieldError, //naem says email, name or what not, instead of writing (if(name===email))
    }));
  };

  const validateForm = () => { //called on Submit
    const newErrors = {};
    let isValid = true;

    // Validate name
    const nameError = validateField('name', formData.name);
    if (nameError) {
      newErrors.name = nameError;
      isValid = false;
    }

    // Validate email
    const emailError = validateField('email', formData.email);
    if (emailError) {
      newErrors.email = emailError;
      isValid = false;
    }

    // ... validate other fields as needed ...

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (event) => { //If form is valid we call
    event.preventDefault();
    if (validateForm()) {
      setFormData({
        name: '',
        email: '',
        bringsTools: false,
        preferredTask: 'Hagearbeid',
      });
      setErrors({}); // Clear all errors
    } else {
      console.log('Skjemavalidering feilet.');
      // Focus first field with an error (optional UX improvement)
      const firstErrorField = Object.keys(errors).find((key) => errors[key]);
      if (firstErrorField) {
        const fieldElement = document.getElementById(firstErrorField);
        if (fieldElement) {
          fieldElement.focus();
        }
      }
    }
  };


    return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        maxWidth: '400px',
      }}
    >
      <h2>Dugnad Påmelding (Validert)</h2>

      <div>
        <label htmlFor="name">Fullt navn:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          aria-describedby="nameError"
        />
        {errors.name && (
          <p
            id="nameError"
            style={{ color: 'red', fontSize: '0.9em', margin: '0' }}
          >
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email">E-post:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          aria-describedby="emailError"
        />
        {errors.email && (
          <p
            id="emailError"
            style={{ color: 'red', fontSize: '0.9em', margin: '0' }}
          >
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="preferredTask">Ønsket oppgave:</label>
        <select
          id="preferredTask"
          name="preferredTask"
          value={formData.preferredTask}
          onChange={handleChange}
        >
          <option value="Hagearbeid">Hagearbeid</option>
          <option value="Maling">Maling</option>
          <option value="Rydding">Rydding</option>
          <option value="Servering av vafler">Servering av vafler</option>
        </select>
        {/* No specific error displayed for select in this example, but could be added */}
      </div>

      <div>
        <input
          type="checkbox"
          id="bringsTools"
          name="bringsTools"
          checked={formData.bringsTools}
          onChange={handleChange}
        />
        <label htmlFor="bringsTools" style={{ marginLeft: '5px' }}>
          Jeg kan ta med eget verktøy
        </label>
      </div>

<button type="submit" disabled={!isFormValid || !formData.name /* etc. */}>
  Meld deg på
</button>;    </form>
  );
}

export default ValidatedDugnadForm;
}
