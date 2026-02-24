//if statement
function Greeting({ isLoggedIn }) {
  let messageComponent;
  if (isLoggedIn) {
    messageComponent = <h2>Velkommen tilbake!</h2>;
  } else {
    messageComponent = <h2>Vennligst logg inn.</h2>;
  }
  return (
    <div>
      {/* Render the component determined by the if statement */}
      {messageComponent}
    </div>
  );
}
//Ternary operator (?:)
function LoginStatusButton({ isLoggedIn, onLogin, onLogout }) {
  return (
    <div>
      {
        isLoggedIn ? (
          <button onClick={onLogout}>Logg ut</button> // Rendered if isLoggedIn is true
        ) : (
          <button onClick={onLogin}>Logg inn</button>
        ) // Rendered if isLoggedIn is false
      }
    </div>
  );
}
//Logical AND (&&) if a condition true then render
function Mailbox({ unreadMessages }) {
  const messageCount = unreadMessages.length;

  return (
    <div>
      <h2>Innboks</h2>
      {/* Only render the paragraph if messageCount > 0 */}
      {messageCount > 0 && <p>Du har {messageCount} uleste meldinger.</p>}
      {/* Always render this part */}
      <p>Velkommen til innboksen din.</p>
    </div>
  );
}
//null - render nothing on a condition
function WarningBanner({ showWarning }) {
  if (!showWarning) {
    return null; // Render nothing if showWarning is false
  }

  // Otherwise, render the warning div
  return (
    <div
      style={{
        backgroundColor: 'yellow',
        padding: '10px',
        border: '1px solid orange',
      }}
    >
      Advarsel!
    </div>
  );
}
