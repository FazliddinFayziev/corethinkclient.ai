import React, { useContext, useState, useEffect, type ReactNode } from 'react';

interface AppContextProps {
    mode: boolean; 
    setMode: (mode: boolean) => void;
};

const AppContext = React.createContext<AppContextProps | undefined>(undefined);

interface AppProviderProps {
    children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    const [mode, setMode] = useState<boolean>(() => {
        if (typeof window !== 'undefined') {
            const savedMode = localStorage.getItem('mode');
            return savedMode ? JSON.parse(savedMode) : false;
        }
        return false;
    });

    useEffect(() => {
        localStorage.setItem('mode', JSON.stringify(mode));
    }, [mode]);

    return (
        <AppContext.Provider value={{ mode, setMode }}>
            {children}
        </AppContext.Provider>
    );
}

export const useGlobalContext = (): AppContextProps => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useGlobalContext must be used within an AppProvider');
    }
    return context;
}