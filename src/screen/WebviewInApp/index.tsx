import React, {useEffect, useRef} from 'react';
import {BackHandler} from 'react-native';
import {WebView} from 'react-native-webview';
import styled from 'styled-components/native';
import SafeAreaView from '@component/common/SafeAreaView';
import {CText} from '@component/common/Text';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParams} from '@type/navigation.type';

const Header = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const CloseButton = styled.TouchableOpacity`
  left: 8px;
  position: absolute;
`;

const UrlView = styled.View`
  width: 50%;
`;

function WebviewInApp() {
  const webView = useRef<WebView>(null);
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();
  const route = useRoute<RouteProp<RootStackParams, 'WebviewInApp'>>();

  const onPressHWBackButton = () => {
    if (webView.current) {
      webView.current.goBack();
      return true;
    }
    navigation.goBack();
    return false;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', onPressHWBackButton);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', onPressHWBackButton);
    };
  });

  const onPressClose = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView edges={['top', 'bottom']}>
      <Header>
        <CloseButton onPress={onPressClose}>
          <CText size={16}>X</CText>
        </CloseButton>
        <UrlView>
          {route.params?.url && (
            <CText size={14} numberOfLines={1}>
              {route.params?.url}
            </CText>
          )}
        </UrlView>
      </Header>
      {route.params?.url && (
        <WebView
          ref={webView}
          nestedScrollEnabled
          cacheEnabled={false}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          allowsFullscreenVideo
          allowsInlineMediaPlayback
          source={{uri: encodeURI(route.params.url)}}
        />
      )}
    </SafeAreaView>
  );
}

export default WebviewInApp;
