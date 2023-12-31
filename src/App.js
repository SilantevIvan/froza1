import React, { useEffect } from "react";
import { BrowserRouter, Routs, Rout } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import "./App.css";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="flex relativ dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent></TooltipComponent>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
