import api from '@/lib/axios-instance';
import { useQuery } from '@tanstack/react-query';

export const useGetCardStatistics = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ['get.card-statiscits'],
    queryFn: async () => {
      const response = await api.get(
        '/athletes/get-statistic?ASEAN=ASEAN&ASIAN=ASIAN&WORLD=WORLD'
      );
      return response;
    }
  });

  return {
    data: data?.data,
    isLoading,
    refetch
  };
};
