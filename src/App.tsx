import React from "react";
import Canvas from "./components/Canvas";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import UndoButton from "./components/layerManager/UndoButton";
import LayerManager from "./components/layerManager/LayerManager";
import Toolbar from "./components/toolbar/Toolbar";

const App: React.FC = () => {
  return (
    <div className="App">
      <Canvas />
      <UndoButton />
      <LayerManager />
      <Toolbar />
    </div>
  );
};

export default App;
