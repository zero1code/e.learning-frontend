import React, {useState} from 'react';
import {StyleSheet, Alert} from 'react-native';

import {
  Container,
  MyModal,
  ModalContainer,
  ModalView,
  Icon,
  Title,
  ButtonsContainer,
  CancelButton,
  CancelButtonText,
  ConfirmButton,
  ConfirmButtonText,
} from './styles';

interface MyAlertProps {
  visible: boolean;
  courseName: string;
}

const MyAlert: React.FC<MyAlertProps> = ({visible, courseName}) => {
  const [alertVisible, setAlertVisible] = useState(visible);

  return (
    <Container>
      <MyModal
        animationType="fade"
        transparent={true}
        visible={alertVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <ModalContainer>
          <ModalView style={styles.modalView}>
            <Icon name="trash" color="#ff6080" size={30} />
            <Title>{`Quer excluir suas aulas de ${courseName}?`}</Title>
            <ButtonsContainer>
              <CancelButton
                underlayColor="#0000001a"
                onPress={() => {
                  setAlertVisible(!visible);
                }}>
                <CancelButtonText>Não!</CancelButtonText>
              </CancelButton>
              <ConfirmButton onPress={() => {}} activeOpacity={0.5}>
                <ConfirmButtonText>Com certeza</ConfirmButtonText>
              </ConfirmButton>
            </ButtonsContainer>
          </ModalView>
        </ModalContainer>
      </MyModal>
    </Container>
  );
};

const styles = StyleSheet.create({
  modalView: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.85,
    elevation: 5,
  },
});

export default MyAlert;
