import { useQuery } from '@tanstack/react-query';
import axios from "utils/axios";

// Fetch user's token balance
export function useGetMyBalance() {
    return useQuery<TokenAmount>({
        queryKey: ['tokens', 'my-balance'],
        queryFn: async () => {
            const response = await axios.get<TokenAmount>('/tokens/my-balance');
            return response.data;
        },
    });
}

// Fetch user's transaction history
export function useGetTransactionHistory() {
    return useQuery<TokenTransaction[]>({
        queryKey: ['tokens', 'transactions-history'],
        queryFn: async () => {
            const response = await axios.get<TokenTransaction[]>('/tokens/transactions-history');
            return response.data;
        },
    });
}