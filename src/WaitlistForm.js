import React, { useState, useEffect } from 'react';
import { ID } from 'appwrite';
import { databases, testConnection } from './appwriteClient';

const WaitlistForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        userType: 'individual'
    });
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [connectionStatus, setConnectionStatus] = useState(null);

    useEffect(() => {
        const checkConnection = async () => {
            const result = await testConnection();
            setConnectionStatus(result);
            console.log('Connection test result:', result);
        };
        checkConnection();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setMessage('');

        try {
            console.log('Attempting to submit data:', formData);
            
            if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
                throw new Error('Please enter a valid email address');
            }
            if (!formData.name.trim()) {
                throw new Error('Please enter your name');
            }

            const response = await databases.createDocument(
                '6778c415001affe744ff',
                '6778c475003331cbe6b4',
                ID.unique(),
                {
                    name: formData.name.trim(),
                    email: formData.email.trim().toLowerCase(),
                    userType: formData.userType
                }
            );

            console.log('Submission successful:', response);
            setMessage('Thank you for joining the waitlist!');
            setFormData({
                name: '',
                email: '',
                userType: 'individual'
            });
        } catch (error) {
            console.error('Submission error:', {
                message: error.message,
                code: error.code,
                type: error.type,
                response: error.response
            });
            
            if (error.code === 401) {
                setMessage('Authentication error. Please contact support.');
            } else if (error.code === 409) {
                setMessage('This email is already registered.');
            } else if (error.code === 400) {
                setMessage('Invalid data provided. Please check your inputs.');
            } else {
                setMessage(error.message || 'An error occurred. Please try again later.');
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="w-full max-w-md mx-auto px-4 sm:px-6 md:px-8">
            {connectionStatus && (
                <div className="mb-4 text-sm">
                    Connection Status: {connectionStatus.success ? 
                        <span className="text-green-400">Connected</span> : 
                        <span className="text-red-400">Not Connected - Check Console</span>
                    }
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col space-y-4">
                    {/* Name Input */}
                    <div className="flex flex-col space-y-2">
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            disabled={isSubmitting}
                            className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-cyan-400 focus:outline-none text-base sm:text-lg"
                        />
                    </div>
                    
                    {/* Email Input */}
                    <div className="flex flex-col space-y-2">
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            disabled={isSubmitting}
                            className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-cyan-400 focus:outline-none text-base sm:text-lg"
                        />
                    </div>
                    
                    {/* User Type Selection */}
                    <div className="flex flex-col space-y-2">
                        <select
                            name="userType"
                            value={formData.userType}
                            onChange={handleInputChange}
                            disabled={isSubmitting}
                            className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-cyan-400 focus:outline-none text-base sm:text-lg cursor-pointer"
                        >
                            <option value="individual">Individual</option>
                            <option value="business">Business</option>
                        </select>
                    </div>

                    {/* Submit Button */}
                    <button 
                        type="submit"
                        disabled={isSubmitting || (connectionStatus && !connectionStatus.success)}
                        className="w-full px-4 py-3 rounded-lg bg-cyan-400 text-gray-900 font-medium hover:bg-cyan-300 transition-colors disabled:opacity-50 text-base sm:text-lg"
                    >
                        {isSubmitting ? 'Submitting...' : 'Join Waitlist'}
                    </button>
                </div>

                {/* Message Display */}
                {message && (
                    <p className={`mt-2 text-sm sm:text-base ${
                        message.includes('error') || message.includes('already') || message.includes('invalid') || message.includes('Please')
                            ? 'text-red-400' 
                            : 'text-green-400'
                    }`}>
                        {message}
                    </p>
                )}
            </form>
        </div>
    );
};

export default WaitlistForm;
