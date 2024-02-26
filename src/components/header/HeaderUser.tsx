import ExtractInnerType from "@/util/ExtractInnerType";
import User from "@@/User.svg";
import Link from "next/link";
import React from "react";

import dynamic from 'next/dynamic'

// Do CSR
const HeaderUserInfo = dynamic(
    () => import("./HeaderUserInfo"),
    {
        ssr: false,
        loading: () => <div>로딩 중...</div>
    }
);

export default function HeaderUser({
    name = "정민호",
    userType = "임원",
    ...props
}: {
    name?: string
    userType?: string
} & Omit<ExtractInnerType<typeof Link>, "id" | "href" | "children">) {
    return (
        <Link id="header-user" href="/log-in" {...props}>
            <HeaderUserInfo />
            <User />
        </Link>
    )
}