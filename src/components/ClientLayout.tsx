"use client";

import { AudioPlayerContextProvider } from "@/contexts/AudioPlayerContext/AudioPlayerProvider";
import { PlayIcon } from "@/svg/icons";
import { ReactNode } from "react";
import MainPlayerContainer from "./MainPlayerContainer";
import VisualEqualizer from "./VisualEqualizer";

const ClientLayout = ({ children }: { children: ReactNode }) => {
  return (
    <AudioPlayerContextProvider>
      <div className="relative z-10">
        <header className="px-5 pt-10 pb-7 flex">
          <div className="shrink-0 font-black tracking-tighter text-[4rem]">
            <PlayIcon className="h-[2rem] w-auto inline-block -rotate-6 fill-amber-500" />{" "}
            <h1 className="inline-block">plaja</h1>
          </div>
          <div className="grow ml-5 flex justify-end items-end">
            <div className="h-[3.2rem] w-[8rem] mb-[25px]">
              <VisualEqualizer />
            </div>
          </div>
        </header>
        <main>{children}</main>
      </div>
      <MainPlayerContainer />
    </AudioPlayerContextProvider>
  );
};

export default ClientLayout;
