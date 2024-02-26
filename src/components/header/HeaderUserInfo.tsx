"use client";

export default function HeaderUserInfo(){
    return (
        !!localStorage.getItem("auth-token") ?
        <div id="header-user-info">
            <span className="name">
                정민호
            </span>
            <span className="user-type">
                (임원)
            </span>
        </div>
        :
        <div id="header-user-info">
            <span className="name">
                로그인
            </span>
        </div>
    )
}
