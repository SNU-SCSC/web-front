"use client";
import "./page.css";
import AlphabetTitle from "@/components/distinct/AlphabetTitle";
import ClickButton from "@/components/interface/ClickButton";
import Textbox from "@/components/interface/Textbox";
import WidthRestrictor from "@/components/util/WidthRestrictor";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function LoginPage() {
    const uniqueIdRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const router = useRouter();
    
    const sendLoginRequest = async () => {
        if (!uniqueIdRef.current || !passwordRef.current) return;

        fetch(process.env["NEXT_PUBLIC_API_URL"] + "auth/sign-in", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "accept": "application/json",
            },
            body: JSON.stringify({
                unique_id: uniqueIdRef.current.value,
                password: passwordRef.current.value,
            }),
        }).then(async (response) => {
            if (response.status === 200) {
                const token = await response.text();
                localStorage.setItem("auth-token", token);
                router.push("/");
            }
        });
    };

    return (
        <WidthRestrictor id="log-in-container" restrictAmount={600}>
            <AlphabetTitle id="log-in-title" subChildren="log-in.">로그인하기</AlphabetTitle>
            <div id="log-in-content">
                <div className="unique-id-field">
                    <span>유저 아이디</span>
                    <Textbox placeholder="Unique ID" ref={uniqueIdRef}/>
                </div>
                <div className="password-field">
                    <span>비밀번호</span>
                    <Textbox type="password" placeholder="Password" ref={passwordRef}/>
                </div>
                <ClickButton accent className="submit-button" onClick={sendLoginRequest}>로그인</ClickButton>
            </div>
        </WidthRestrictor>
    )
}