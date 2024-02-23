import MultiClassName from "@/util/MultiClassName";
import "./ClickButton.css";

export type ClickButtonTypes = "accent" | "positive" | "negative" | "alternate";

export default function ClickButton({
    children = "Button",
    className,
    accent,
    positive,
    negative,
    alternate,
    ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & Partial<Record<ClickButtonTypes, boolean>>) {
    return (
        <button className={MultiClassName([
            "click-button",
            accent && "accent",
            positive && "positive",
            negative && "negative",
            alternate && "alternate",
            className,
        ])} {...props}>
            {children}
        </button>
    );
}