import React, { useState } from "react";
import Page from "../../components/Page/Page";
import { useAuth } from "../../contexts/auth.context";

function SignInPage() {
  const { isLoggedIn, signIn } = useAuth();
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const handleClickSignIn = () => {
    if (!id || !pw) return alert("아이디 또는 비밀번호를 입력해 주세요");

    if (id === "u" && pw === "u") {
      signIn();
    } else {
      return alert("아이디 또는 비밀번호가 잘못되었습니다.");
    }
  };

  return (
    <Page>
      {isLoggedIn ? (
        <div>로그인 성공</div>
      ) : (
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="아이디를 입력해 주세요"
          />

          <input
            type="password"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
            placeholder="비밀번호를 입력해 주세요"
          />

          <button onClick={handleClickSignIn}>로그인하기</button>
        </form>
      )}
    </Page>
  );
}

export default SignInPage;
