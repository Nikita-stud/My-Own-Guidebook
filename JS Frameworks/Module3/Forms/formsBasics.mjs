//Controlled components, is REACT way of collecting data

//So value is bound to controlled React state, any changes
//are handed by onChange.

//1. set input value
const [name, setName] = useState('');

//2. handlefunction onchange and submit
const handleChange = (event) => {
  setName(event.target.value);
};
const handleSubmit = (event) => {
  event.preventDefault();
  setName(''); // Optionally clear the input after submission
};

//3. bind value to name to display it and add on onSubmit to form and onChange to input
<form onSubmit={handleSubmit}>
  <label htmlFor="nameInput">Navn:</label>
  <input
    type="text"
    id="nameInput"
    value={name}
    onChange={handleChange} // Step 3: Call handler on change
  />
  <button type="submit">Send inn</button>
</form>;

//EXAMPLE:
import React, { useState } from 'react';

function DugnadRegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    bringsTools: false,
    preferredTask: 'Hagearbeid', // Default task
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target; //name attribute in input
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Innsendte dugnadsdata:', formData);

    // Reset form (optional)
    setFormData({
      name: '',
      email: '',
      bringsTools: false,
      preferredTask: 'Hagearbeid',
    });
  };
}

<form
  onSubmit={handleSubmit}
  style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    maxWidth: '400px',
  }}
>
  <div>
    <label htmlFor="name">Fullt navn:</label>
    <input
      type="text"
      id="name"
      name="name" // Crucial for generic handleChange
      value={formData.name}
      onChange={handleChange}
      required
    />
  </div>

  <div>
    <label htmlFor="email">E-post:</label>
    <input
      type="email"
      id="email"
      name="email" // Crucial for generic handleChange
      value={formData.email}
      onChange={handleChange}
      required
    />
  </div>
  <div>
    <label htmlFor="preferredTask">Ønsket oppgave:</label>
    <select
      id="preferredTask"
      name="preferredTask"
      value={formData.preferredTask}
      onChange={handleChange}
    >
      <option value="Hagearbeid">Hagearbeid (Gardening)</option>
      <option value="Maling">Maling (Painting)</option>
      <option value="Rydding">Rydding (Cleaning/Tidying)</option>
      <option value="Servering av vafler">
        Servering av vafler (Serving waffles)
      </option>
    </select>
  </div>

  <div>
    <input
      type="checkbox"
      id="bringsTools"
      name="bringsTools" // Crucial for generic handleChange
      checked={formData.bringsTools} // Use 'checked' for checkboxes
      onChange={handleChange}
    />
    <label htmlFor="bringsTools" style={{ marginLeft: '5px' }}>
      Jeg kan ta med eget verktøy
    </label>
  </div>

  <button type="submit">Meld deg på</button>
</form>;

//Handling Radio Buttons
const [paymentMethod, setPaymentMethod] = useState('Vipps'); // Default payment

const handlePaymentChange = (event) => {
  setPaymentMethod(event.target.value);
};

// In your JSX
<div>
  <p>Velg betalingsmåte:</p>
  <label>
    <input
      type="radio"
      name="paymentMethod"
      value="Vipps"
      checked={paymentMethod === 'Vipps'}
      onChange={handlePaymentChange}
    />{' '}
    Vipps
  </label>
  <label>
    <input
      type="radio"
      name="paymentMethod"
      value="Kort"
      checked={paymentMethod === 'Kort'}
      onChange={handlePaymentChange}
    />{' '}
    Bankkort
  </label>
  <label>
    <input
      type="radio"
      name="paymentMethod"
      value="Faktura"
      checked={paymentMethod === 'Faktura'}
      onChange={handlePaymentChange}
    />{' '}
    Faktura
  </label>
</div>;
