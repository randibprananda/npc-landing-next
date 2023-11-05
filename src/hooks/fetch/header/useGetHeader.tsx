import api from '@/lib/axios-instance';
import { useQuery } from '@tanstack/react-query';

export const useGetHeader = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['get.header'],
    queryFn: async () => {
      const response = await api.get(`/header/get`);
      return response;
    }
  });

  return {
    data: data?.data?.results?.data[0],
    isLoading
  };
};
