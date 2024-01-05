'use client';

import { Suspense } from "react";
import Wanderers from "./components/scene";
import Loading from "./components/loading";

export default function App() {

    return (
        <>
            <Suspense fallback={<Loading />}>
                <Wanderers />
            </Suspense>
        </>
    );
}