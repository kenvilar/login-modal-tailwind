import Image from "next/image";

const RightSide = () => {
  return (
    <>
      <img
        src="https://picsum.photos/id/41/898/1416"
        alt="right image"
        width={898}
        height={1416}
        className="w-[430px] hidden md:block"
      />
    </>
  );
};

export default RightSide;
