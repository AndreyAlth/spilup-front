import { useMutation, UseMutationResult } from "@tanstack/react-query";
import axios from "utils/axios";

interface UpdateUserResponse {
    success: boolean;
    message: string;
    data?: any; // Adjust this type based on your API response
  }
  
  export const useUpdateUser = (userId: string ): UseMutationResult<UpdateUserResponse, Error, UpdateUser> => {
    return useMutation<UpdateUserResponse, Error, UpdateUser>({
      mutationFn: async (userData: UpdateUser) => {
        const response = await axios.patch(`/users/${userId}`, userData);
        return response.data;
      }
    });
  };