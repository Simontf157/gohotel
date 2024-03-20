"use client";
import Navbar from "@/components/Navbar";
import SigninForm from "@/components/SigninForm";

export default function signin() {
    return (
        <div className="h-screen ">
            <Navbar />
            <div className="flex justify-center items-center pt-10">
                <SigninForm />
            </div>
        </div>
    );
}
