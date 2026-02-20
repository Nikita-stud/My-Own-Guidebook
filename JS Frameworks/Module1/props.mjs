//Props = properties. In react parents allow to pass data from parent to child
<UserProfile //If we call the function somewhere and pass in the values
  name="Kari Nordmann"
  city="Bergen"
  height="1.90"
  age={30}
  isActive={true}
/>;

//The 'props' object will contain { name: '...', city: '...', age: ..., isActive: ... }
//Can also use props.name (whatever you name the object)
function UserProfile({ name, city, height, age, isActive }) {
  return (
    <div style={{ border: '1px solid grey', margin: '10px', padding: '10px' }}>
      <h2>Navn: {name}</h2>
      <p>By: {city}</p>
      <p>Height: {height}</p>
      <p>Alder: {age}</p>
      <p>Status: {isActive ? 'Aktiv' : 'Inaktiv'}</p>
    </div>
  );
}

<Card title="Brukerinfo">
  {/* This UserProfile component is passed as props.children to Card */}
  <UserProfile name="Siv Jensen" city="Oslo" age={50} isActive={true} />
</Card>;

//The "children" refers to all content placed between <Card></Card> when called
//The prop 'title' is a regular prop
function Card({ children, title }) {
  return (
    <div className={styles.card}>
      {title && <h2 className={styles.cardTitle}>{title}</h2>}{' '}
      {/* Conditionally render title */}
      <div className={styles.cardContent}>
        {children} {/* Render the content passed inside */}
      </div>
    </div>
  );
}
