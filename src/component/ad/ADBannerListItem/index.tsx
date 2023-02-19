import React from 'react';
import {Image, TouchableWithoutFeedback} from 'react-native';

function ADBannerListItem() {
  return (
    <TouchableWithoutFeedback>
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
