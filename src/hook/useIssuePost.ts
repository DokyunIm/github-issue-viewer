import {useQuery} from '@tanstack/react-query';
import {searchIssuePostService} from '@service/github';
import {ReqGetIssueParams} from '@api/github';
import {useContext, useEffect} from 'react';
import {LoadingActionContext} from '@context/LoadingContext';

interface UseIssuePostProps {
  owner: string;
  repo: string;
  issueNumber: string;
}
function useIssuePost({owner, repo, issueNumber}: UseIssuePostProps) {
  const actions = useContext(LoadingActionContext);

  const {data, isLoading, isError} = useQuery({
    queryKey: ['issuePost', {owner, repo, issueNumber}],
    queryFn: async ({queryKey}) => {
      return await searchIssuePostService(queryKey[1] as ReqGetIssueParams);
    },
  });

  useEffect(() => {
    if (isLoading) {
      actions?.setIsLoading(true);
      return;
    }
    actions?.setIsLoading(false);
  }, [isLoading]);

  return {data, isError};
}

export default useIssuePost;
