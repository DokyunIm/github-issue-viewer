import React from 'react';
import {ScrollView, View} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import SafeAreaView from '@component/common/SafeAreaView';
import useIssuePost from '@hook/useIssuePost';
import {RootStackParams} from '@type/navigation.type';
import IssueHeader from '@component/issue/IssueHeader';
import {CText} from '@component/common/Text';
import Markdown from 'react-native-markdown-display';

function IssuePost() {
  const route = useRoute<RouteProp<RootStackParams, 'IssuePost'>>();
  const {data, isLoading, isError} = useIssuePost({
    owner: 'angular',
    repo: 'angular-cli',
    issueNumber: route.params.issueNumber,
  });

  if (isLoading) {
    return (
      <SafeAreaView>
        <View style={{alignItems: 'center', paddingTop: 24}}>
          <CText>이슈를 가져오고 있습니다...</CText>
        </View>
      </SafeAreaView>
    );
  }

  if (isError) {
    return (
      <SafeAreaView>
        <View style={{alignItems: 'center', paddingTop: 24}}>
          <CText>이슈 조회 중 오류가 발생하였습니다.</CText>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView>
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        style={{flex: 1, paddingHorizontal: 12}}>
        <IssueHeader data={data!} />
        {/*@ts-ignore*/}
        <Markdown>{data?.content}</Markdown>
      </ScrollView>
    </SafeAreaView>
  );
}

export default IssuePost;
