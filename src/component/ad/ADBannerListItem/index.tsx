import React from 'react';
import {Image, TouchableWithoutFeedback} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParams} from '@type/navigation.type';

function ADBannerListItem() {
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();

  const onPress = () => {
    navigation.navigate('WebviewInApp', {
      url: 'https://thingsflow.com/ko/home',
    });
  };

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Image
        source={{
          uri: 'https://hellobot-test.s3.ap-northeast-2.amazonaws.com/image/01fdd797-0477-4717-8d70-8551150463f7',
          height: 56,
        }}
        resizeMode={'contain'}
        style={{marginVertical: 4}}
      />
    </TouchableWithoutFeedback>
  );
}

export default ADBannerListItem;
