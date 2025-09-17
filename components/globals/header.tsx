"use client";
import { useMediaQuery } from "@/lib/use-media-querry";
import * as React from "react";
import { cn } from "@/lib/utils";

import { Container } from "@/components/layouts/container";
import { MenuDesktop, MenuMobile } from "@/components/elements/menu";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/elements/logo";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs"
import Link from "next/link";
import { MotionTriggerWrapper } from "../motion/motionTriggerWrapper";
import { MotionWrapper } from "../motion/motion-wrapper";

const Header = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, forwardRef) => {
  const [isMobile, setIsMobile] = React.useState<boolean | null>(null);
  const isMobileQuery = useMediaQuery("(min-width: 1024px)");

  React.useEffect(() => {
    setIsMobile(isMobileQuery);
  }, [isMobileQuery]);

  //TODO: Add animation
  return (
    <header
      ref={forwardRef}
      {...props}
      className={cn(
        "pointer-events-none top-0 z-50 fixed w-full py-2 mb-0 lg:mb-5",
        className,
      )}
    >
      <Container className="flex-row items-center justify-between">
        {isMobile !== null && (
          <Link href="/" className="lg:w-60 pointer-events-auto">
            <Logo className="h-6" />
          </Link>
        )}

        {isMobile === true ? (
          <>
            <MenuDesktop />
  
              <>
                <div className="pointer-events-auto flex justify-end space-x-2 lg:w-60 ">
                  <Button asChild variant="white">
                    {/*//TODO: MAKE IT VAR */}
                    <Link href="https://app.carbonnexus.io/login">
                      Log In
                    </Link>
                  </Button>
                  <Button asChild>
                    <Link href="https://app.carbonnexus.io/register">
                      Sign Up
                    </Link>
                  </Button>
                </div>
                <SignedOut>
                  <SignInButton>
                    <Button
                    >
                      Get Started
                    </Button>
                  </SignInButton>
                </SignedOut>
                <SignedIn>
                  <div className="flex items-center">
                    <Link href="/dashboard" className="ml-4 rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                      Explore Dashboard
                    </Link>
                  </div>
                </SignedIn>
              </>
            

          </>
        ) : isMobile === false ? (
          <MenuMobile />
        ) : null}
      </Container>
    </header>
  );
});
Header.displayName = "Header";

export { Header };