"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEventHandler, useState } from "react";
import { api } from "~/trpc/react";

export default function VerifyEmailPage() {
    const email = "sdsad"
    const router = useRouter();
    const [verificationToken, setVerificationToken] = useState("");
    const [verified, setVerified] = useState(false);
    const [error, setErrorMessage] = useState("");

    const verifyEmail = api.post.verifyEmail.useMutation({
        onSuccess: async ({ message }) => {
          if (message === "Invalid Session Token") {
            router.push("/")
          } else if (message === "Verification Token Expired") {
            setErrorMessage("Verification Token Expired, Please Signup again");
          } else if (message === "Verification Token Invalid") {
            setErrorMessage("Verification Token Invalid, Please try again");
          } else {
            setErrorMessage("");
          }
          router.refresh();
          setVerificationToken("");
          setErrorMessage("");
        },
        onError: (error) => {
          console.error("Verification failed", error);
          setErrorMessage("Verification failed. Please try again later.")
        }
      })
      const handleSubmit = async () => {
        try {
            verifyEmail.mutate({
            verificationToken ,
          })
        } catch (error) {
          console.error('Verification failed:', error);
          setErrorMessage("Verification failed. Please try again later.");
        }
    
      };
    return <div className="flex flex-col w-96 mt-6">
        <div className="pt-4 pb-6 text-center">
            Enter the 8 digit code you have received 
            <p>email</p>
        </div>
        <input
        type="email"
        placeholder="Enter your Code"
        value={verificationToken}
        className="mb-6 p-2 rounded shadow-md border border-gray-300"
        required
        onChange={(e) => setVerificationToken(e.target.value)}
      />
        <button type="submit" onSubmit={handleSubmit} className="px-6 py-3 rounded text-white bg-black mb-4">VERIFY</button>
    </div>
}