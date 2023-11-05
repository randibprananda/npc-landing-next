import api from '@/lib/axios-instance';
import { useQuery } from '@tanstack/react-query';

export const useGetAthleteById = (id: any) => {
  const { data, isLoading } = useQuery({
    queryKey: ['get.athlete-id', id],
    queryFn: async () => {
      const response = await api.get(`/athletes/get/${id}`);
      return response;
    }
  });

  return {
    data: data?.data[0],
    isLoading
  };
};
