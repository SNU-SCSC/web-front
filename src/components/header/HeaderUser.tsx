import User from "@@/User.svg";

export default function HeaderUser({
    
}: {

} & React.HTMLAttributes<HTMLButtonElement>) {
    return (
        <button id="header-user">
            <span className="name">
                정민호
            </span>
            <span className="type">
                (임원)
            </span>
            <User />
        </button>
    )
}