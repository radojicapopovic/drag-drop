// src/components/DragArea.tsx
import React, { useContext } from "react";
import { DragContext } from "./DragContext";

type DragAreaProps = {
  children: React.ReactNode;
  items: any[];
  onChange: (newItems: any[]) => void;
};

export const DragArea: React.FC<DragAreaProps> = ({ children, items, onChange }) => {
  const { draggedItem, setDraggedItem } = useContext(DragContext);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    e.preventDefault();
    if (draggedItem === null) return;

    const newItems = [...items];
    newItems.splice(index, 0, newItems.splice(draggedItem, 1)[0]);
    onChange(newItems);
    setDraggedItem(null);
  };

  return (
    <div>
      {React.Children.map(children, (child, index) => (
        <div
          draggable
          onDragOver={(e) => handleDragOver(e, index)}
          onDrop={(e) => handleDrop(e, index)}
        >
          {child}
        </div>
      ))}
    </div>
  );
};
