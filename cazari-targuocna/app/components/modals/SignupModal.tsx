"use client";
import { useState } from "react";
import Modal from "./Modal";
import CustomButton from "../forms/CustomButton";
import useSignupModal from "@/app/hooks/useSigupModal";

const LoginModal = () => {
  const signupModal = useSignupModal();

  const content = (
    <form action="" className="space-y-4">
      <input
        type="email"
        name=""
        id=""
        className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
        placeholder="Your email address"
      />
      <input
        type="password"
        name=""
        id=""
        className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
        placeholder="Your Password"
      />
      <input
        type="password"
        name=""
        id=""
        className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
        placeholder="Repeat Password"
      />

      <div className="p-5 bg-main text-white rounded-xl opacity-80">
        Error Message
      </div>

      <CustomButton label="Submit" onClick={() => console.log("test")} />
    </form>
  );

  return (
    <Modal
      isOpen={signupModal.isOpen}
      close={signupModal.close}
      label="Sign up"
      content={content}
    />
  );
};

export default LoginModal;
