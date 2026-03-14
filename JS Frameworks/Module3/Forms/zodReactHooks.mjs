//RESOLVE = resolver is a function that takes your form values and returns an object containing any validation errors and the validated values

npm install @hookform/resolvers zod

import { z } from 'zod';
export const NameSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: 'Navn må være minst 2 tegn.' })
    .max(50, { message: 'Navn kan ikke overstige 50 tegn.' }),
});


import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'; //THIS IS the RESOLVE
import { NameSchema } from './schemas'; // Assuming schemas.js is in the same directory

function RHFZodSimpleNameForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(NameSchema), // Step 3: Use the Zod resolver
    mode: 'onBlur', 
  });

  const onSubmit = (data) => {
    // 'data' here is validated and typed according to NameSchema
    console.log('Validert data:', data);
    alert(`Hei, ${data.name}! Ditt navn er sendt inn (validert med Zod).`);
  };

  const onError = (formErrors) => {
    console.log('Valideringsfeil fra Zod:', formErrors);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <h2>Navn (React Hook Form med Zod)</h2>
      <div>
        <label htmlFor="nameZod">Navn:</label>
        <input
          id="nameZod"
          {...register('name')} // No need for inline validation rules here!
          aria-invalid={errors.name ? 'true' : 'false'}
          aria-describedby="nameErrorRHFZod"
        />
        {errors.name && (
          <p
            id="nameErrorRHFZod"
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

export default RHFZodSimpleNameForm;


//EXAMPLE: // schemas.js

import { z } from 'zod';

const NORWEGIAN_EMAIL_REGEX =
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const NAME_REGEX = /^[a-zA-ZæøåÆØÅ .'-]+$/;

export const DugnadFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: 'Navn må bestå av minst 2 tegn.' })
    .max(100, { message: 'Navn kan ikke være lenger enn 100 tegn.' })
    .regex(NAME_REGEX, { message: 'Navn inneholder ugyldige tegn.' }),
  email: z
    .string()
    .trim()
    .min(1, { message: 'E-post er påkrevd.' })
    .email({ message: 'Ugyldig e-postformat.' })
    .refine((value) => NORWEGIAN_EMAIL_REGEX.test(value), {
      message:
        'E-postadressen ser ikke ut til å være gyldig for dette domenet.',
    }),
  preferredTask: z.enum(
    ['Hagearbeid', 'Maling', 'Rydding', 'Servering av vafler'],
    {
      errorMap: () => ({ message: 'Vennligst velg en gyldig oppgave.' }),
    },
  ),
  bringsTools: z.boolean().default(false),
  specialRequest: z
    .string()
    .trim()
    .max(50, { message: 'Spesialønsket kan ikke være mer enn 50 tegn.' })
    .optional(),

    //THEN ADD

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { DugnadFormSchema } from './schemas'; // Adjust path if needed

// For TypeScript users, you can import the inferred type
// import type { DugnadFormData } from './schemas';

function RHFZodDugnadForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm(
    /*<DugnadFormData>*/ {
      // Pass inferred type to useForm for full type safety
      resolver: zodResolver(DugnadFormSchema),
      defaultValues: {
        // defaultValues should match the schema structure
        name: '',
        email: '',
        bringsTools: false, // Zod default will apply if not explicitly set here and field is optional
        preferredTask: 'Hagearbeid', // Or undefined if you want Zod's default to kick in (if any)
        specialRequest: '',
        // confirmEmail: '' // if using confirmEmail
      },
      mode: 'onChange', // Or 'onBlur' etc.
    },
  );

  const onSubmit = (data /*: DugnadFormData*/) => {
    // data is now fully validated by DugnadFormSchema and typed
    console.log('Zod-validert dugnadsdata:', data);
    alert(
      `Takk, ${data.name}! Din påmelding for ${data.preferredTask} (validert med Zod) er registrert.`,
    );
    reset(); // Resets to defaultValues or empty if not defined
  };

  const onError = (formErrors) => {
    console.log('Skjemavalideringsfeil fra Zod:', formErrors);
    // Attempt to focus the first field with an error
    const firstErrorKey = Object.keys(formErrors)[0];
    if (firstErrorKey) {
      // Zod errors might have nested paths, e.g. for array fields
      // For simple flat objects, this should work.
      const fieldElement = document.getElementsByName(firstErrorKey)[0];
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
      <h2>Dugnad Påmelding (RHF + Zod)</h2>

      <div>
        <label htmlFor="rhfZodName">Fullt navn:</label>
        <input
          id="rhfZodName"
          {...register('name')}
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
        <label htmlFor="rhfZodEmail">E-post:</label>
        <input
          id="rhfZodEmail"
          type="email"
          {...register('email')}
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

      {/* If using confirmEmail
      <div>
        <label htmlFor="rhfZodConfirmEmail">Bekreft E-post:</label>
        <input id="rhfZodConfirmEmail" type="email" {...register("confirmEmail")} aria-invalid={errors.confirmEmail ? "true" : "false"} />
        {errors.confirmEmail && <p role="alert" style={{ color: 'red', fontSize: '0.9em', margin: '0' }}>{errors.confirmEmail.message}</p>}
      </div>
      */}

      <div>
        <label htmlFor="rhfZodPreferredTask">Ønsket oppgave:</label>
        <select
          id="rhfZodPreferredTask"
          {...register('preferredTask')}
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
        <label htmlFor="rhfZodSpecialRequest">Spesialønske (valgfritt):</label>
        <textarea
          id="rhfZodSpecialRequest"
          {...register('specialRequest')}
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

      <div>
        <input
          id="rhfZodBringsTools"
          type="checkbox"
          {...register('bringsTools')}
        />
        <label htmlFor="rhfZodBringsTools" style={{ marginLeft: '5px' }}>
          Jeg kan ta med eget verktøy
        </label>
        {/* Checkbox errors are less common unless it's a required checkbox with specific validation */}
        {errors.bringsTools && (
          <p
            role="alert"
            style={{ color: 'red', fontSize: '0.9em', margin: '0' }}
          >
            {errors.bringsTools.message}
          </p>
        )}
      </div>

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Sender inn...' : 'Meld deg på'}
      </button>
    </form>
  );
}

export default RHFZodDugnadForm;