import {useInfiniteQuery} from '@tanstack/react-query';
import {searchIssueListService} from '@service/github';
import {queryClient} from '../../App';

function useIssues() {
  const {data, isLoading, hasNextPage, fetchNextPage} = useInfiniteQuery({
    queryKey: ['issues'],
    queryFn: searchIssueListService,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.length > 0 ? allPages.length + 1 : false,
  });

  const loadMore = () => {
    if (!hasNextPage) {
      return;
    }

    fetchNextPage().then().catch();
  };

  const refresh = () => {
    queryClient
      .resetQueries({queryKey: ['issues'], exact: true})
      .then()
      .catch();
  };

  return {data: data?.pages.flat(), isLoading, loadMore, refresh};
}

export default useIssues;
