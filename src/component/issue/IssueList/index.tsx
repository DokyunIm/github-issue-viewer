import React from 'react';
import {FlatList, ListRenderItemInfo, View} from 'react-native';
import useIssues from '@hook/useIssues';
import {Issue} from '@type/issue.type';
import IssueListItem from '@component/issue/IssueListItem';
import {CText} from '@component/common/Text';

function EmptyIssueList() {
  return (
    <View style={{width: '100%', alignItems: 'center', paddingTop: 32}}>
      <CText>이슈 데이터가 없습니다.</CText>
    </View>
  );
}

function IssueList() {
  const {data, isLoading, loadMore, refresh} = useIssues();

  return (
    <FlatList
      data={data}
      keyExtractor={(item: Issue) => item.id}
      renderItem={(item: ListRenderItemInfo<Issue>) => (
        <IssueListItem index={item.index} data={item.item} />
      )}
      ListEmptyComponent={<EmptyIssueList />}
      refreshing={isLoading}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      onEndReachedThreshold={0.75}
      onEndReached={loadMore}
      onRefresh={refresh}
      style={{paddingHorizontal: 12}}
    />
  );
}

export default IssueList;
