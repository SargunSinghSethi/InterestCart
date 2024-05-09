import SignupForm from "../_components/signup-form"
export default function () {


    return <div className="w-full flex justify-center">
        <div className="flex flex-col justify-center items-center px-12 py-6 mt-6 rounded-lg shadow w-100 border border-gray-300">
            <div className="font-bold text-2xl">
                Create your account
            </div>
            <SignupForm />
            <div className="flex gap-2 text-sm">
                <div className="">
                    Have an Account?
                </div>
                <div className="font-semibold">
                    LOGIN
                </div>
            </div>
        </div>
    </div>
}