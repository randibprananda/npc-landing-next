import api from '@/lib/axios-instance';
import { useQuery } from '@tanstack/react-query';

export const useGetNewsDetailById = (id: any) => {
  const { data, isLoading } = useQuery({
    queryKey: ['get.news-id', id],
    queryFn: async () => {
      const response = await api.get(`/news/get-landing-page/${id}`);
      return response;
    }
  });

  return {
    data: data?.data,
    isLoading
  };
};
