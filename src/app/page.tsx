import Image from "next/image";
import LeftSide from "@/app/components/LeftSide";
import RightSide from "@/app/components/RightSide";
import Close from "@/app/components/Close";

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-rose-50">
        <div className="relative flex flex-col m-6 space-y-10 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:m-0">
          <LeftSide />

          <RightSide />

          <Close />
        </div>
      </div>
    </>
  );
}
