import * as React from "react";
import { cn } from "@/lib/utils";

// Placeholder for CarbonNexus logo - will be replaced with actual logo files
// import LogoFull from '@/resources/logo/carbonnexus-logo-full.svg'
// import LogoMedium from '@/resources/logo/carbonnexus-logo-medium.svg'
// import LogoSmall from '@/resources/logo/carbonnexus-logo-small.svg'

type LogoProps = React.SVGAttributes<SVGAElement> & {
  size?: "small" | "medium" | "full";
  color?: "color" | "bw"
};

//TODO: PLace logo into container -> less ugly
const Logo = React.forwardRef<SVGElement, LogoProps>(
  ({ className, size = "medium", color = "color", ...props }, forwardRef) => {

    // Temporary text-based logo until SVG files are provided
    return (
      <div className={cn("h-full flex items-center font-bold text-accent", className)} ref={forwardRef} {...props}>
        CarbonNexus
      </div>
    );

    // Uncomment when actual logo files are available:
    // let LogoComponent;
    // if (size === "full") {
    //     LogoComponent = LogoFull;
    // } else if (size === "medium") {
    //     LogoComponent = LogoMedium;
    // } else {
    //     LogoComponent = LogoSmall;
    // }

    // return <LogoComponent className={cn("h-full w-auto fill-accent ", className)} ref={forwardRef} {...props}/>
   
  },
);
Logo.displayName = "Logo";

export { Logo };
