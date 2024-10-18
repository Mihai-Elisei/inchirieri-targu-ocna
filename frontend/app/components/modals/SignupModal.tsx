"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Modal from "./Modal";
import CustomButton from "../forms/CustomButton";
import useSignupModal from "@/app/hooks/useSigupModal";
import apiService from "@/app/services/apiService";
import { handleLogin } from "@/app/lib/actions";

const LoginModal = () => {
  const signupModal = useSignupModal();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [errors, setErrors] = useState<String[]>([]);

  const submitSignup = async () => {
    const formData = {
      email: email,
      password1: password1,
      password2: password2
    };

    const response = await apiService.post(
      "/api/auth/register/",
      JSON.stringify(formData)
    );

    if (response.access) {
      // handle login
      handleLogin(response.user.pk, response.access, response.refresh);

      signupModal.close();
      router.push("/");
    } else {
      const tmpErrors: string[] = Object.values(response).map((error: any) => {
        return error;
      });
      setErrors(tmpErrors);
    }
  };

  const content = (
    <form action={submitSignup} className="space-y-4">
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        name=""
        id=""
        className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
        placeholder="Your email address"
      />
      <input
        onChange={(e) => setPassword1(e.target.value)}
        type="password"
        name=""
        id=""
        className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
        placeholder="Your Password"
      />
      <input
        onChange={(e) => setPassword2(e.target.value)}
        type="password"
        name=""
        id=""
        className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
        placeholder="Repeat Password"
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

      <CustomButton label="Submit" onClick={submitSignup} />
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
