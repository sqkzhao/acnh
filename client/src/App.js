import GoogleLoginButton from './components/GoogleLoginButton';
import GoogleLogoutButton from './components/GoogleLogoutButton';
import Library from './components/Library';

import styles from './module.css/app.module.css';

function App() {
  return (
    <div className={styles.bg}>
      {/* <GoogleLoginButton /> */}
      {/* <GoogleLogoutButton /> */}
      <Library />
    </div>
  );
}

export default App;
