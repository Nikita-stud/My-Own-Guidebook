// Zod, typescript first form validation. we define a schema and zod validates schema
//Zod allows API data schemas, will also generate TypeScript for us. can be used with js

npm install zod

//1.Import
import { z } from 'zod';

//2. Define a schema for a user .objects
const UserSchema = z.object({
  username: z.string().min(3, 'Brukernavn må ha minst 3 tegn.'), // Username must be at least 3 chars
  email: z.string().email('Ugyldig e-postadresse.'), // Invalid email address
  age: z.number().min(18, 'Du må være minst 18 år.').optional(), // You must be at least 18
  isAdmin: z.boolean().default(false), // Defaults to false if not provided
  registrationDate: z.date().optional(),
});

// Example 1: Valid data
const validUserData = {
  username: 'TestBruker',
  email: 'test@example.com',
  age: 25,
};

try {
  const parsedUser = UserSchema.parse(validUserData); // parse validates data against scheme, if fails throws ZodError
  console.log('Validert bruker (parse):', parsedUser);
} catch (error) {
  if (error instanceof z.ZodError) {
    console.error('Valideringsfeil (parse):', error.errors); //error.errors: An array of issue objects.
  }
}

// Example 2: Invalid data
const invalidUserData = {
  username: 'Te',
  email: 'not-an-email',
};

const result = UserSchema.safeParse(invalidUserData); // safeParse validates but does not throw ERROR, but rather boolean result
if (!result.success) {
  console.error(
    'Valideringsfeil (safeParse):',
    result.error.flatten().fieldErrors, //error.flatten().fieldErrors gives object with error
  );


//EXAMPLE:
import { z } from 'zod';
 
Zod Schema for our Dugnad Form
Let's create a Zod schema that matches the fields and validation rules for our "Dugnad Påmelding" form.

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
    .email({
      message: "Ugyldig e-postformat. Forventet format er 'navn@domene.no'.",
    })
    // Example of a custom refinement for more specific email validation if needed
    .refine((value) => NORWEGIAN_EMAIL_REGEX.test(value), {
      message: 'E-postadressen ser ikke ut til å være gyldig.', // More generic message
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
    .optional(), // This makes the field optional
  // Example: Adding a confirm email field if we wanted to
  // confirmEmail: z.string().min(1, { message: "Bekreft e-post er påkrevd."})
});
// Example: Cross-field validation using .refine at the object level
// .refine(data => data.email === data.confirmEmail, {
//   message: "E-postadressene må stemme overens.",
//   path: ["confirmEmail"], // Path to field to associate error with
// });

// Infer the type for TypeScript users
// export type DugnadFormData = z.infer<typeof DugnadFormSchema>;
/*
DugnadFormData would look like:
{
  name: string;
  email: string;
  preferredTask: "Hagearbeid" | "Maling" | "Rydding" | "Servering av vafler";
  bringsTools: boolean;
  specialRequest?: string | undefined;
}
*/

//USE IN SERVER.SIDE
    app.post('/api/register-dugnad', (req, res) => {
      const result = DugnadFormSchema.safeParse(req.body);

      if (!result.success) {
        return res
          .status(400)
          .json({ errors: result.error.flatten().fieldErrors });
      }

      // Process result.data (validated and typed)
      const validatedData = result.data;
      // ... save to database, etc. ...
      res
        .status(201)
        .json({ message: 'Påmelding mottatt!', data: validatedData });
    });