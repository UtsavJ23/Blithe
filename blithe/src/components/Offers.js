import * as React from "react";

export default function Offers(props) {
  return (
    <div className="justify-between bg-black px-16 py-9 rounded-3xl max-md:px-5">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-[66%] max-md:w-full max-md:ml-0">
          <div className="text-white text-4xl leading-10 my-auto max-md:max-w-full max-md:mt-10">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </div>
        </div>
        <div className="flex flex-col items-stretch w-[34%] ml-5 max-md:w-full max-md:ml-0">
          <div className="items-stretch flex grow flex-col max-md:mt-10">
            <div className="items-stretch bg-white flex justify-between gap-3 pl-4 pr-20 py-3 rounded-[62px] max-md:pr-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e2f03936191f3af3d684591454051985eb354413c6b0268ef063c0cdcd4d89b8?apiKey=adda5a92a9864d4080d6c24e8047db11&"
                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-black text-opacity-40 text-base grow whitespace-nowrap self-start">
                Enter your email address
              </div>
            </div>
            <div className="text-black text-base whitespace-nowrap justify-center items-center bg-white mt-3.5 px-16 py-3 rounded-[62px] max-md:px-5">
              Subscribe to Newsletter
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

