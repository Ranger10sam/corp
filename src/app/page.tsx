import Link from "next/link";
import Image from "next/image";
import homeImg from 'public/home.jpg';

export default function Home() {
  return (
    <>
    <div className="flex w-auto min-h-dvh justify-center items-center">
      This is the HomePage
      <div className="-z-10 absolute inset-0">
        <Image
          src = {homeImg}
          alt = "Home Page"
          fill style={{objectFit: 'cover'}}
        />
      </div>
    </div>
    </>
  );
}
