import * as React from "react";

export default function Navbar(props) {
  return (
    <div className="bg-neutral-100 bg-opacity-80 flex flex-col justify-center items-center px-16 py-8 max-md:px-5">
      <div className="flex w-[955px] max-w-full items-stretch justify-between gap-5 max-md:flex-wrap max-md:justify-center">
        <div className="justify-center text-black text-center text-5xl items-stretch bg-white self-center grow my-auto px-9 py-2 max-md:text-4xl max-md:px-5">
          BRUHH
        </div>
        <div className="justify-between items-stretch self-center flex gap-5 my-auto max-md:justify-center">
          <div className="text-neutral-700 text-2xl italic whitespace-nowrap">
            Home
          </div>
          <div className="text-zinc-500 text-2xl italic">Oversized Tshirts</div>
          <div className="text-zinc-500 text-2xl italic grow whitespace-nowrap">
            Contacts
          </div>
        </div>
        <div className="items-stretch flex justify-between gap-3 pb-2">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c980ad1f441504e9bb941cb739159a25f559f200f7739aa0f0211158c1bb5a4a?apiKey=adda5a92a9864d4080d6c24e8047db11&"
            className="aspect-square object-contain object-center w-[69px] overflow-hidden shrink-0 max-w-full"
          />
          <div className="justify-center items-center bg-neutral-100 flex aspect-[0.6811594202898551] flex-col pl-6 pr-0.5 py-6 rounded-lg max-md:pl-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b4ca16504da969be76021c785ac05e8697e26eb1ba71df2d17460c9518c5ad5?apiKey=adda5a92a9864d4080d6c24e8047db11&"
              className="aspect-square object-contain object-center w-5 overflow-hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

