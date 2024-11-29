import AcmeLogo from "@/app/ui/acme-logo";
import LoginForm from "@/app/ui/login-form";
import { Metadata } from "next";

export const metadata: Metadata = {
    title:'Login',
};

export default function Login() {
    return (
        <main className="flex items-center justify-center md:h-screen bg-[#CFCCC5]">
            <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 rounded-lg bg-gray-50 p-6">
                <div className="flex h-20 w-full items-end rounded-lg bg-[#53504B] p-3 md:h-36">
                    <div className="w-32 text-white md:w-36">
                        <AcmeLogo />
                    </div>
                </div>
                <LoginForm />
            </div>
        </main>
    );
}