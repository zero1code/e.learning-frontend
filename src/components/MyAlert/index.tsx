import React from 'react';
import {StyleSheet, Alert} from 'react-native';
import {myUseContext} from '../../contexts/context';

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
  courseName: string;
}

const MyAlert: React.FC<MyAlertProps> = ({courseName}) => {
  const {showOrHideAlert, showAlert} = myUseContext();
  return (
    <Container>
      <MyModal
        animationType="fade"
        transparent={true}
        visible={showAlert}
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
                  showOrHideAlert();
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
