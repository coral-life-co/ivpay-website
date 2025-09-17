// "use client";

// import React from "react";
// import { cn } from "@/lib/utils";
// import { motion, MotionValue, useScroll, useTransform } from "motion/react";
// import { ComponentPropsWithoutRef, FC, ReactNode, useRef } from "react";


// export interface TextRevealProps extends ComponentPropsWithoutRef<"div"> {
//   children: string; // The text to reveal, e.g. "OpenWork: The open source AI agent framework."
// }

// export const TextReveal: FC<TextRevealProps> = ({ children, className }) => {
//   const targetRef = useRef<HTMLDivElement | null>(null);
//   const { scrollYProgress } = useScroll({
//     target: targetRef,
//   });

//   if (typeof children !== "string") {
//     throw new Error("TextReveal: children must be a string");
//   }

//   // Updated default text for OpenWork context
//   const defaultText =
//     "OpenWork: The open source framework for building, deploying, and managing AI agents.";
//   const textToReveal = children.trim().length > 0 ? children : defaultText;
//   const words = textToReveal.split(" ");

//   return (
//     <div ref={targetRef} className={cn("relative z-0 h-[200vh]", className)}>
//       <div
//         className={
//           "sticky top-0 mx-auto flex h-[50%] max-w-5xl items-center bg-transparent px-[1rem] "
//         }
//       >
//         <span
//           ref={targetRef}
//           className={
//             "flex flex-wrap p-5 text-2xl font-normal text-black/20 dark:text-white/20 md:p-8 md:text-3xl lg:p-10 lg:text-4xl xl:text-3xl"
//           }
//         >
//           {words.map((word, i) => {
//             const start = i / words.length;
//             const end = start + 1 / words.length;
//             return (
//               <Word key={i} progress={scrollYProgress} range={[start, end]}>
//                 {word}
//               </Word>
//             );
//           })}
//         </span>
//       </div>
//     </div>
//   );
// };

// interface WordProps {
//   children: ReactNode;
//   progress: MotionValue<number>;
//   range: [number, number];
// }

// const Word: FC<WordProps> = ({ children, progress, range }) => {
//   const opacity = useTransform(progress, range, [0, 1]);
//   return (
//     <span className="xl:lg-3 relative mx-1 lg:mx-1.5">
//       <span className="absolute opacity-30">{children}</span>
//       <motion.span
//         style={{ opacity: opacity }}
//         className={"text-black dark:text-white"}
//       >
//         {children}
//       </motion.span>
//     </span>
//   );
// };

// const CarbonNexusLanding = () => {
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false);

//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//     setIsMenuOpen(false);
//   };

//   return (
//       <section className="py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <TextReveal className="font-medium text-lg">
//             For ASEAN businesses, climate risk is now business risk. Regulatory pressure from international standards like CBAM and EUDR creates complex compliance hurdles. Financial demands tie capital access to verifiable environmental performance. Operational threats from extreme weather disrupt supply chains and impact yields. Navigating this new reality requires more than estimates; it requires ground truth.
//           </TextReveal>
//         </div>
//       </section>
//   );
// };

// export { CarbonNexusLanding as TextRevealSection };