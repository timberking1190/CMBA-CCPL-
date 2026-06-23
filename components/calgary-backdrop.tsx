'use client'

import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

/**
 * CalgaryBackdrop
 * A bespoke, dynamic Calgary skyline rendered as layered SVG art:
 * Rocky Mountains, the downtown towers, the Calgary Tower with a live
 * beacon, and a shimmering Bow River. Reacts to scroll + pointer for a
 * parallax, "moving postcard" feel. Sits behind hero content; the paper
 * wash on top keeps the headline crisp. Self-contained, no external media.
 */
export function CalgaryBackdrop() {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)

  // Scroll parallax
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const skyY = useTransform(scrollYProgress, [0, 1], ['0%', '14%'])
  const mtnY = useTransform(scrollYProgress, [0, 1], ['0%', '26%'])
  const cityY = useTransform(scrollYProgress, [0, 1], ['0%', '42%'])
  const riverY = useTransform(scrollYProgress, [0, 1], ['0%', '58%'])

  // Pointer parallax
  const [pointer, setPointer] = useState({ x: 0, y: 0 })
  const px = useSpring(pointer.x, { stiffness: 60, damping: 18 })
  const py = useSpring(pointer.y, { stiffness: 60, damping: 18 })

  useEffect(() => {
    if (reduce) return
    const onMove = (e: MouseEvent) => {
      const nx = e.clientX / window.innerWidth - 0.5
      const ny = e.clientY / window.innerHeight - 0.5
      setPointer({ x: nx, y: ny })
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [reduce])

  const mtnX = useTransform(px, (v) => v * -22)
  const cityX = useTransform(px, (v) => v * -40)
  const towerX = useTransform(px, (v) => v * -56)
  const driftY = useTransform(py, (v) => v * 10)

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Animated sky wash */}
      <motion.div
        style={{ y: reduce ? 0 : skyY }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_70%_-10%,#eef2f6_0%,#f6f4ef_42%,#ffffff_72%)]" />
        {!reduce && (
          <motion.div
            className="absolute -inset-[20%] opacity-70 bg-[radial-gradient(40%_40%_at_30%_20%,rgba(225,36,27,0.07),transparent_60%),radial-gradient(45%_45%_at_80%_10%,rgba(22,19,26,0.06),transparent_60%)]"
            animate={{ x: ['-3%', '3%', '-3%'], y: ['-2%', '2%', '-2%'] }}
            transition={{ duration: 26, ease: 'easeInOut', repeat: Infinity }}
          />
        )}
      </motion.div>

      {/* Drifting clouds */}
      {!reduce && (
        <div className="absolute inset-x-0 top-[14%] h-[28%]">
          <motion.div
            className="absolute left-0 h-10 w-44 rounded-full bg-white/55 blur-2xl"
            animate={{ x: ['-15vw', '115vw'] }}
            transition={{ duration: 60, ease: 'linear', repeat: Infinity }}
          />
          <motion.div
            className="absolute left-0 top-12 h-8 w-64 rounded-full bg-white/40 blur-2xl"
            animate={{ x: ['-30vw', '120vw'] }}
            transition={{
              duration: 85,
              ease: 'linear',
              repeat: Infinity,
              delay: 8,
            }}
          />
        </div>
      )}

      {/* Mountains */}
      <motion.svg
        style={{ y: reduce ? 0 : mtnY, x: reduce ? 0 : mtnX }}
        className="absolute inset-x-0 bottom-0 h-[78%] w-full"
        viewBox="0 0 1440 620"
        preserveAspectRatio="xMidYMax slice"
        fill="none"
      >
        <path
          d="M0 410 L160 250 L250 330 L360 210 L470 330 L560 270 L700 360 L760 300 L880 360 L0 620 Z"
          fill="#dfe4ea"
        />
        <path
          d="M620 380 L820 200 L900 290 L1010 180 L1130 320 L1230 240 L1360 360 L1440 300 L1440 620 L520 620 Z"
          fill="#d3d9e1"
        />
        {/* snow caps */}
        <path d="M360 210 L335 248 L388 248 Z" fill="#ffffff" opacity="0.85" />
        <path d="M1010 180 L985 220 L1040 220 Z" fill="#ffffff" opacity="0.8" />
        <path d="M820 200 L798 236 L846 236 Z" fill="#ffffff" opacity="0.8" />
      </motion.svg>

      {/* City skyline + Calgary Tower */}
      <motion.div
        style={{ y: reduce ? 0 : cityY }}
        className="absolute inset-x-0 bottom-0 h-[58%]"
      >
        <motion.svg
          style={{ x: reduce ? 0 : cityX, translateY: reduce ? 0 : driftY }}
          className="absolute inset-x-0 bottom-0 h-full w-full"
          viewBox="0 0 1440 440"
          preserveAspectRatio="xMidYMax slice"
          fill="#c0c7d1"
        >
          {/* left cluster */}
          <rect x="40" y="250" width="46" height="190" />
          <rect x="96" y="210" width="38" height="230" />
          <rect x="146" y="280" width="54" height="160" />
          <rect x="212" y="190" width="40" height="250" />
          <rect x="262" y="240" width="60" height="200" />
          <rect x="334" y="160" width="44" height="280" />
          <rect x="390" y="226" width="50" height="214" />
          {/* mid cluster */}
          <rect x="470" y="150" width="48" height="290" />
          <rect x="528" y="206" width="40" height="234" />
          <rect x="582" y="120" width="56" height="320" />
          <rect x="654" y="196" width="44" height="244" />
          {/* right cluster */}
          <rect x="900" y="170" width="50" height="270" />
          <rect x="958" y="232" width="42" height="208" />
          <rect x="1012" y="138" width="54" height="302" />
          <rect x="1080" y="210" width="40" height="230" />
          <rect x="1132" y="176" width="52" height="264" />
          <rect x="1196" y="246" width="46" height="194" />
          <rect x="1254" y="196" width="58" height="244" />
          <rect x="1326" y="240" width="44" height="200" />
        </motion.svg>

        {/* Calgary Tower — the signature piece */}
        <motion.svg
          style={{ x: reduce ? 0 : towerX, translateY: reduce ? 0 : driftY }}
          className="absolute bottom-0 left-[52%] h-full w-[180px] -translate-x-1/2"
          viewBox="0 0 180 440"
          preserveAspectRatio="xMidYMax meet"
          fill="none"
        >
          {/* tapered shaft */}
          <path d="M82 120 L98 120 L104 440 L76 440 Z" fill="#aab2bd" />
          {/* observation pod */}
          <path d="M66 104 L114 104 L108 134 L72 134 Z" fill="#9aa3af" />
          <rect x="70" y="96" width="40" height="10" rx="3" fill="#8f98a4" />
          {/* mast */}
          <rect x="88" y="58" width="4" height="40" fill="#8f98a4" />
          {/* live beacon */}
          <motion.circle
            cx="90"
            cy="56"
            r="5"
            fill="#e1241b"
            animate={reduce ? undefined : { opacity: [1, 0.25, 1] }}
            transition={{ duration: 1.8, ease: 'easeInOut', repeat: Infinity }}
          />
          {!reduce && (
            <motion.circle
              cx="90"
              cy="56"
              r="5"
              fill="#e1241b"
              animate={{ r: [5, 16], opacity: [0.5, 0] }}
              transition={{ duration: 1.8, ease: 'easeOut', repeat: Infinity }}
            />
          )}
        </motion.svg>
      </motion.div>

      {/* Bow River band + shimmer */}
      <motion.div
        style={{ y: reduce ? 0 : riverY }}
        className="absolute inset-x-0 bottom-0 h-[16%] overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#cdd6e0] to-[#dfe5ec]" />
        {!reduce && (
          <motion.div
            className="absolute inset-y-0 -left-1/2 w-1/2 skew-x-[-12deg] bg-gradient-to-r from-transparent via-white/55 to-transparent"
            animate={{ x: ['0%', '320%'] }}
            transition={{
              duration: 7,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatDelay: 2,
            }}
          />
        )}
      </motion.div>

      {/* Paper wash so the headline stays legible */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.82)_0%,rgba(255,255,255,0.42)_34%,rgba(255,255,255,0.18)_56%,rgba(255,255,255,0.55)_100%)]" />
    </div>
  )
}
