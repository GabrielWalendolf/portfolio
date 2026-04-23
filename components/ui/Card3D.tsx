"use client"

import Tilt from "react-parallax-tilt"
import type { ReactNode } from "react"

type Card3DProps = {
  children: ReactNode
  className?: string
}

export default function Card3D({ children, className = "" }: Card3DProps) {
  return (
    <Tilt
      tiltMaxAngleX={8}
      tiltMaxAngleY={8}
      scale={1.02}
      transitionSpeed={400}
      className={className}
    >
      <div className="h-full rounded-[10px] border-t border-border bg-surface p-6 transition-shadow duration-300 hover:shadow-xl hover:shadow-accent/10">
        {children}
      </div>
    </Tilt>
  )
}
