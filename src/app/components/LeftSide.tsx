import Image from "next/image";
import Facebook from "@/assets/images/facebook.png";
import Google from "@/assets/images/google.png";

const LeftSide = () => {
  return (
    <>
      <div className="p-6 md:p-20">
        <h2 className="font-mono mb-5 text-4xl font-bold">Log In</h2>
        <p className="max-w-sm mb-12 font-sans font-light text-gray-600">
          Log in to your account to upload or download pictures, videos or
          music.
        </p>
        <input
          type="text"
          className="w-full p-6 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light"
          placeholder="Enter your email address"
        />

        <div className="flex flex-col items-center justify-between mt-6 space-y-6 md:flex-row md:space-y-0">
          <div className="font-thin text-cyan-700">Forgot Password</div>

          <button className="w-full md:w-auto flex justify-center items-center p-6 space-x-4 font-sans font-bold text-white rounded-md shadow-lg px-9 bg-cyan-700 shadow-cyan-100 hover:bg-opacity-90 shadow-sm hover:shadow-lg border transition hover:-translate-y-0.5 duration-150">
            <span>Next</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#ffffff"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1="5" y1="12" x2="19" y2="12" />
              <line x1="13" y1="18" x2="19" y2="12" />
              <line x1="13" y1="6" x2="19" y2="12" />
            </svg>
          </button>
        </div>

        {/*border*/}
        <div className="mt-12 border-b border-b-gray-300" />

        {/*bottom content*/}
        <p className="py-6 text-sm font-thin text-center text-gray-400">
          or login with
        </p>

        {/*bottom buttoms container*/}
        <div className="flex flex-col space-x-0 space-y-6 md:flex-row md:space-x-4 md:space-y-0">
          <button className="flex items-center justify-center py-2 space-x-3 border border-gray-300 rounded shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition duration-150 md:w-1/2">
            <Image src={Facebook} alt="facebook" className="w-9" />
            <span className="font-thin">Facebook</span>
          </button>

          <button className="flex items-center justify-center py-2 space-x-3 border border-gray-300 rounded shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition duration-150 md:w-1/2">
            <Image src={Google} alt="google" className="w-9" />
            <span className="font-thin">Google</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default LeftSide;
