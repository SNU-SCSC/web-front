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
export type MultiTabItemColor = keyof typeof MultiTabItemColors;
export type MultiTabItemProps = {
    colorType?: MultiTabItemColor,
} & React.ButtonHTMLAttributes<HTMLButtonElement> & Partial<Record<MultiTabItemColor, boolean>>;

export function MultiTabItem({
    children,
    className,
    style,
    colorType = "accent",
    onClick,
    ...props
}: MultiTabItemProps) {
    let ref = useRef<HTMLButtonElement>(null);

    return (
        <button className={MultiClassName([
            "multi-tab-item",
            className
        ])} style={MultiStyles([
            style,
            {
                "--multi-tab-item-color": MultiTabItemColors[colorType],
                "--multi-tab-item-color-sub": MultiTabItemColorSubs[colorType]
            } as React.CSSProperties
        ])} onClick={ (e) => {
            ref.current?.blur();
            onClick && onClick(e);
        }} ref={ref} {...props}>
            {children}
        </button>
    );

}

export type MultiTabProps = {
    onStateChange?: any,
    items: React.ReactNode,
} & React.HTMLAttributes<HTMLDivElement>

export default function MultiTab({
    children,
    items,
    className,
    onStateChange,
    ...props
}: MultiTabProps) {
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