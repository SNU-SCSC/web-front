"use client";
import { forwardRef } from "react";
import "./TextInput.css";
import MultiClassName from "@/util/MultiClassName";
import MultiStyles from "@/util/MultiStyles";

export const TextInputColors = {
    "accent": "var(--accent)",
    "positive": "var(--positive)",
    "negative": "var(--negative)",
    "alternate": "var(--alternate)"
}
export const TextInputColorSubs = {
    "accent": "var(--accent-sub)",
    "positive": "var(--positive-sub)",
    "negative": "var(--negative-sub)",
    "alternate": "var(--alternate-sub)"
}
export type TextInputColor = keyof typeof TextInputColors;

export type TextInputProps = {
    colorType?: TextInputColor,
} & React.InputHTMLAttributes<HTMLInputElement> & Partial<Record<TextInputColor, boolean>>

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(({
    className,
    style,
    colorType = "accent",
    type = "text",
    ...props
}: TextInputProps, ref) => {
    return (
        <input type={type} className={MultiClassName([
            "text-input",
            className,
        ])} style={MultiStyles([
            {
                "--text-input-color": TextInputColors[colorType],
                "--text-input-color-sub": TextInputColorSubs[colorType]
            } as React.CSSProperties,
            style
        ])} ref={ref} {...props}/>
    )
});

export default TextInput;