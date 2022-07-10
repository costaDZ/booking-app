import React from 'react';
import {View, Text} from 'react-native';

import {
  Container,
  RowContainer,
  TitleWrapper,
  SubTitle,
  Title,
  Link,
  PointBadge,
  BadgeText,
  OptionsContainer,
  OptionsTextContainer,
  OptionsText,
  VerticalDevider,
} from './home-screen.styles';

const HomeScreen = ({navigation}) => {
  return (
    <Container>
      <RowContainer>
        <TitleWrapper>
          <SubTitle>Good morning</SubTitle>
          <Title>Batricia saliora</Title>
        </TitleWrapper>

        <PointBadge>
          <BadgeText>240 point</BadgeText>
        </PointBadge>
      </RowContainer>

      <OptionsContainer>
        <Option icon="📖" text="Claim" />
        <VerticalDevider />
        <Option icon="➕" text="Get point" />
        <VerticalDevider />
        <Option icon="🧡" text="My Card" />
      </OptionsContainer>

      <RowContainer>
        <SubTitle>My Book</SubTitle>
        <Link>See more</Link>
      </RowContainer>
    </Container>
  );
};

export default HomeScreen;

const Option = ({icon, text}) => {
  return (
    <OptionsTextContainer onPress={() => console.log('clicked')}>
      <OptionsText>
        <Text style={{color: 'white'}}>{icon}</Text>
      </OptionsText>
      <OptionsText>
        <Text style={{color: 'white'}}>{text}</Text>
      </OptionsText>
    </OptionsTextContainer>
  );
};
