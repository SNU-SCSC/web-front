export default function WidthRestrictor({
    restrictAmount,
    className = "",
    children,
    ...props
} : {
    restrictAmount: number,
} & React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={"width-restrictor " + className} style={
            {
                maxWidth: restrictAmount,
                marginLeft: "auto",
                marginRight: "auto"
            }
        } {...props}>
            {children}
        </div>
    );
}