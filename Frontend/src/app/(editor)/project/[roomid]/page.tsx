"use client";
import Navbar from "@/components/Editor/Navbar";
import SideBar from "@/components/Editor/Sidebar";
import { Button } from "@/components/ui/Button";
import { ModeToggle } from "@/components/ui/Dark-mode-button";
import Link from "next/link";
import React, { useState } from "react";
import { FaArrowRight, FaRegFileLines } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa";

import dynamic from "next/dynamic";
import { Badge } from "@/components/ui/badge";
import ReactPills from "@/app/Drag/ReactPills";
import { ScrollablePills } from "@/app/Drag/ScrollablePills";
export type Pill = {
  id: number;
  text: string;
  width: number;
};
const MEditor = dynamic(() => import("@/components/Editor/MEditor"), {
  ssr: false,
});
export default function Page() {
  const [fileOpen, setfileOpen] = useState(0);
  const [ResultOpen, setResultOpen] = useState(0);
  const PILLS: Pill[] = [
    { id: 1, text: "1. Short Pill", width: 90 },
    { id: 2, text: "2. Medium Length Pill", width: 150 },
    { id: 3, text: "3. Very Long Content Pill", width: 170 },
    { id: 11, text: "1. Short Pill", width: 90 },
  ];

  return (
    <div className="mx-1 w-full">
      {/* header part for code */}

      <Navbar />

      <div className="h-screen bg-background border-border flex">
        {fileOpen ? (
          <div className="border-r border-border p-1 w-fit min-w-32 md:min-w-[200px] md:max-w-[300px] bg-sidebar">
            <SideBar />
          </div>
        ) : null}

        {/* Main container takes full height */}
        <div className="bg-background flex flex-col w-full">
          {/* top bar */}
          <div className="flex border border-border bg-card">
            <Button
              onClick={() => setfileOpen(fileOpen === 0 ? 1 : 0)}
              variant="ghost"
              size="icon"
            >
              <FaRegFileLines />
            </Button>
            <div className="bg-secondary px-4 flex-1">
              <ReactPills pills={PILLS} />
              {/* <ScrollablePills pills={PILLS} /> */}
            </div>
            <Button
              onClick={() => setResultOpen(ResultOpen === 0 ? 1 : 0)}
              variant="ghost"
              size="icon"
            >
              <IoChatbubbleEllipsesOutline />
            </Button>
          </div>

          {/* main content fills rest of space */}
          <div className="grid flex-1 grid-cols-7">
            {/* editor */}
            <div
              className={`${
                ResultOpen ? "col-span-5" : "col-span-7"
              } border-border bg-background`}
            >
              <MEditor />
            </div>
            {/* chat + result */}
            {ResultOpen ? (
              <div className="col-span-2 flex flex-col border-border bg-sidebar">
                <div>run</div>
                <div>chats</div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
