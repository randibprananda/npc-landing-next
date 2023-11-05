import api from '@/lib/axios-instance';
import { useQuery } from '@tanstack/react-query';

export const useGetDetailSport = (id: any) => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ['get.sport.id', id],
    queryFn: async () => {
      const response = await api.get(`/sports/get/${id}`);
      return response;
    }
  });

  return {
    data: data?.data[0],
    isLoading,
    refetch
  };
};
