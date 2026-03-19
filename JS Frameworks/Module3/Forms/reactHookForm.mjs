//React Hook Form = better and easier form validation in React
//Less code, less error, simpler validation, good with other libraries,plus accessability
npm install react-hook-form

//1. useForm hook, returns an object containing methods and properties to handle form
import { useForm } from 'react-hook-form';
function MyForm() {
  const {
    register, //function to register my inputs
    handleSubmit, 
    formState: { errors }, //checks state, if error, submited,is valid, dirtyfiels, etc
  } = useForm();
  // ... watch = watch and rerender components on change, reset, reset form, setValue, to set value of field
}

//2. you spread the register function to connect to useForm (firstName is the name of the input, will be the key) rest is rules
<input {...register('firstName', { required: true, minLength: 2 })} />

//3. handleSubmit
const onSubmit = (data) => {
  console.log('Form data:', data); // 'data' contains validated form values
};

const onError = (errors, e) => {
  console.log('Validation errors:', errors, e);
};

return (
  <form onSubmit={handleSubmit(onSubmit, onError)}>
    {/* ... inputs ... */}
    <button type="submit">Submit</button>
  </form>
);

//EXAMPLE
import { useForm } from 'react-hook-form';

function RHFSimpleNameForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur', // configuration option tells React Hook Form to trigger validation when an input field loses focus
  });

  const onSubmit = (data) => {
    alert(`Hei, ${data.name}! Ditt navn er sendt inn via React Hook Form.`);
    // React Hook Form doesn't automatically clear fields on submit,
    // you'd use reset() for that if needed:
    // reset({ name: '' }); // if you import reset from useForm
  };

  const onError = (formErrors) => {
    console.log('Valideringsfeil:', formErrors);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <h2>Navn (React Hook Form)</h2>
      <div>
        <label htmlFor="name">Navn:</label>
        <input
          id="name"
          // Register the input. "name" is the key for this field in form data.
          {...register('name', {
            required: 'Navn er påkrevd.', // Custom error message for required
            minLength: {
              value: 2,
              message: 'Navn må være minst 2 tegn.', // Custom message for minLength
            },
          })}
          aria-invalid={errors.name ? 'true' : 'false'}
          aria-describedby="nameErrorRHF"
        />
        {/* Display error message for the 'name' field */}
        {errors.name && (
          <p
            id="nameErrorRHF"
            role="alert"
            style={{ color: 'red', fontSize: '0.9em' }}
          >
            {errors.name.message}
          </p>
        )}
      </div>
      <button type="submit">Send inn</button>
    </form>
  );
}

export default RHFSimpleNameForm;

//BETTER EXAMPLE
import React from 'react';
import { useForm } from 'react-hook-form';

const EMAIL_REGEX_RHF = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Same regex

function RHFDugnadForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    defaultValues: {
      // Set default values for the form
      name: '',
      email: '',
      bringsTools: false,
      preferredTask: 'Hagearbeid',
    },
    mode: 'onChange', // Validate on change for more immediate feedback
  });

  const onSubmit = (data) => {
    console.log('Dugnadsdata fra React Hook Form:', data);
    alert(
      `Takk, ${data.name}! Din påmelding for dugnad med ${data.preferredTask} er registrert.`,
    );
    reset(); // Reset the form to defaultValues after successful submission
  };

  const onError = (formErrors) => {
    console.log('Skjemavalideringsfeil:', formErrors);
    // Optional: focus the first field with an error
    const firstErrorField = Object.keys(formErrors)[0];
    if (firstErrorField) {
      const fieldElement = document.getElementsByName(firstErrorField)[0];
      if (fieldElement) {
        fieldElement.focus();
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        maxWidth: '400px',
      }}
    >
      <h2>Dugnad Påmelding (React Hook Form)</h2>

      <div>
        <label htmlFor="rhfName">Fullt navn:</label>
        <input
          id="rhfName"
          {...register('name', {
            required: 'Navn er påkrevd.',
            minLength: { value: 2, message: 'Navn må være minst 2 tegn.' },
          })}
          aria-invalid={errors.name ? 'true' : 'false'}
        />
        {errors.name && (
          <p
            role="alert"
            style={{ color: 'red', fontSize: '0.9em', margin: '0' }}
          >
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="rhfEmail">E-post:</label>
        <input
          id="rhfEmail"
          type="email" // Keep type for browser UX (e.g. keyboard on mobile)
          {...register('email', {
            required: 'E-post er påkrevd.',
            pattern: {
              value: EMAIL_REGEX_RHF,
              message:
                "Ugyldig e-postformat. Forventet format er 'navn@domene.no'.",
            },
          })}
          aria-invalid={errors.email ? 'true' : 'false'}
        />
        {errors.email && (
          <p
            role="alert"
            style={{ color: 'red', fontSize: '0.9em', margin: '0' }}
          >
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="rhfPreferredTask">Ønsket oppgave:</label>
        <select
          id="rhfPreferredTask"
          {...register('preferredTask', {
            required: 'Vennligst velg en oppgave.',
          })}
          aria-invalid={errors.preferredTask ? 'true' : 'false'}
        >
          <option value="Hagearbeid">Hagearbeid</option>
          <option value="Maling">Maling</option>
          <option value="Rydding">Rydding</option>
          <option value="Servering av vafler">Servering av vafler</option>
        </select>
        {errors.preferredTask && (
          <p
            role="alert"
            style={{ color: 'red', fontSize: '0.9em', margin: '0' }}
          >
            {errors.preferredTask.message}
          </p>
        )}
      </div>

      <div>
        <input
          id="rhfBringsTools"
          type="checkbox"
          {...register('bringsTools')} // No specific validation here, just register
        />
        <label htmlFor="rhfBringsTools" style={{ marginLeft: '5px' }}>
          Jeg kan ta med eget verktøy
        </label>
      </div>

      {/* Example of a custom validation rule */}
      <div>
        <label htmlFor="rhfSpecialRequest">
          Spesialønske (valgfritt, maks 50 tegn):
        </label>
        <textarea
          id="rhfSpecialRequest"
          {...register('specialRequest', {
            maxLength: {
              value: 50,
              message: 'Spesialønsket kan ikke være mer enn 50 tegn.',
            },
          })}
          aria-invalid={errors.specialRequest ? 'true' : 'false'}
        />
        {errors.specialRequest && (
          <p
            role="alert"
            style={{ color: 'red', fontSize: '0.9em', margin: '0' }}
          >
            {errors.specialRequest.message}
          </p>
        )}
      </div>

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Sender inn...' : 'Meld deg på'}
      </button>
    </form>
  );
}

export default RHFDugnadForm;
