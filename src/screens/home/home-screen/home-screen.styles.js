import styled from 'styled-components/native';
import {COLORS} from '../../../constants';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.secondary};
  padding: 0 20px;
`;

export const RowContainer = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  margin: 5px 0px;
`;

export const TitleWrapper = styled.View``;

export const Link = styled.Text`
  color: ${COLORS.primary};
  text-decoration: underline;
`;

export const SubTitle = styled.Text`
  font-size: 15px;
  color: #fff;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #fff;
  font-family: 'Roboto';
`;

export const PointBadge = styled.View`
  border-radius: 40px;
  background-color: ${COLORS.primary};
  margin-right: 5px;
  color: #fff;
  padding: 5px 12px;
`;

export const BadgeText = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export const OptionsContainer = styled.View`
  background-color: ${COLORS.lightGray};
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 50px;
  margin: 20px 0;
  border-radius: 10px;
`;

export const OptionsTextContainer = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const OptionsText = styled.View`
  color: ${COLORS.white};
  margin-right: 4px;
`;
export const VerticalDevider = styled.View`
  width: 2px;
  height: 50%;
  background-color: ${COLORS.lightGray4};
  align-self: center;
  border-radius: 50px;
`;
