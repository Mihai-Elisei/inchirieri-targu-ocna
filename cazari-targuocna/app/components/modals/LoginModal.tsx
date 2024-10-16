"use client";
import useLoginModal from "@/app/hooks/useLoginModal";
import { useState } from "react";
import Modal from "./Modal";
import CustomButton from "../forms/CustomButton";

const LoginModal = () => {
  const loginModal = useLoginModal();

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

      <div className="p-5 bg-main text-white rounded-xl opacity-80">
        Error Message
      </div>

      <CustomButton label="Submit" onClick={() => console.log("test")} />
    </form>
  );

  return (
    <Modal
      isOpen={loginModal.isOpen}
      close={loginModal.close}
      label="Log In"
      content={content}
    />
  );
};

export default LoginModal;
