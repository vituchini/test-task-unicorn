import { FormEvent, useContext, useState } from "react";

import { AuthContext } from "./AuthContextProvider.tsx";
import { toast } from "react-toastify";

interface UserType {
  email: string;
  firstName: string;
  gender: string;
  id: number;
  image: string;
  lastName: string;
  token: string;
  username: string;
}

const PublicPage = () => {
  const { setToken, setUsername } = useContext(AuthContext);

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const res = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: login,
          password: password,
        }),
      });

      if (!res.ok) {
        throw new Error("Invalid credentials");
      }

      const user: UserType = await res.json();

      setUsername(login.trim() || user.username);
      setToken(user.token || password.trim());
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("Something went wrong");
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen bg-gradient-to-br from-teal-600 to-teal-200">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-96"
      >
        <input
          type="text"
          className="w-full px-4 py-2 rounded outline-none focus:ring focus:border-teal-500"
          value={login}
          placeholder="Username"
          pattern="^(?!\s*$).+"
          required
          onChange={(e) => setLogin(e.target.value)}
        />
        <input
          type="password"
          className="w-full px-4 py-2 mt-3 rounded outline-none focus:ring focus:border-teal-500"
          value={password}
          placeholder="Password"
          pattern="^(?!\s*$).+"
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="mt-4 transition w-full bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 focus:outline-none focus:ring focus:border-teal-300">
          Login
        </button>
      </form>
    </div>
  );
};

export default PublicPage;
