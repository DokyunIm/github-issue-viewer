import React from 'react';
import SafeAreaView from '@component/common/SafeAreaView';
import IssueList from '@component/issue/IssueList';

function Home() {
  return (
    <SafeAreaView>
      <IssueList />
    </SafeAreaView>
  );
}

export default Home;
