"use client";

import useLoginModal from "@/app/hooks/useLoginModal";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Modal from "./Modal";
import CustomButton from "../forms/CustomButton";
import apiService from "@/app/services/apiService";
import { handleLogin } from "@/app/lib/actions";

const LoginModal = () => {
  const router = useRouter();
  const loginModal = useLoginModal();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<String[]>([]);

  const submitLogin = async () => {
    const formData = {
      email: email,
      password: password
    };
    const response = await apiService.post(
      "/api/auth/login/",
      JSON.stringify(formData)
    );

    if (response.access) {
      handleLogin(response.user.pk, response.access, response.refresh);
      loginModal.close();
      router.push("/");
    } else {
      const tmpErrors: string[] = Object.values(response).map((error: any) => {
        return error;
      });
      setErrors(tmpErrors);
    }
    console.log("API Response:", response);
  };

  const content = (
    <form action={submitLogin} className="space-y-4">
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        name=""
        id=""
        className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
        placeholder="Your email address"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        name=""
        id=""
        className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
        placeholder="Your Password"
      />

      {errors.map((error, index) => {
        return (
          <div
            key={`error_${index}`}
            className="p-5 bg-main text-white rounded-xl opacity-80"
          >
            {error}
          </div>
        );
      })}

      <CustomButton label="Submit" onClick={submitLogin} />
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
