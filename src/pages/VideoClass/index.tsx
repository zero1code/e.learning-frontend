import React from 'react';
import {SafeAreaView} from 'react-native';

import Header from '../../components/Header';
import logoImage from '../../assets/images/logo.png';

import {
  Container,
  HeaderContainer,
  Logo,
  Icon,
  VideoContainer,
  Title,
  ClassInfoContainer,
  ClassNumber,
  TimeText,
  DescriptionScroll,
  Description,
  ButtonsContainer,
  PreviousClassButton,
  PreviousClassContainer,
  PreviousButtonText,
  NextClassButton,
  NextButtonText,
} from './styles';

const VideoClass: React.FC = () => {
  return (
    <SafeAreaView>
      <HeaderContainer>
        <Header>
          <Icon size={25} name="arrow-left" color="#ff6680" />
          <Logo source={logoImage} />
          <Icon size={25} name="heart" color="#ff6680" />
        </Header>
      </HeaderContainer>
      <Container overScrollMode="never" showsVerticalScrollIndicator={false}>
        <VideoContainer>
          <Icon name="play-circle" color="#FFF" size={60} />
        </VideoContainer>
        <Title>Introdução a teoria da matemática</Title>
        <ClassInfoContainer>
          <ClassNumber>Aula 01</ClassNumber>
          <Icon name="clock" size={20} color="#a0a0b2" />
          <TimeText>5 min</TimeText>
        </ClassInfoContainer>

        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe porro
          officiis enim dignissimos temporibus minima labore dicta voluptate,
          hic error soluta tenetur molestiae sequi ullam amet doloribus quos
          quaerat tempore! Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Voluptas aliquam explicabo enim debitis voluptate distinctio, ea
          totam quis, odit fugiat, eum tenetur tempore vero numquam consequuntur
          non temporibus nostrum! Odio? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Ad maxime voluptatum laborum quasi, rem architecto
          eveniet consequatur quis facilis facere, perspiciatis nobis itaque ex
          ab quos rerum voluptatem inventore aperiam. Lorem ipsum dolor sit,
          amet consectetur adipisicing elit. Beatae sunt suscipit exercitationem
          molestias et numquam nemo! Voluptas, cumque consequuntur veniam
          sapiente dolor non vitae, similique nesciunt inventore in sed
          quibusdam?
        </Description>

        <ButtonsContainer>
          <PreviousClassButton underlayColor="#0000001a" onPress={() => {}}>
            <PreviousClassContainer>
              <Icon name="arrow-left" color="#ff6680" size={20} />
              <PreviousButtonText>Aula anterior</PreviousButtonText>
            </PreviousClassContainer>
          </PreviousClassButton>
          <NextClassButton activeOpacity={0.7}>
            <NextButtonText>Próxima aula</NextButtonText>
            <Icon name="arrow-right" color="#fff" size={20} />
          </NextClassButton>
        </ButtonsContainer>
      </Container>
    </SafeAreaView>
  );
};

export default VideoClass;
