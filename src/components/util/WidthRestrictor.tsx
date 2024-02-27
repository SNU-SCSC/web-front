import MultiClassName from "@/util/MultiClassName"
import MultiStyles from "@/util/MultiStyles";

export type WidthRestrictorProps = {
    restrictAmount: number,
} & React.HTMLAttributes<HTMLDivElement>;

export default function WidthRestrictor({
    restrictAmount,
    className = "",
    style,
    children,
    ...props
}: WidthRestrictorProps) {
    return (
        <div className={MultiClassName([
            "width-restrictor",
            className
        ])} style={MultiStyles([
            {
                maxWidth: restrictAmount,
                marginLeft: "auto",
                marginRight: "auto"
            },
            style
        ])} {...props}>
            {children}
        </div>
    );
}