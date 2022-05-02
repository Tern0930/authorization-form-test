import React from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";
import '../styles/AuthorizationForm.css';
import InputWMessage from "./InputWMessage";
import MyInputClasses from "./UI/input/MyInput.module.css"

const AuthorizationForm = ({userRequisites, setUserRequisites, signIn, signUp, messages, setMessages}) => {

    let newMessages = messages;

    // not an actual checking as it can be seen, just a plug
    function checkEmail() {
        return !userRequisites.email;
    }

    function checkPassword() {
        return !userRequisites.password;
    }

    function checkSigns() {
        let flag = true;
        Object.values(newMessages).forEach(value => flag &&= !value);
        return flag
    }
    //

    function getEmailMessage() {
        return checkEmail() ? 'Please enter valid email' : ''
    }

    function getPasswordMessage() {
        return checkPassword() ? 'Your password is invalid' : ''
    }

    function setNewMessages() {
        newMessages = {emailMessage: getEmailMessage(), passwordMessage: getPasswordMessage()}
        setMessages(newMessages);
    }

    const emailClasses = [MyInputClasses.myInput];
    const passwordClasses = [MyInputClasses.myInput];
    if (!checkSigns()) {
        if (messages.emailMessage) {
            emailClasses.push(MyInputClasses.error)
        }
        if (messages.passwordMessage) {
            passwordClasses.push(MyInputClasses.error)
        }
    }

    return (
        <div className='myForm'>
            <h2 className='title'>Authorization</h2>
            <form style={{width: '80%'}}>
                <InputWMessage
                    placeholder={'Enter your email'}
                    type={'text'}
                    value={userRequisites.email}
                    onChange={e => setUserRequisites({...userRequisites, email: e.target.value})}
                    message={messages.emailMessage}
                    className={emailClasses.join(' ')}
                />
                <InputWMessage
                    placeholder={'Enter your password'}
                    type={'password'}
                    value={userRequisites.password}
                    onChange={e => setUserRequisites({...userRequisites, password: e.target.value})}
                    message={messages.passwordMessage}
                    className={passwordClasses.join(' ')}
                />
                <div className='buttons'>
                    <MyButton
                        onClick={(e) => {
                            e.preventDefault();
                            setNewMessages();
                            if (checkSigns()) {
                                signIn();
                            }
                        }}
                    >
                        Sign in
                    </MyButton>
                    <MyButton
                        onClick={(e) => {
                            e.preventDefault();
                            setNewMessages();
                            if (checkSigns()) {
                                signUp();
                            }
                        }}
                    >
                        Sign up
                    </MyButton>
                </div>
            </form>
        </div>
    );
};

export default AuthorizationForm;
