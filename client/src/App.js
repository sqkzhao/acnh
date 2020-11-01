import GoogleLoginButton from './modules/components/GoogleLoginButton';
import GoogleLogoutButton from './modules/components/GoogleLogoutButton';
import Library from './modules/Library';

import styles from './modules/module.css/app.module.css';

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
