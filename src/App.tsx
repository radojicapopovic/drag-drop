import React from "react";
import { DragContextProvider } from "./components/DragContext";
import { DraggableUserList } from "./components/DraggableUserList";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <DragContextProvider>
        <DraggableUserList />
      </DragContextProvider>
    </div>
  );
};

export default App;
