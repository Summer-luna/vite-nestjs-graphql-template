import { createContext, FC, ReactNode, useContext, useState } from "react";

export interface Settings {
  VITE_BACKEND_URL?: string;
}

const defaultSettings: Settings = {
  VITE_BACKEND_URL: import.meta.env.VITE_BACKEND_URL,
};

export interface SettingsContextProps {
  settings: Settings;
  setSettings: (settings: Settings) => void;
}

const SettingsContext = createContext<SettingsContextProps>(
  {} as SettingsContextProps,
);

interface SettingsProviderProps {
  children: ReactNode;
}

export const SettingsProvider = ({ children }: SettingsProviderProps) => {
  const [settings, setSettings] = useState(defaultSettings);

  return (
    <SettingsContext.Provider value={{ settings, setSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  return useContext(SettingsContext);
};
