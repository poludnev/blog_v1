import { useContext, useState, createContext } from 'react';

type props = {
  children: React.ReactChild | React.ReactChild[];
  value: any;
};

const NewPostContext = createContext<any>(null);

export const useNewPostContext = () => useContext(NewPostContext);

export const NewPostContextProvider = ({ children }: props) => {
  const [currentPostText, setCurrentPostText] = useState<string>('');

  const updatePostText = (text: string) => setCurrentPostText(text);

  const value = { currentPostText, updatePostText };

  return (
    <NewPostContext.Provider value={value}>{children}</NewPostContext.Provider>
  );
};
