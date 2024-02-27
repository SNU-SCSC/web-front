"use client";

import React, { useRef } from "react";
import "./MultiTab.css";
import MultiClassName from "@/util/MultiClassName";
import MultiStyles from "@/util/MultiStyles";

export const MultiTabItemColors = {
    "accent": "var(--accent)",
    "positive": "var(--positive)",
    "negative": "var(--negative)",
    "alternate": "var(--alternate)"
}
export const MultiTabItemColorSubs = {
    "accent": "var(--accent-sub)",
    "positive": "var(--positive-sub)",
    "negative": "var(--negative-sub)",
    "alternate": "var(--alternate-sub)"
}
export type MultiTabItemColorTypes = keyof typeof MultiTabItemColors;

export function MultiTabItem({
    children,
    className,
    style,
    styleType = "accent",
    onClick,
    ...props
}: {
    styleType?: MultiTabItemColorTypes,
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
    let ref = useRef<HTMLButtonElement>(null);

    return (
        <button className={MultiClassName([
            "multi-tab-item",
            className
        ])} style={MultiStyles([
            style,
            {
                "--multi-tab-item-color": MultiTabItemColors[styleType],
                "--multi-tab-item-color-sub": MultiTabItemColorSubs[styleType]
            } as React.CSSProperties
        ])} onClick={ (e) => {
            ref.current?.blur();
            onClick && onClick(e);
        }} ref={ref} {...props}>
            {children}
        </button>
    );

}

export default function MultiTab({
    children,
    items,
    className,
    onStateChange,
    ...props
}: {
    onStateChange?: any,
    items: React.ReactNode,
} & React.HTMLAttributes<HTMLDivElement>) {
    let childrenArray = React.Children.toArray(items);
    let [currentIndex, setCurrentIndex] = React.useState(0);

    function handleClick(_: React.MouseEvent<HTMLDivElement>, index: number) {
        onStateChange && onStateChange(index);
        setCurrentIndex(index);
    }

    return (
        <div className={MultiClassName([
            "multi-tab",
            className
        ])} {...props} >
            <div className="multi-tab-items">
                {
                    childrenArray.map((child, index) => {
                        return React.cloneElement(child as React.ReactElement, {
                            className: index === currentIndex && "active",
                            onClick: (e: React.MouseEvent<HTMLDivElement>) => handleClick(e, index)
                        })
                    })
                }
            </div>
            <div className="multi-tab-content">
                {children}
            </div>
        </div>
    );
}