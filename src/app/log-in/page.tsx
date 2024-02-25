import "./page.css";
import AlphabetTitle from "@/components/distinct/AlphabetTitle";
import ClickButton from "@/components/interface/ClickButton";
import Textbox from "@/components/interface/Textbox";
import WidthRestrictor from "@/components/util/WidthRestrictor";

export default function LoginPage() {
    return (
        <WidthRestrictor id="log-in-container" restrictAmount={600}>
            <AlphabetTitle id="log-in-title" subChildren="log-in.">로그인하기</AlphabetTitle>
            <div id="log-in-content">
                <div className="unique-id-field">
                    <span>유저 아이디</span>
                    <Textbox placeholder="Unique ID"/>
                </div>
                <div className="password-field">
                    <span>비밀번호</span>
                    <Textbox type="password" placeholder="Password"/>
                </div>
                <ClickButton accent className="submit-button">로그인</ClickButton>
            </div>
        </WidthRestrictor>
    )
}