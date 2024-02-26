"use client";
import "./page.css";
import AlphabetTitle from "@/components/distinct/AlphabetTitle";
import ClickButton from "@/components/interface/ClickButton";
import Textbox from "@/components/interface/Textbox";
import WidthRestrictor from "@/components/util/WidthRestrictor";
import { sendSignInRequest } from "@/services/AuthService";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function LoginPage() {
    const uniqueIdRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const router = useRouter();
    
    const sendLoginRequestHandler = async () => {
        if (!uniqueIdRef.current || !passwordRef.current) return;

        sendSignInRequest({
            unique_id: uniqueIdRef.current.value,
            password: passwordRef.current.value,
        }).then(async (response) => {
            if (response.status === 200) {
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
                <ClickButton accent className="submit-button" onClick={sendLoginRequestHandler}>로그인</ClickButton>
                <Link href="/sign-up">
                    아직 가입하지 않으셨나요?
                </Link>
            </div>
        </WidthRestrictor>
    )
}