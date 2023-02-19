import moment from 'moment';
import {reqGetIssueList} from '@api/github';

export async function searchIssueListService({pageParam = 1}) {
  const response = await reqGetIssueList({
    owner: 'angular',
    repo: 'angular-cli',
    page: pageParam,
    perPage: 20,
    state: 'open',
    sort: 'comments',
  });

  const issues = response.data.map((item: any) => {
    return {
      id: item.id.toString(),
      number: item.number.toString(),
      title: item.title,
      issuer: item.user.login,
      totalComments: item.comments,
      createdAt: moment(item.created_at).format('YYYY년 MM월 DD일'),
    };
  });

  return issues;
}
