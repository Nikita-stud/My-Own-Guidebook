//CSS in Vite is linked to the main source file, it imbeds it automatically to the HTML
//All classes with same classNames in all paths in your project will have same class
//src/index.css or src/App.css
import './index.css'; //Often used for global styles
//or
import './App.css';

//If specific style for a component, like the button component
// .module.css on top of button
import styles from './Button.module.css'; // Import the CSS Module

function Button() {
  // Access the 'primaryButton' class from Button.module.css
  return <button className={styles.primaryButton}>Click Me</button>;
}
function LargeButton() {
  // Assuming Button.module.css also has a .large class defined
  return (
    <button className={`${styles.primaryButton} ${styles.large}`}>
      Large Button
    </button>
  );
}

//!!!!if a style is 
.site-main {}

//then it will be called as if moduled
className={styles.siteMain}