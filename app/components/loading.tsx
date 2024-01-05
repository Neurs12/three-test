import { useEffect, useState } from "react";
import { hookstate } from "@hookstate/core";

export const waitSuspense = hookstate(false);

export default function Loading() {
    const [begin, updateBegin] = useState("");
    const [end, updateEnd] = useState("");
    useEffect(() => {
        const run = setInterval(() => {
            updateBegin(String.fromCodePoint((19968 + Math.floor((Math.random() * 20927)))));
            updateEnd(String.fromCodePoint((19968 + Math.floor(Math.random() * 20927))));
            if (waitSuspense.get()) clearInterval(run);
        }, 1000/60);
    }, []);

    return (
        <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl">
            {begin} Loading... {end}
        </h1>
    );
}