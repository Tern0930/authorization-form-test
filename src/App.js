import React, {useState} from 'react'
import MyInput from "./components/UI/input/MyInput";
import './styles/App.css'
import AuthorizationForm from "./components/AuthorizationForm";

function App() {

    const [userRequisites, setUserRequisites] = useState({email: '', password: ''});
    const [messages, setMessages] = useState({emailMessage: '', passwordMessage: ''});

    function signIn() {
        console.log(`User email: '${userRequisites.email}', password: '${userRequisites.password}' is signing in.`);
        setUserRequisites({...userRequisites, password: ''});
    }

    function signUp() {
        console.log(`User email: '${userRequisites.email}', password: '${userRequisites.password}' is signing up.`);
    }

  return (
    <div className="App">
        <AuthorizationForm
            userRequisites={userRequisites}
            setUserRequisites={setUserRequisites}
            signIn={signIn}
            signUp={signUp}
            messages={messages}
            setMessages={setMessages}
        />
    </div>
  );
}

export default App;
