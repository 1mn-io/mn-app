export declare const apiService: {
    /**
     * Uploads files to Cloudinary via the proxy endpoint
     */
    uploadFiles(files: File[]): Promise<string[]>;
    /**
     * Submits the final onboarding form to FastAPI
     */
    submitOnboarding(userId: string, data: any, discrepancy: any, type?: "create" | "update"): Promise<any>;
    /**
     * Retrieves onboarding details for a user
     */
    getOnboarding(userId: string): Promise<any>;
    /**
     * Generates a random user_id
     */
    generateUserId(): string;
};
