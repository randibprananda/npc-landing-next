import api from '@/lib/axios-instance';
import { useQuery } from '@tanstack/react-query';

export const useGetNews = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['get.sports-category'],
    queryFn: async () => {
      const response = await api.get(`/news/get`);
      return response;
    }
  });

  return {
    data: data?.data?.results?.data,
    isLoading
  };
};
