import React from 'react';
import styled from 'styled-components/native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParams} from '@type/navigation.type';
import IssueHeader from '@component/issue/IssueHeader';
import ADBannerListItem from '@component/ad/ADBannerListItem';
import {Issue} from '@type/issue.type';

const Wrapper = styled.TouchableOpacity`
  width: 100%;
`;

interface IssueListItemProps {
  index: number;
  data: Issue;
}
function IssueListItem({index, data}: IssueListItemProps) {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  const onPress = () => {
    navigation.navigate('IssuePost', {issueNumber: data.number});
  };

  return (
    <Wrapper onPress={onPress}>
      <IssueHeader data={data} />
      {index === 4 && <ADBannerListItem />}
    </Wrapper>
  );
}

export default IssueListItem;
