import { useQuery } from '@tanstack/react-query'
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

