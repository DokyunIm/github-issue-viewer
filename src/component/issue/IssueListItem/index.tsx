import React from 'react';
import styled from 'styled-components/native';
import IssueHeader from '@component/issue/IssueHeader';
import {Issue} from '@type/issue.type';
import ADBannerListItem from '@component/ad/ADBannerListItem';

const Wrapper = styled.TouchableOpacity`
  width: 100%;
`;

interface IssueListItemProps {
  index: number;
  data: Issue;
}
function IssueListItem({index, data}: IssueListItemProps) {
  return (
    <Wrapper>
      <IssueHeader data={data} />
      {index === 4 && <ADBannerListItem />}
    </Wrapper>
  );
}

export default IssueListItem;
