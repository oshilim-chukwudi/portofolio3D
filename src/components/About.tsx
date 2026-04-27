'use client'
import { memo } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import Image from "next/image";

import { styles } from "../styles";
import { services, Service } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

interface ServiceCardProps extends Service {
  index: number;
}

const ServiceCard = memo(({ index, title, icon }: ServiceCardProps) => (
  <Tilt options={{ max: 45, scale: 1, speed: 450 }} className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <Image src={icon} alt={title} width={64} height={64} className="object-contain" />
        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
));

ServiceCard.displayName = "ServiceCard";

const About = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>

    <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
    >
      Full Stack Developer and QA Security &amp; Tech Lead with 6+ years of
      professional experience building scalable, secure, and performant web
      applications. Currently leading quality engineering and security
      practices at BioAro, with a track record spanning React, Node.js, and
      AI-assisted systems. Strong collaborator across cross-functional teams —
      from architecture decisions to production deployments.
    </motion.p>

    <div className="mt-20 flex flex-wrap gap-10">
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service} />
      ))}
    </div>
  </>
);

export default SectionWrapper(About, "about");
