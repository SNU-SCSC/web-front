import React from "react";

import Header from "../components/header/Header";
import { Song_Myung } from "next/font/google";

import "./globals.css";
import WidthRestrictor from "@/components/util/WidthRestrictor";

const song_myung = Song_Myung({
    weight: '400',
    style: 'normal',
    subsets: ['latin']
})

export default function RootLayout({ children }: {
    children: React.ReactNode,
}) {
    return (
        <html lang="en">
            <body className={song_myung.className}>
                <Header/>
                <WidthRestrictor id="body" restrictAmount={1200}>
                    {children}
                </WidthRestrictor>
            </body>
        </html>
    );
}