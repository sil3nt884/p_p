'use client'
import React, { useState } from "react";
import 'tailwindcss/tailwind.css';
import { LiState } from "@/app/components/LiState";
type details = {
  name: string
  role: string
  squad: string
  level : string
  moveToLevel: string
}



export default function PP({
  details,
  others,
  strengths,
  supports,
  developments,
  achievements }: {
  details:details,
  others: string[],
  strengths: string[]
  achievements: string[]
  developments: string[]
  supports: string[]
}) {

  return (
    <div className="flex border-[1px] w-fit flex-row flex-wrap">
        <div className="min-w-[582px]">
            <div className="bg-blue-600 text-white font-bold p-4 min-w-[582px]">
              <p>[{details.name}]</p>
              <p>[{details.role}]</p>
              <p>[{details.squad}]</p>
              <p>[{details.level}]</p>
            </div>
            <div className="bg-gray-200 text-black p-4 flex justify-between min-w-[582px]">
              <div className="flex flex-col">
                <p>Provisional move to/</p>
                <p>Provisional move to Remain at…</p>
              </div>
              <p className="pt-[12px]">{details.moveToLevel}</p>
            </div>
        </div>
        <div className="flex border-[1px] min-w-[582px] min-h[275px]">
          <div className="flex">
            <div className="bg-[#FFC800] text-white p-4 font-bold leading-[11px] rounded flex flex-col items-center justify-center space-y-1">
              <p style={{
                writingMode: "vertical-rl"
              }}>Others</p>
            </div>
            <div className="bg-white text-black list-disc p-4">
              <ul  className={"list-disc p-4 break-word max-w-[582px]"}>
                {others.map((other, idx) =>
                  <LiState index={idx} className={"break-words max-w-[472px]"} key={other+ idx} text={other}></LiState>)}
              </ul>
            </div>
          </div>
        </div>
      <div className="flex border-[1px] min-w-[582px] min-h[275px]">
        <div className="flex">
          <div className="bg-[#A050FF] text-white p-4 font-bold leading-[11px] rounded flex flex-col items-center justify-center space-y-1">
            <p style={{
              writingMode: "vertical-rl"
            }}>Strengths</p>
          </div>
          <div className="bg-white text-black list-disc p-4">
            <ul className={"list-disc p-4 break-word max-w-[582px]"}>
              {strengths.map((str, idx) => <LiState  index={idx} className={"break-words max-w-[472px]"} key={str+idx} text={str}></LiState>)}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex border-[1px] min-w-[582px] min-h[275px]">
        <div className="flex">
          <div className="bg-[#5AC328] text-white p-4 font-bold leading-[11px] rounded flex flex-col items-center justify-center space-y-1">
            <p style={{
              writingMode: "vertical-rl"
            }}>Achievements</p>
          </div>
          <div className="bg-white text-black list-disc p-4">
            <ul className={"list-disc p-4 break-word max-w-[582px]"}>
              {achievements.map((achievement, idx) =>  <LiState  index={idx} className={"break-words max-w-[472px]"} key={achievement+ idx} text={achievement}></LiState>)}
            </ul>
          </div>
        </div>
      </div>

      <div className="flex border-[1px] min-w-[582px] min-h[275px]">
        <div className="flex">
          <div className="bg-[#FF323C] text-white p-4 font-bold leading-[11px] rounded flex flex-col items-center justify-center space-y-1">
            <p style={{
              writingMode: "vertical-rl"
            }}>Development Areas</p>

          </div>
          <div className="bg-white text-black p-4 ">
            <ul className={"list-disc p-4 break-word max-w-[582px]"}>
              {developments.map((development, idx) => <LiState  index={idx} className={"break-words max-w-[472px]"} key={development+idx} text={development}></LiState>)}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex border-[1px] min-w-[582px] min-h[275px]">
        <div className="flex">
          <div className="bg-[#2897FF] text-white p-4 font-bold leading-[11px] rounded flex flex-col items-center justify-center space-y-1">
            <p style={{
              writingMode: "vertical-rl"
            }}>Support / Next Steps</p>
          </div>
          <div className="bg-white text-black p-4">
            <ul className={"list-disc p-4 break-word max-w-[582px]"}>
              {supports.map((support,idx) => <LiState  index={idx} className={"break-words max-w-[472px]"} key={support+idx} text={support}></LiState>)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}