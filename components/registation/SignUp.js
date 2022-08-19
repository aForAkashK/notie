import { Modal, Button, Group, useMantineTheme, TextInput,PasswordInput,Input, Text  } from '@mantine/core';
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../../styles/Home.module.scss"


const SignUp = (props) => {
    const theme = useMantineTheme();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleUserName = (e) => {
    setUserName(e.target.value);
    console.log("userName :", e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    console.log("email:", e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    console.log("password:", e.target.value);
  };
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const changePages = () => {
    props.setOpenSignUp(false);
    props.setOpenLogin(true);
  };
  return (
    <>
      <Modal 
            centered 
            opened={props.opened} 
            onClose={() => props.setOpen(false)} 
            title="Registation" 
            transition="fade"
            size="xl"
            transitionDuration={600}
            transitionTimingFunction="ease"
            overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
            overlayOpacity={0}
            overlayBlur={2}
        >
        <div className={styles.signup_container}>
          <div className='image_text'>
            <div className={styles.signup_image_container}>
              <span>welcome new User</span>
              <span>please enter the details to signup</span>
            </div>
          </div>
          <div className={styles.form_part_container}>
            <div className={styles.form_title_part}>
              welcome to <span>cloud</span>NOTE
            </div>
            <div className={styles.form_container_main}>
              <div className={styles.form_header}>Create your account</div>
              <form>
                {/* <TextInput
                  id='standard_password_input'
                  label='userName'
                  type='text'
                  placeholder='email'
                //   autoComplete='current_password '
                //   variant='standard'
                  className={styles.form_control}
                  autoFocus
                //   value={userName}
                //   onChange={handleUserName}
                /> */}
                <TextInput
                  id='standard_password_input'
                  label='email id'
                  type='email'
                  withAsterisk
                  placeholder='something@gmail.com'
                //   autoComplete='current_password '
                //   variant='standard'
                  className={styles.form_control}
                //   value={email}
                //   onChange={handleEmail}
                />
                <PasswordInput
                    id='standard_adornment_password'
                    placeholder="Password"
                    label="Password"
                    withAsterisk
                />


                <button
                  type='submit'
                  className={styles.signup_button}
                //   onClick={() => props.setOpenSignUp(false)}
                >
                  <Link
                    // to='/dashboard'
                    href={"/"}
                    className={`${styles.text_decoration_none} ${styles.text_light}`}
                  >
                    Signup
                  </Link>
                </button>
                <div className={styles.login_account}>
                  <a href='#' 
                //   onClick={changePages}
                  >
                    already user <span>Login</span>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default SignUp;
