import { forwardRef } from "react";
import "./Textbox.css";
import MultiClassName from "@/util/MultiClassName";

export type TextButtonTypes = "positive" | "negative" | "alternate";
export type TextboxPropType = React.InputHTMLAttributes<HTMLInputElement> & Partial<Record<TextButtonTypes, boolean>>;

const Textbox = forwardRef<HTMLInputElement, TextboxPropType>(({
    className,
    positive,
    negative,
    alternate,
    type = "text",
    ...props
}: TextboxPropType, ref) => {
    return (
        <input type={type} className={MultiClassName([
            "textbox",
            positive && "positive",
            negative && "negative",
            alternate && "alternate",
            className,
        ])} ref={ref} {...props}/>
    )
});

export default Textbox;