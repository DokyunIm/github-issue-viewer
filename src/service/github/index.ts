import moment from 'moment';
import {reqGetIssue, reqGetIssueList, ReqGetIssueParams} from '@api/github';
import {Issue, IssueResponse} from '@type/issue.type';

export async function searchIssueListService({
  pageParam = 1,
}): Promise<Array<Issue>> {
  const response = await reqGetIssueList({
    owner: 'angular',
    repo: 'angular-cli',
    page: pageParam,
    perPage: 20,
    state: 'open',
    sort: 'comments',
  });

  const issues = response.data.map((item: IssueResponse) => {
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

export async function searchIssuePostService(
  params: ReqGetIssueParams,
): Promise<Issue> {
  const response = await reqGetIssue(params);

  const issue = response.data as IssueResponse;
  return {
    id: issue.id.toString(),
    number: issue.number.toString(),
    title: issue.title,
    issuer: issue.user.login,
    totalComments: issue.comments,
    createdAt: moment(issue.created_at).format('YYYY년 MM월 DD일'),
    avatarUrl: issue.user.avatar_url,
    content: issue.body,
  };
}
