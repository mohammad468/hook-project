import React, { useState } from "react";
import ComA from "./components/ComA";

export const NameContext = React.createContext();
export const AgeContext = React.createContext();

const App = () => {
  const [name, setName] = useState("mohammad");
  const [age, setAge] = useState(22);
  return (
    <div>
      <NameContext.Provider value={name}>
        <AgeContext.Provider value={age}>
          <ComA name={name} />
        </AgeContext.Provider>
      </NameContext.Provider>
    </div>
  );
};

export default App;
