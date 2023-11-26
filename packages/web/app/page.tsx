import Image from 'next/image'
import React from "react";
import PP from "@/app/components/PP";

export default function Home() {
  return (
    <div style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)"
    }} className="max-w-[1166px]">
      <PP
        strengths={["aaaa", "aaa", "aaa", "aaa","aaa"]}
        supports={["aaaa", "aaa", "aaa", "aaa",]}
        achievements={["aaaa", "aaa", "aaa", "aaa"]}
        developments={["aaaa", "aaa", "aaa", "aaa",]}
        others={["aaaa", "aaa", "aaa", "aaa","aaa","aaa",]}
        details={
        {
          name: "Ricky",
          role: "PD",
          squad: "lalal",
          level: "3.1",
          moveToLevel: "3.2"
        }
      }></PP>
    </div>
  )
}
