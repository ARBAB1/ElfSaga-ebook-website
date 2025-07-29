'use client';
import Signin from "../Auth/Signin";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";



export default function SignIn() {
    return (

        <div className="absolute inset-0 z-0">
            <span className="absolute top-20 left-16 w-4 h-4 bg-red-400 rounded-full animate-pulse" />
            <span className="absolute top-24 right-24 w-3 h-3 bg-yellow-400 rounded-full animate-ping" />
            <span className="absolute bottom-10 left-24 w-3.5 h-3.5 bg-green-600 rounded-full" />
            <span className="absolute top-[108px] right-16 w-6 h-6 bg-purple-500 rounded-full animate-bounce" />

            <span className="absolute top-12 left-11 w-7 h-7 bg-yellow-400 rounded-full animate-pulse" />
            <span className="absolute top-24 right-14 w-3 h-3 bg-red-400 rounded-full animate-ping" />
            <span className="absolute bottom-17 left-14 w-3.5 h-3.5 bg-blue-600 rounded-full" />
            <span className="absolute bottom-27 right-9 w-6 h-6 bg-purple-500 rounded-full animate-bounce" />
            <div
                className="min-h-screen flex flex-auto overflow-hidden flex-col"
                style={{ backgroundImage: "linear-gradient(to right, #122031, #122031)" }}
            >

                <div className="justify-center align-items-center  my-auto  bg-[#fff3f3]  overflow-hidden" style={{ backgroundImage: "linear-gradient(to right, #122031, #122031)" }}>

                    <div className="rounded-xl bg-[#092b2652] flex-4 max-w-6xl mx-auto overflow-hidden flex flex-col md:flex-row shadow-card-2 ">

                        <div className="w-full md:w-1/2 p-8 md:p-12">
                            <Signin />
                        </div>


                        <div
                            className="hidden md:flex w-full md:w-1/2 text-white items-center justify-center p-12 relative"
                            style={{ backgroundImage: "url('/images/home/bgblur.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
                        >

                            <div className="text-center max-w-md">

                                <Link href="/" className="inline-block mb-8">
                                    <Image
                                        src="/images/logo/logo.png"
                                        alt="Logo"
                                        width={200}
                                        height={80}
                                        className="mx-auto"
                                    />
                                </Link>
                                <h1 className="text-3xl font-bold mb-2 text-[#FFFFFF]">Welcome Back!</h1>
                                <p className="text-sm text-[#FFFFFF] leading-relaxed">
                                    Please sign in to your account by completing the necessary fields
                                    below. Access your dashboard, track progress, and much more.
                                </p>


                                {/* <div className="mt-10">
                                    <Image
                                        src="/images/home/logo.png"
                                        alt="Illustration"
                                        width={320}
                                        height={240}
                                        className="mx-auto opacity-30"
                                        style={{ height: 'auto' }} // Ensures aspect ratio is preserved
                                    />
                                </div> */}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}