import Image from "next/image";

export default function AuthImg() {
  return (
    <div>
      <div className="">
        <div className="bg-auth-bg p-2 h-[100vh] bg-cover bg-center bg-no-repeat  rounded-es-[10rem] flex justify-center items-center flex-wrap">
          <div className="flex flex-col justify-center items-center w-[380px]">
            <Image
              src="/authLogo.svg"
              width={196}
              height={237}
              alt="auth Logo"
              className="!w-[clamp(100px,13vw,196px)]"
            />
            <h1 className="text-[clamp(50px,6vw,92px)] text-white mt-[15.46px]">
              MapX
            </h1>
            <div className="rounded-[24px]" style={{}}>
              <p
                className=" text-white text-center text-[clamp(10px,1vw,16px)] p-[clamp(16px,2vw,32px)]  rounded-[24px] mt-[clamp(25px,4vw,57px)]"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(15, 23, 42, 0.00) 0%, rgba(15, 23, 42, 0.01) 100%)",
                  border: "1px solid rgba(255, 255, 255, 0.40)",
                  backdropFilter: "blur(10px)",
                }}
              >
                Step into a world of precision agriculture and seamless farm
                management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
