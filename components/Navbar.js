import { Button, Text } from '@mantine/core';
import { useState } from 'react';
import styles from "../styles/Home.module.scss";
import Login from './registation/Login';
import SignUp from './registation/SignUp';
function Navbar() {
    const [openLogin, setOpenLogin] = useState(false);
    const [openSignUp, setOpenSignUp] = useState(false);

  return (
   <>
    {openLogin && <Login opened = {openLogin} setOpen= {(e) => setOpenLogin(e)} />}
    {openSignUp && <SignUp opened = {openSignUp} setOpen= {(e) => setOpenSignUp(e)} />}
     <nav className={styles.nav}>
            <section className={styles.logo}>
                <text className={styles.logoText}>NOTIE</text>
            </section>
            <section className={styles.buttons}>
                <div>
                <Button  color="violet" onClick={() => setOpenLogin(true)}>Login</Button>
            </div>
            <div>
                <Button  variant="outline" color="violet" onClick={() => setOpenSignUp(true)}>Sign Up</Button>
            </div>
            </section>
    </nav>
   </>
  )
}

export default Navbar;