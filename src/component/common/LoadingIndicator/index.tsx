import React, {useContext} from 'react';
import styled from 'styled-components/native';
import {LoadingValueContext} from '@context/LoadingContext';
import {CText} from '@component/common/Text';

const RootView = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.1);
`;

const LoadingText = styled(CText)`
  font-weight: bold;
  font-size: 16px;
  color: #000000;
`;

function LoadingIndicator() {
  const isLoading = useContext(LoadingValueContext);

  if (!isLoading) {
    return <></>;
  }

  return (
    <RootView>
      <LoadingText>데이터를 가져오고 있어요... ☆ﾐ(o*･ω･)ﾉ</LoadingText>
    </RootView>
  );
}

export default LoadingIndicator;
