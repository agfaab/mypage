import { Client, Databases } from 'appwrite';

// Initialize the Appwrite client
const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6778c2c8001030de0eb8');

// Initialize the Databases service
const databases = new Databases(client);

// Export the test connection function as well
const testConnection = async () => {
    try {
        await databases.list();
        return { success: true };
    } catch (error) {
        console.error('Connection test failed:', error);
        return { success: false, error };
    }
};

export { databases, testConnection };