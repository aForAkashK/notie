import { Modal, Button, Group, useMantineTheme, TextInput,PasswordInput,Input, Text  } from '@mantine/core';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from "../../styles/Home.module.scss"
function Login(props) {
    
    const theme = useMantineTheme();

    const toRegistration = () => {
        props.redirect(true);
        props.setOpen(false);
    }
  return (
    <>
        <Modal 
            centered 
            opened={props.opened} 
            onClose={() => props.setOpen(false)} 
            title="Login" 
            transition="fade"
            size="xl"
            transitionDuration={600}
            transitionTimingFunction="ease"
            overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
            overlayOpacity={0}
            overlayBlur={2}
            // className={styles.dialog_model}
        >
            <div className={styles.login_container}>
                <div>
                    <div className={styles.image_container}>
                    <span>welcome back User</span>
                    <span>please enter the details to login</span>
                    </div>
                </div>
                <div className={styles.form_part_container}>
                    <div className={styles.form_title_part}>
                    welcome to <span>cloud</span>NOTE
                    </div>
                    <div className={styles.form_container_main}>
                    <div className={styles.form_header}>Login your account</div>
                    <form>
                        <TextInput
                        id='standard_password_input'
                        label='Email/Mobile'
                        type='text'
                        // label="Password"
                        withAsterisk
                        placeholder='Email/Mobile'
                        // autoComplete='current_password '
                        // variant='standard'
                        className={styles.form_control}
                        autoFocus
                        // value={userName}
                        // onChange={handleUserName}
                        />
                        <PasswordInput
                            id='standard_adornment_password'
                            placeholder="Password"
                            label="Password"
                            withAsterisk
                        />

                        <div className={styles.forgot_password}>
                        <a href='#'>forgot password?</a>
                        </div>
                        <button
                        type='submit'
                        className={styles.Login_button}
                        // onClick={() => props.setOpenLogin(false)}
                        >
                        <Link
                            // to='/dashboard'
                            href="/"
                            className={styles.text_decoration_none}
                        >
                            Login
                        </Link>
                        </button>
                        <div className={styles.create_account}>
                        <a href='#' 
                        onClick={toRegistration}
                        >
                            create account
                        </a>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </Modal>

        {/* <Group>
            <Button onClick={() => setOpen(!opened)}>Open Model</Button>
        </Group> */}
      </>
    
  )
}

export default Login;