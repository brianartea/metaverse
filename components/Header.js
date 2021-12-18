import Image from "next/image";
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";

function Header() {
  const { user, logout } = useMoralis();

  return (
    <div className="sticky top-0 p-5 z-50 bg-black shadow-sm text-pink-500 border-b-2 border-pink-700">
      <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
        <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
          <Image
            onClick={logout}
            layout="fill"
            src="/sol2.jpg"
            objectFit="cover"
            // width={100}
            // height={100}
            className="rounded-full cursor-pointer hover:spin opacity-80 hover:opacity-100"
          />
        </div>
        <div className="col-span-4 text-left lg:text-center">
          <div className="relative h-48 w-48 lg:mx-auto border-pink-500 border-8 rounded-full">
            <Avatar logoutOnPress />
          </div>

          {/* Welcome message */}
          <h1 className="lg:text-3xl text-xl">Welcome to Metaverse</h1>

          {/* Username */}
          <h2 className="lg:text-5xl text-2xl font-bold truncate">
            {user.getUsername()}
          </h2>

          {/* Change username component */}
          <ChangeUsername />
        </div>
      </div>
    </div>
  );
}

export default Header;
