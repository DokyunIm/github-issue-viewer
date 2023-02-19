import React from 'react';
import {Image} from 'react-native';
import styled from 'styled-components/native';
import {CText} from '@component/common/Text';
import {Issue} from '@type/issue.type';

const RootView = styled.View`
  flex-direction: row;
  padding: 12px 0;
  background-color: #ffffff;
  border-color: #d3d3d3;
  border-bottom-width: 0.5px;
  align-items: center;
`;

const ContentView = styled.View`
  flex: 1;
`;

const CommentView = styled.View`
  justify-content: center;
  align-items: center;
`;

const Title = styled(CText)`
  margin-bottom: 6px;
`;

function IssueHeader({data}: {data: Issue}) {
  return (
    <RootView>
      {data.avatarUrl && (
        <Image
          source={{uri: data.avatarUrl, width: 32, height: 32}}
          style={{marginRight: 4}}
        />
      )}
      <ContentView>
        <Title size={14} numberOfLines={1}>
          #{data.number} {data.title}
        </Title>
        <CText size={12}>
          작성자: {data.issuer}, 작성일: {data.createdAt}
        </CText>
      </ContentView>
      <CommentView>
        <CText size={10}>코멘트:{data.totalComments}</CText>
      </CommentView>
    </RootView>
  );
}

export default IssueHeader;
