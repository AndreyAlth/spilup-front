interface TokenTransaction {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    amount: number;
    type: $Enums.Transaction_type;
    description: string | null;
    metadata: JsonValue | null;
    userId: string;
}

interface TokenAmount {
    amount: number;
}