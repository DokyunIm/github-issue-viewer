import {useQuery} from '@tanstack/react-query';
import {searchIssuePostService} from '@service/github';
import {ReqGetIssueParams} from '@api/github';

interface UseIssuePostProps {
  owner: string;
  repo: string;
  issueNumber: string;
}
function useIssuePost({owner, repo, issueNumber}: UseIssuePostProps) {
  const {data, isLoading, isError} = useQuery({
    queryKey: ['issuePost', {owner, repo, issueNumber}],
    queryFn: async ({queryKey}) => {
      return await searchIssuePostService(queryKey[1] as ReqGetIssueParams);
    },
  });

  return {data, isLoading, isError};
}

export default useIssuePost;
