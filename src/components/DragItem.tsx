// src/components/DragItem.tsx
import React, { useContext } from "react";
import { DragContext } from "./DragContext";

type DragItemProps = {
  children: React.ReactNode;
  index: number;
};

export const DragItem: React.FC<DragItemProps> = ({ children, index }) => {
  const { setDraggedItem } = useContext(DragContext);

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.effectAllowed = "move";
    setDraggedItem(index);
  };

  return (
    <div draggable onDragStart={(e) => handleDragStart(e)}>
      {children}
    </div>
  );
};
