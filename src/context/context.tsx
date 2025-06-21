  import React, { useContext, useState, type ReactNode } from 'react';

interface AppContextProps {
    mode: boolean; 
    setMode: (mode: boolean) => void;
};

const AppContext = React.createContext<AppContextProps | undefined>(undefined);

interface AppProviderProps {
    children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    const [mode, setMode] = useState<boolean>(false);

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