import "./Header.css";

export default function HeaderItem({
    accentText,
    normalText,
    className = "",
    ...props
}: {
    accentText: string,
    normalText: string,
} & React.HTMLAttributes<HTMLButtonElement>) {
    return (
        <button className={"header-item " + className} {...props}>
            <span className="accent">
                { accentText }
            </span>
            <span className="normal">
                { normalText }
            </span>
        </button>
    );
}