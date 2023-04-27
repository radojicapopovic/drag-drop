import React, { createContext, useState } from "react";

type DragContextType = {
  draggedItem: number | null;
  setDraggedItem: React.Dispatch<React.SetStateAction<number | null>>;
};

const initialContext: DragContextType = {
  draggedItem: null,
  setDraggedItem: () => {},
};

export const DragContext = createContext<DragContextType>(initialContext);

type DragContextProviderProps = {
  children: React.ReactNode;
};

export const DragContextProvider: React.FC<DragContextProviderProps> = ({
  children,
}) => {
  const [draggedItem, setDraggedItem] = useState<number | null>(null);

  return (
    <DragContext.Provider value={{ draggedItem, setDraggedItem }}>
      {children}
    </DragContext.Provider>
  );
};
