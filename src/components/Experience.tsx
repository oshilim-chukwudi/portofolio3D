'use client'
import { useState, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import { styles } from "../styles";
import { experiences, Experience as ExperienceType } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

interface CompanyAvatarProps {
  icon: string | null;
  iconBg: string;
  name: string;
  size?: "sm" | "md";
}

const CompanyAvatar = memo(({ icon, iconBg, name, size = "md" }: CompanyAvatarProps) => {
  const dim = size === "sm" ? "w-7 h-7" : "w-12 h-12";
  const textSize = size === "sm" ? "text-[10px]" : "text-base";
  const imgSize = size === "sm" ? 16 : 28;

  return (
    <div
      className={`${dim} rounded-full flex items-center justify-center shrink-0`}
      style={{ background: iconBg }}
    >
      {icon ? (
        <Image src={icon} alt={name} width={imgSize} height={imgSize} className="object-contain" />
      ) : (
        <span className={`text-white font-bold ${textSize}`}>
          {name.slice(0, 2).toUpperCase()}
        </span>
      )}
    </div>
  );
});

CompanyAvatar.displayName = "CompanyAvatar";

const Experience = () => {
  const [activeTab, setActiveTab] = useState(experiences.length - 1);
  const active: ExperienceType = experiences[activeTab];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Where I&apos;ve built things</p>
        <h2 className={styles.sectionHeadText}>Career Journey.</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-16 flex flex-col lg:flex-row gap-0"
      >
        {/* Sidebar tab list */}
        <div className="relative flex lg:flex-col overflow-x-auto lg:overflow-visible shrink-0 border-b-2 lg:border-b-0 lg:border-l-2 border-white/10 lg:w-56">
          {experiences.map((exp, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`relative flex items-center gap-2.5 px-4 py-3.5 text-left w-full transition-all duration-200 ${
                activeTab === i ? "bg-white/5" : "hover:bg-white/[0.03]"
              }`}
            >
              {activeTab === i && (
                <>
                  <motion.span
                    layoutId="tab-bar"
                    className="absolute left-0 top-0 w-[2px] h-full bg-[#70AFCE] hidden lg:block"
                  />
                  <motion.span
                    layoutId="tab-bar-h"
                    className="absolute bottom-0 left-0 h-[2px] w-full bg-[#70AFCE] lg:hidden"
                  />
                </>
              )}

              <CompanyAvatar
                icon={exp.icon}
                iconBg={exp.iconBg}
                name={exp.company_name}
                size="sm"
              />

              <div className="min-w-0 hidden lg:block">
                <p
                  className={`text-[12px] font-semibold leading-tight truncate ${
                    activeTab === i ? "text-white" : "text-secondary"
                  }`}
                >
                  {exp.company_name.split(",")[0]}
                </p>
                <p className="text-[10px] text-white/40 font-mono mt-0.5 truncate">
                  {exp.date.split("—")[0].trim()}
                </p>
              </div>

              {exp.current && (
                <span className="ml-auto shrink-0 hidden lg:flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Detail panel */}
        <div className="flex-1 lg:pl-10 pt-8 lg:pt-0 min-h-[420px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-start gap-4">
                <CompanyAvatar
                  icon={active.icon}
                  iconBg={active.iconBg}
                  name={active.company_name}
                  size="md"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-white text-[20px] font-bold leading-tight">
                      {active.title}
                    </h3>
                    {active.current && (
                      <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-green-500/15 border border-green-500/30 text-green-400 text-[11px] font-semibold tracking-wide">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                        NOW
                      </span>
                    )}
                  </div>
                  <p className="text-[#70AFCE] text-[14px] font-semibold mt-0.5">
                    {active.company_name.split(",")[0]}
                  </p>
                </div>
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                {active.company_name.includes(",") && (
                  <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 text-[11px] font-mono">
                    📍 {active.company_name.split(",").slice(1).join(",").trim()}
                  </span>
                )}
                <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 text-[11px] font-mono">
                  🗓 {active.date}
                </span>
              </div>

              {active.tags && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {active.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-md bg-[#70AFCE]/10 border border-[#70AFCE]/20 text-[#70AFCE] text-[11px] font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-5 mb-4 h-px bg-white/[0.08]" />

              <ul className="space-y-3">
                {active.points.map((point, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.2 }}
                    className="flex items-start gap-3 text-[#ccd6f6] text-[14px] leading-relaxed"
                  >
                    <span className="text-[#70AFCE] shrink-0 mt-[3px] text-base leading-none">
                      ▹
                    </span>
                    {point}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
