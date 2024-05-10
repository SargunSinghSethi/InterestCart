"use client"
import { api } from "~/trpc/react";
import { useRouter } from "next/navigation";
import { useState } from "react"

export default function SignupForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();
  const createUser = api.post.create.useMutation({
    onSuccess: ({ accessToken }) => {
      if (accessToken === "User already exists") {
        setErrorMessage("User already exists. Please log in or use a different email.");
      } else if (accessToken === "An error occurred. Please try again later.") {
        setErrorMessage("An error occurred. Please try again later.");
      } else {
        // router.push("/verification");
      }
      console.log(accessToken);
      router.refresh();
      setUsername("");
      setEmail("");
      setPassword("");
    },
    onError: (error) => {
      console.error("Signup failed",error);
      setErrorMessage("Signup failed.Please try again later.")
    }
  })
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      createUser.mutate({
        username,
        email,
        password
      })
    } catch (error) {
      console.error('Signup failed:', error);
      setErrorMessage("Signup failed. Please try again later.");
    }
  };
  return <form onSubmit={handleSubmit}>

    <div className="flex flex-col w-96">
      <label htmlFor="username" className="mb-1 font-medium">Name</label>
      <input
        type="text"
        placeholder="Enter your name"
        value={username}
        className="mb-6 p-2 rounded shadow-md border border-gray-300"
        onChange={(e) => setUsername(e.target.value)}
      />
      <label htmlFor="email" className="mb-2 font-medium">Email</label>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        className="mb-6 p-2 rounded shadow-md border border-gray-300"
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="password" className="mb-2 font-medium">Password</label>
      <input
        type="password"
        placeholder="Enter your password"
        // pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*_)[a-zA-Z\d_]{8,}$"
        // title="Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one underscore."
        value={password}
        className="mb-6 p-2 rounded-lg shadow-md border border-gray-300"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" className="px-6 py-3 rounded text-white bg-black mb-4">Create Account</button>
      <p className="text-red-500 text-center text-sm">{errorMessage}</p>
      {/* {errorMessage?<p className="text-red-500">{errorMessage}</p>:<></>} */}
    </div>
  </form>
}