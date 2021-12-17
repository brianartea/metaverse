import Image from "next/image";
import { useMoralis } from "react-moralis";

function Login() {
  const { authenticate } = useMoralis();

  return (
    <div className="bg-black relative">
      <h1>Login Screen</h1>
      <div className="flex flex-col absolute z-50 h-4/6 items-center justify-center w-full space-y-4">
        {/* Logo */}
        <div className="rounded-fullz-50">
          <Image
            onClick={authenticate}
            // title="Logo"
            src="/sol2.jpg"
            width={200}
            height={200}
            className="object-cover rounded-full hover:spin cursor-pointer"
          />
        </div>
        {/* Login btn */}
        <button
          alt="Login to the MetaVerse"
          title="Login to the MetaVerse"
          onClick={authenticate}
          className="bg-[#FE94FD] font-bold text-black rounded-lg p-5 animate-pulse border border-black z-50"
        >
          Login to the Metaverse
        </button>
      </div>
      <div className="w-full h-screen">
        <Image
          src="/bg2.jpg"
          layout="fill"
          alt="background"
          objectFit="cover"
        />
      </div>
    </div>
  );
}

export default Login;
