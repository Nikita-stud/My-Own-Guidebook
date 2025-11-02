export function switchStatementExample() {
  let role = prompt('Enter your role:');

  switch (role) {
    case 'admin':
    case 'superuser':
      alert('Full access granted.');
      break;
    case 'user':
    case 'visitor':
      alert('Restricted access.');
      break;
    default:
      alert('Role not recognized.');
  }
}
