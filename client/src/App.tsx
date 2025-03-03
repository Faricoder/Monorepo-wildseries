// App.tsx
import { Routes, Route } from "react-router-dom";
import Programs from "./pages/programs";

function App() {
  return (
    <Routes>
      <Route path="/programs" element={<Programs />} />
    </Routes>
  );
}

export default App;
