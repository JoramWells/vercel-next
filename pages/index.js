import Head from "next/head";
import Image from 'next/image'
import { ViewGridIcon } from "@heroicons/react/solid";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Guru | Foundation </title>
      </Head>
      {/* Header */}
      <header className="flex w-full p-5 justify-between text-sm text-gray-500">
        {/* Left */}
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>
        {/* Right */}
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>
          {/* Icon */}
          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer"  />
          {/* Avatar */}
          <img
            src="https://yt3.ggpht.com/yti/ANoDKi6Q9l1vIxuf7fPiHUtE3wIwe7mUxG-RUlmaJw=s88-c-k-c0x00ffffff-no-rj-mo"
            loading="lazy"
            alt="profile_pic"
            className="h-10 cursor-pointer rounded-full transition duration-150 transform hover:scale-110"
          />
        </div>
      </header>
      {/* Body */}
      <form>
        <Image
        src="https://www.thehawk.in/hawkcontent/servlet/RDESController?command=rdm.Picture&sessionId=RDWEBD9ZXBMHEVOZY44KG0ZIGGJKEI9YBQY0U&app=rdes&partner=thehawk&type=7&uid=7fqeTRRcJ4ftYOyw41rbQiUSYivnjIvrF5837497"
        height={100}
        width={300}
         />
      </form>
      {/* Footer */}
    </div>
  );
}
