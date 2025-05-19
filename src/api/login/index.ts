import { useQuery, useMutation, UseMutationResult  } from '@tanstack/react-query'
import axios from 'axios';

export async function useGetUser(userId: string) {
    return useQuery({
        queryKey: ['user', userId],
        queryFn: async () => {
            const response = await axios.get("/user/profile");
            return response;
        }
    })
}

interface UpdateUserResponse {
    success: boolean;
    message: string;
    data?: any; // Adjust this type based on your API response
  }
  
  export const useUpdateUser = (userId: string ): UseMutationResult<UpdateUserResponse, Error, UpdateUser> => {
    return useMutation<UpdateUserResponse, Error, UpdateUser>({
      mutationFn: async (userData: UpdateUser) => {
        const response = await axios.put(`/users/${userId}`, userData);
        return response.data;
      }
    });
  };