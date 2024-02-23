import MultiClassName from "@/util/MultiClassName";
import "./ClickButton.css";

export type ClickButtonTypes = "accent" | "positive" | "negative" | "alternate";

export default function ClickButton({
    text = "Button",
    accent,
    positive,
    negative,
    alternate,
    ...props
}: {
    text?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement> & Partial<Record<ClickButtonTypes, boolean>>) {
    return (
        <button className={MultiClassName([
            "click-button",
            accent && "accent",
            positive && "positive",
            negative && "negative",
            alternate && "alternate",
        ])} {...props}>
            {text}
        </button>
    );
}