import api from '@/lib/axios-instance';
import { useQuery } from '@tanstack/react-query';

export const useGetTopNews = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['get.top-news'],
    queryFn: async () => {
      const response = await api.get(`/news/get-top-news`);
      return response;
    }
  });

  return {
    data: data?.data?.data,
    isLoading
  };
};
