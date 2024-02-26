"use client";
import "./page.css";
import WidthRestrictor from "@/components/util/WidthRestrictor";
import MultiTab, { MultiTabItem } from "@/components/interface/MultiTab";
import { useRef, useState } from "react";
import AlphabetTitle from "@/components/distinct/AlphabetTitle";
import Textbox from "@/components/interface/Textbox";
import ClickButton from "@/components/interface/ClickButton";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { sendEmailVerificationRequest, sendSignInRequest, sendSignUpRequest } from "@/services/AuthService";

 // Multitab navigation

function ClubUserSignUp() {
    return (
        <div>
            동아리 부원 가입은 자동화되어 있습니다. <br/>
            로그인 시 어려움이 있는 경우, 관리자(scsc@snu.ac.kr)에게 문의해주세요.
        </div>
    );
}

function ExternalUserSignUp() {
    const uniqueIdRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const emailCodeRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const router = useRouter();

    const sendEmailVerificationRequestHandler = async () => {
        if (!emailRef.current) return;

        sendEmailVerificationRequest({
            email: emailRef.current.value,
        });
    };

    const sendSignUpRequestHandler = async () => {
        if (!uniqueIdRef.current || !emailRef.current || !emailCodeRef.current || !passwordRef.current) return;

        sendSignUpRequest({
            unique_id: uniqueIdRef.current.value,
            email: emailRef.current.value,
            email_verification_key: emailCodeRef.current.value,
            password: passwordRef.current.value,
        }).then(async (response) => {
            if (response.status === 200) {
                if (!uniqueIdRef.current || !passwordRef.current) return;

                sendSignInRequest({
                    unique_id: uniqueIdRef.current.value,
                    password: passwordRef.current.value,
                }).then(async (response) => {
                    if (response.status === 200) {
                        router.push("/");
                    }
                });
            }
        });
    };

    return (
        <div id="external-user-sign-up-container">
            <div className="unique-id-field">
                <span>유저 아이디</span>
                <Textbox ref={uniqueIdRef} placeholder="Unique ID"/>
            </div>
            <div className="email-field">
                <span>이메일</span>
                <Textbox ref={emailRef} placeholder="Email"/>
            </div>
            <div className="email-code-field">
                <span>이메일 인증번호</span>
                <Textbox ref={emailCodeRef} placeholder="Code"/>
                <ClickButton alternate onClick={sendEmailVerificationRequestHandler}>인증번호 받기</ClickButton>
            </div>
            <div className="password-field">
                <span>비밀번호</span>
                <Textbox ref={passwordRef} type="password" placeholder="Password"/>
            </div>
            <ClickButton accent className="submit-button" onClick={sendSignUpRequestHandler}>가입하기</ClickButton>
        </div>
    );
}

export default function SignUpPage() {
    let [currentIndex, setCurrentIndex] = useState(0);

    return (
        <WidthRestrictor id="sign-up-container" restrictAmount={600}>
            <AlphabetTitle id="sign-up-title" subChildren="sign-up.">가입하기</AlphabetTitle>
            <MultiTab onStateChange={(s: number) => setCurrentIndex(s)}>
                <MultiTabItem>
                    동아리 부원 가입
                </MultiTabItem>
                <MultiTabItem>
                    외부인 가입
                </MultiTabItem>
            </MultiTab>
            <div id="sign-up-content">
                {
                    currentIndex === 0 ? <ClubUserSignUp /> : <ExternalUserSignUp />
                }
                <Link href="/log-in">
                    이미 가입하셨나요?
                </Link>
            </div>
        </WidthRestrictor>
    );
}