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
  const [choosePlayer1, setChoosePlayer1] = useState<number>(-1);
  const [choosePlayer2, setChoosePlayer2] = useState<number>(-1);
  const [points, setPoints] = useState<number>(0);

  const value = {
    player1,
    setPlayer1,
    player2,
    setPlayer2,
    choosePlayer1,
    setChoosePlayer1,
    choosePlayer2,
    setChoosePlayer2,
    points,
    setPoints
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  return useContext(AppContext);
}
