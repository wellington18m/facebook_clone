import Image from "next/image";
import { signIn } from "next-auth/react";

function Login() {
  return (
    <div className="w-screen h-screen grid place-content-center">
      <Image
        width={150}
        height={150}
        src="https://links.papareact.com/5me"
        objectFit="contain"
        alt="Facebook logo"
      />
      <button
        type="button"
        onClick={signIn}
        className="bg-blue-500 p-5 rounded-3xl text-white mt-5"
      >
        Login with Facebook
      </button>
    </div>
  );
}

export default Login;
