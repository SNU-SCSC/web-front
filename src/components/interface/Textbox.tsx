import "./Textbox.css";
import MultiClassName from "@/util/MultiClassName";

export type TextButtonTypes = "positive" | "negative" | "alternate";

export default function Textbox({
    className,
    positive,
    negative,
    alternate,
    type = "text",
    ...props
}: React.InputHTMLAttributes<HTMLInputElement> & Partial<Record<TextButtonTypes, boolean>>) {
    return (
        <input type={type} className={MultiClassName([
            "textbox",
            positive && "positive",
            negative && "negative",
            alternate && "alternate",
            className,
        ])} {...props}/>
    )
}