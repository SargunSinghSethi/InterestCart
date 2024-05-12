import { getSession } from "~/actions/lib"
import VerifyEmailPage from "~/app/_components/verification"
import { useRouter } from "next/navigation";

export default function () {
    const router = useRouter();
    if(!getSession) {
        router.replace("/");
    }
    return <div className="w-full flex justify-center">
        <div className="flex flex-col justify-center items-center px-12 py-6 mt-6 rounded-lg shadow w-100 border border-gray-300">
            <div className="font-bold text-2xl">
                Verify your email
            </div>
            <VerifyEmailPage />
        </div>
    </div>
}