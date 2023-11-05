import api from '@/lib/axios-instance';
import { useQuery } from '@tanstack/react-query';

export const useGetAthletes = (sport_name: string = '') => {
  const { data, isLoading } = useQuery({
    queryKey: ['get.sports-category', sport_name],
    queryFn: async () => {
      const response = await api.get(
        `/athletes/get-landing?sport_name=${sport_name}`
      );
      return response;
    }
  });

  return {
    data: data?.data?.results?.data,
    isLoading
  };
};
