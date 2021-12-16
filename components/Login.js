import Image from "next/image";
import { useMoralis } from "react-moralis";

function Login() {
  const { authenticate } = useMoralis();

  return (
    <div className="bg-black relative">
      <h1>Login Screen</h1>
      <div className="flex flex-col absolute z-50 h-4/6 items-center justify-center w-full space-y-4">
        {/* Logo */}
        <div className="rounded-full border border-black z-50">
          <Image
            src="/sol.jpg"
            width={200}
            height={200}
            className="object-cover rounded-full"
          />
        </div>
        {/* Login btn */}
        <button
          onClick={authenticate}
          className="bg-[#FE94FD] font-bold text-black rounded-lg p-5 animate-pulse border border-black z-50"
        >
          Login to the Metaverse
        </button>
      </div>
      <div className="w-full h-screen">
        <Image src="/bg.jpeg" layout="fill" objectFit="cover" />
      </div>
    </div>
  );
}

export default Login;
