"use client";
import { Button } from "@/components/ui/Button";
import { ModeToggle } from "@/components/ui/Dark-mode-button";
import Link from "next/link";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { CiUser } from "react-icons/ci";

export default function Navbar() {
  return (
    <div className="flex w-full min-h-12 border-b border-gray-300 flex-row items-center px-2">
      {/* container */}

      <div className="flex justify-between w-full items-center">
        {/* icon */}
        <div>
          <Button variant="default" asChild size="sm" className="h-fit p-2">
            <Link href="#">
              <IoIosArrowBack size={20} />
            </Link>
          </Button>
        </div>
        <div className="bg-card rounded-xl py-1 px-6  ">project name</div>
        {/* theme */}
        <div className="flex gap-2">
          <div>
            <ModeToggle />
          </div>
          <div>
            <div className="border rounded-3xl p-2">
              <CiUser size={22} className=" " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
