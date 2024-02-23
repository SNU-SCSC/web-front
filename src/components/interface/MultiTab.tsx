"use client";

import React from "react";
import "./MultiTab.css";
import MultiClassName from "@/util/MultiClassName";

export function MultiTabItem({
    children,
    className,
    ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button className={MultiClassName([
            "multi-tab-item",
            className
        ])} {...props}>
            {children}
        </button>
    );

}

export default function MultiTab({
    children,
    className,
    onStateChange,
    ...props
}: {
    onStateChange?: any,
} & React.HTMLAttributes<HTMLDivElement>) {
    let childrenArray = React.Children.toArray(children);
    let [currentIndex, setCurrentIndex] = React.useState(0);

    function handleClick(e: React.MouseEvent<HTMLDivElement>, index: number) {
        onStateChange && onStateChange(index);
        setCurrentIndex(index);
    }

    return (
        <div className={MultiClassName([
            "multi-tab",
            className
        ])} {...props} >
            {
                childrenArray.map((child, index) => {
                    if (index === 0) {
                        return React.cloneElement(child as React.ReactElement, {
                            className: MultiClassName(["first", index === currentIndex && "active"]),
                            onClick: (e: React.MouseEvent<HTMLDivElement>) => handleClick(e, index)
                        })
                    } else if (index === childrenArray.length - 1) {
                        return React.cloneElement(child as React.ReactElement, {
                            className: MultiClassName(["last", index === currentIndex && "active"]),
                            onClick: (e: React.MouseEvent<HTMLDivElement>) => handleClick(e, index)
                        })
                    } else return React.cloneElement(child as React.ReactElement, {
                        className: index === currentIndex && "active",
                        onClick: (e: React.MouseEvent<HTMLDivElement>) => handleClick(e, index)
                    })
                })
            }
        </div>
    );
}