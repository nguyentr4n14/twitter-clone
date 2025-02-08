import { Navigate, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import LoginPage from './pages/auth/login/LoginPage';
import SignUpPage from './pages/auth/signup/SignUpPage';
import HomePage from './pages/home/HomePage';
import NotificationPage from './pages/notification/NotificationPage';
import ProfilePage from './pages/profile/ProfilePage';

import Sidebar from './components/common/Sidebar';
import RightPanel from './components/common/RightPanel';
import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from './components/common/LoadingSpinner';

function App() {
    const { data: authUser, isLoading } = useQuery({
        // We use queryKey to give a unique name to our query and refer to it later
        queryKey: ['authUser'],
        queryFn: async () => {
            try {
                const res = await fetch('/api/auth/me');
                const data = await res.json();
                if (data.error) return null;

                if (!res.ok) {
                    throw new Error(data.error || 'Something went wrong');
                }
                console.log('authUser is here:', data);
                return data;
            } catch (error) {
                throw new Error(error);
            }
        },
        retry: false,
    });

    if (isLoading) {
        return (
            <div className="h-screen flex justify-center items-center">
                <LoadingSpinner size="lg" />
            </div>
        );
    }

    return (
        <div className="flex max-w-6xl mx-auto">
            {authUser && <Sidebar />} {/* Common component */}
            <Routes>
                <Route
                    path="/"
                    element={authUser ? <HomePage /> : <Navigate to="/login" />}
                />
                <Route
                    path="/signup"
                    element={!authUser ? <SignUpPage /> : <Navigate to="/" />}
                />
                <Route
                    path="/login"
                    element={!authUser ? <LoginPage /> : <Navigate to="/" />}
                />
                <Route
                    path="/notifications"
                    element={
                        authUser ? (
                            <NotificationPage />
                        ) : (
                            <Navigate to="/login" />
                        )
                    }
                />
                <Route
                    path="/profile/:username"
                    element={
                        authUser ? <ProfilePage /> : <Navigate to="/login" />
                    }
                />
            </Routes>
            {authUser && <RightPanel />}
            <Toaster />
        </div>
    );
}

export default App;
