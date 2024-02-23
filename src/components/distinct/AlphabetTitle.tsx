import "./AlphabetTitle.css";
import MultiClassName from "@/util/MultiClassName";
import React from "react";

export default function AlphabetTitle({
    children,
    subChildren,
    className,
    ...props
}: {
    subChildren?: React.ReactNode;
} & React.HtmlHTMLAttributes<HTMLDivElement>) {
    return (
        <span className={MultiClassName([
            "alphabet-title",
            className
        ])} {...props}>
            <span className="sub">{subChildren}</span>
            {children}
        </span>
    )
}