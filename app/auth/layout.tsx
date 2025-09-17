
import { Toaster } from "@/components/ui/sonner";
import React from 'react';

interface Props {
    children: React.ReactNode
}

const MarketingLayout = ({ children }: Props) => {
    return (
        <>
            <Toaster richColors theme="dark" position="top-right" />
            <main className="mx-auto w-full relative">
                {children}
            </main>
        </>
    );
};

export default MarketingLayout
