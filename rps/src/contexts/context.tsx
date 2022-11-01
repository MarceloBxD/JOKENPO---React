import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useRef,
} from "react";

const AppContext = createContext({});

export function AppProvider({ children }: any) {
  const [player1, setPlayer1] = useState<string>("");
  const [player2, setPlayer2] = useState<string>("");
  const [choose, setChoose] = useState<number>();
  const [points, setPoints] = useState<number>(0);

  const value = {
    player1,
    setPlayer1,
    player2,
    setPlayer2,
    choose,
    setChoose,
    points,
    setPoints
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  return useContext(AppContext);
}
