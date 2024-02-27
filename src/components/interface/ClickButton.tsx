"use client";
import MultiClassName from "@/util/MultiClassName";
import "./ClickButton.css";
import MultiStyles from "@/util/MultiStyles";
import { useRef } from "react";

export const ClickButtonColors = {
    "normal": "var(--normal)",
    "accent": "var(--accent)",
    "positive": "var(--positive)",
    "negative": "var(--negative)",
    "alternate": "var(--alternate)"
}

export const ClickButtonColorSubs = {
    "normal": "var(--normal-sub)",
    "accent": "var(--accent-sub)",
    "positive": "var(--positive-sub)",
    "negative": "var(--negative-sub)",
    "alternate": "var(--alternate-sub)"
}

export type ClickButtonColorTypes = keyof typeof ClickButtonColors;

export type ClickButtonProps = {
    colorType?: ClickButtonColorTypes,
} & React.ButtonHTMLAttributes<HTMLButtonElement> & Partial<Record<ClickButtonColorTypes, boolean>>;

export default function ClickButton({
    children = "Button",
    className,
    style,
    colorType = "accent",
    onClick,
    ...props
}: ClickButtonProps) {
    let ref = useRef<HTMLButtonElement>(null);

    return (
        <button className={MultiClassName([
            "click-button",
            className,
        ])} style={MultiStyles([
            style,
            {
                "--click-button-color": ClickButtonColors[colorType],
                "--click-button-color-sub": ClickButtonColorSubs[colorType]
            } as React.CSSProperties
        ])} onClick={ (...args) => {
            ref.current?.blur();
            onClick && onClick(...args);
        }} ref={ref} {...props}>
            {children}
        </button>
    );
}