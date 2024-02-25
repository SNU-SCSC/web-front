"use client";
import "./page.css";
import WidthRestrictor from "@/components/util/WidthRestrictor";
import MultiTab, { MultiTabItem } from "@/components/interface/MultiTab";
import { useState } from "react";
import AlphabetTitle from "@/components/distinct/AlphabetTitle";
import Textbox from "@/components/interface/Textbox";
import ClickButton from "@/components/interface/ClickButton";

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
    return (
        <div id="external-user-sign-up-container">
            <div className="unique-id-field">
                <span>유저 아이디</span>
                <Textbox placeholder="Unique ID"/>
            </div>
            <div className="email-field">
                <span>이메일</span>
                <Textbox placeholder="Email"/>
            </div>
            <div className="email-code-field">
                <span>이메일 인증번호</span>
                <Textbox placeholder="Code"/>
                <ClickButton alternate>인증번호 받기</ClickButton>
            </div>
            <div className="password-field">
                <span>비밀번호</span>
                <Textbox type="password" placeholder="Password"/>
            </div>
            <ClickButton accent className="submit-button">가입하기</ClickButton>
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
            </div>
        </WidthRestrictor>
    );
}