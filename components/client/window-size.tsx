"use client";

import { useEffect, useState } from "react";

export default function WindowSize() {
    const [size, setSize] = useState({
        width: typeof window !== "undefined" ? window.innerWidth : 0,
        height: typeof window !== "undefined" ? window.innerHeight : 0,
    });

    useEffect(() => {
        const handleResize = () => {
            setSize({ width: window.innerWidth, height: window.innerHeight });
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // Uppdatera direkt vid mount

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="fixed bottom-4 right-4 bg-black text-white px-3 py-2 rounded-md text-sm">
            {size.width} x {size.height}px
        </div>
    );
}
