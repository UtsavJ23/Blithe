import * as React from "react";

export default function Item(props) {
  return (
    <div className="flex max-w-[282px] flex-col items-stretch">
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/334dde24fc815c25548380015949aa7cb2a29488908911b71b598f9d67628c65?apiKey=adda5a92a9864d4080d6c24e8047db11&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/334dde24fc815c25548380015949aa7cb2a29488908911b71b598f9d67628c65?apiKey=adda5a92a9864d4080d6c24e8047db11&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/334dde24fc815c25548380015949aa7cb2a29488908911b71b598f9d67628c65?apiKey=adda5a92a9864d4080d6c24e8047db11&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/334dde24fc815c25548380015949aa7cb2a29488908911b71b598f9d67628c65?apiKey=adda5a92a9864d4080d6c24e8047db11&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/334dde24fc815c25548380015949aa7cb2a29488908911b71b598f9d67628c65?apiKey=adda5a92a9864d4080d6c24e8047db11&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/334dde24fc815c25548380015949aa7cb2a29488908911b71b598f9d67628c65?apiKey=adda5a92a9864d4080d6c24e8047db11&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/334dde24fc815c25548380015949aa7cb2a29488908911b71b598f9d67628c65?apiKey=adda5a92a9864d4080d6c24e8047db11&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/334dde24fc815c25548380015949aa7cb2a29488908911b71b598f9d67628c65?apiKey=adda5a92a9864d4080d6c24e8047db11&"
        className="aspect-[0.76] object-contain object-center w-full overflow-hidden"
      />
      <div className="flex w-full justify-between gap-5 mt-8 px-px items-start">
        <div className="flex flex-col items-stretch px-5">
          <div className="text-neutral-700 text-base whitespace-nowrap">
            White T-Shirt
          </div>
          <div className="text-zinc-500 text-sm whitespace-nowrap mt-3">
            Priya’s Brand
          </div>
        </div>
        <div className="text-neutral-700 text-center text-sm whitespace-nowrap bg-neutral-100 justify-center items-stretch px-6 py-3 rounded-lg">
          $13.00
        </div>
      </div>
    </div>
  );
}

