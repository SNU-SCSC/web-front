import "./Header.css";
import SCSC from "@@/SCSC.svg";

import WidthRestrictor from "@/components/util/WidthRestrictor";
import Link from "next/link";
import HeaderItem from "./HeaderItem";
import HeaderUser from "./HeaderUser";


export default function Header() {
    return (
        <div id="header">
            <WidthRestrictor id="header-container" restrictAmount={1200}>
                <Link className="header-logo" href="/">
                    <SCSC alt="Go to main page"/>
                </Link>
                <div id="header-items"> 
                    <HeaderItem accentText="공부" normalText="하기"/>
                    <HeaderItem accentText="이야기" normalText="하기"/>
                </div>
                <HeaderUser />
            </WidthRestrictor>
        </div>
    );
}