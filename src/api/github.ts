import axios from 'axios';
import ENV_MAP from '../../environments';

export interface ReqGetIssueListParams {
  owner: string;
  repo: string;
  page: number;
  perPage: number;
  state: string;
  sort: string;
}
export async function reqGetIssueList({
  owner,
  repo,
  page,
  perPage,
  state,
  sort,
}: ReqGetIssueListParams) {
  const axiosInstance = axios.create({
    baseURL: 'https://api.github.com',
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${ENV_MAP.GITHUB_TOKEN}`,
      'X-GitHub-Api-Version': '2022-11-28',
    },
  });

  return await axiosInstance.get(`/repos/${owner}/${repo}/issues`, {
    params: {
      page,
      per_page: perPage,
      state,
      sort,
    },
  });
}

export interface ReqGetIssueParams {
  owner: string;
  repo: string;
  issueNumber: string;
}
export async function reqGetIssue({
  owner,
  repo,
  issueNumber,
}: ReqGetIssueParams) {
  const axiosInstance = axios.create({
    baseURL: 'https://api.github.com',
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${ENV_MAP.GITHUB_TOKEN}`,
      'X-GitHub-Api-Version': '2022-11-28',
    },
  });

  return await axiosInstance.get(
    `/repos/${owner}/${repo}/issues/${issueNumber}`,
  );
}
