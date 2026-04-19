"use client";

interface NarratorBoxProps {
  text: string;
}

export default function NarratorBox({ text }: NarratorBoxProps) {
  return (
    <div className="border-l-2 border-neutral-700 py-2 pl-4">
      <p className="italic leading-relaxed text-neutral-500">{text}</p>
    </div>
  );
}
