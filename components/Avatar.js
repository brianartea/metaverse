import Image from "next/image";
import { useMoralis } from "react-moralis";

function Avatar({ username, logoutOnPress }) {
  const { user, logout } = useMoralis();
  return (
    <Image
      className="rounded-full bg-black cursor-pointer opacity-80 hover:opacity-100 hover:spin"
      src={`https://dicebear.com/api/pixel-art/${
        username || user.get("username")
      }.svg`}
      onClick={() => logoutOnPress && logout()}
      layout="fill"
    />
  );
}

export default Avatar;
