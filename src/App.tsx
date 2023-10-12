import { Navigate, Route, Routes } from "react-router-dom";
import { useContext } from "react";

import PublicPage from "./components/PublicPage.tsx";
import PrivatePage from "./components/PrivatePage.tsx";
import { AuthContext } from "./components/AuthContextProvider.tsx";

function App() {
  const { state } = useContext(AuthContext);

  return (
    <div className="flex justify-center items-center h-screen w-screen bg-teal-200">
      <Routes>
        {state.token ? (
          <Route path="/" element={<PrivatePage />} />
        ) : (
          <Route path="/auth" element={<PublicPage />} />
        )}
        <Route
          path="*"
          element={<Navigate to={state.token ? "/" : "/auth"} replace />}
        />
      </Routes>
    </div>
  );
}

export default App;
