"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import ReactPills from "./ReactPills";
import { Button } from "@/components/ui/Button";
import { Pill } from "../(editor)/project/[roomid]/page";
interface ScrollablePillsProps {
  pills: Pill[];
}

export const ScrollablePills = ({ pills }: ScrollablePillsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showLeftBtn, setShowLeftBtn] = useState(false);
  const [showRightBtn, setShowRightBtn] = useState(false);

  const checkScroll = useCallback(() => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setShowLeftBtn(scrollLeft > 0);
      setShowRightBtn(scrollLeft < scrollWidth - clientWidth);
    }
  }, []);

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, [checkScroll]);

  const scroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const scrollAmount = 200; // Adjust as needed
      containerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative flex items-center">
      {showLeftBtn && (
        <Button variant="ghost" size="icon" onClick={() => scroll("left")}>
          <FaArrowLeft />
        </Button>
      )}
      <div
        ref={containerRef}
        className="scroll-container flex gap-2"
        onScroll={checkScroll}
      >
        <ReactPills pills={pills} />
      </div>
      {showRightBtn && (
        <Button variant="ghost" size="icon" onClick={() => scroll("right")}>
          <FaArrowRight />
        </Button>
      )}
    </div>
  );
};
