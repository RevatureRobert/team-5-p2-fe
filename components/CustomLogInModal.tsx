import * as React from 'react';
import { Modal, Portal, Text, Button, Provider } from 'react-native-paper';
import { Appbar } from 'react-native-paper';
import CustomLogIn from './CustomLogIn'
import CustomSignUp from './CustomSignUp'

export default function LogInModal(props) {

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [showSignUp, setShowSignUp] = React.useState(true);

  const hideModal = () => props.setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20, margin: 'auto'};

  return (
    <Provider>
      <Portal>
        <Modal visible={props.visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          <Text>
            {showSignUp 
              ? <CustomLogIn {...props} setUsername={setUsername} setPassword={setPassword} username={username} password={password} onSignUp={() => setShowSignUp(!showSignUp)} setLoggedin={props.setLoggedIn} hideModal={hideModal}/> 
              : <CustomSignUp {...props} onAdd={props.onAdd} setUsername={setUsername} setPassword={setPassword} setEmail={setEmail} username={username} password={password} email={email} onSignUp={() => setShowSignUp(!showSignUp)}/>}
          </Text>
        </Modal>
      </Portal>
    </Provider>
  );
}