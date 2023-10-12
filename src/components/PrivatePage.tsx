import { useContext } from "react";

import { AuthContext } from "./AuthContextProvider.tsx";

const PrivatePage = () => {
  const { state, logout } = useContext(AuthContext);

  return (
    <div className="flex items-center flex-col justify-center gap-4 bg-gradient-to-br from-teal-600 to-teal-200 h-screen w-screen">
      <h1 className="text-3xl font-bold underline text-white">
        Hello {state.username}!
      </h1>

      <button
        onClick={logout}
        className="bg-teal-500 transition text-white px-4 py-2 rounded hover:bg-teal-600 focus:outline-none focus:ring focus:border-teal-300"
      >
        Logout
      </button>
    </div>
  );
};

export default PrivatePage;
