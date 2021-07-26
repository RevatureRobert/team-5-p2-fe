import * as React from 'react';
import { Modal, Portal, Text, Button, Provider } from 'react-native-paper';
import { Appbar } from 'react-native-paper';
import CustomLogIn from './CustomLogIn'
import CustomSignUp from './CustomSignUp'

export default function CustomLogInModal(props) {

  const [showSignUp, setShowSignUp] = React.useState(true);

  const hideModal = () => props.setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20, margin: 'auto'};

  return (
    <Provider>
      <Portal>
        <Modal visible={props.visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          <Text>
            {showSignUp 
              ? <CustomLogIn {...props}  onSignUp={() => setShowSignUp(!showSignUp)} hideModal={hideModal}/> 
              : <CustomSignUp {...props} onAdd={props.onAdd} onSignUp={() => setShowSignUp(!showSignUp)}/>}
          </Text>
        </Modal>
      </Portal>
    </Provider>
  );
}