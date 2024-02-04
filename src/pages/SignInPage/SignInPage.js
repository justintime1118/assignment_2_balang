import React, { useState } from "react";
import Page from "../../components/Page/Page";
import { useAuth } from "../../contexts/auth.context";
import HomePage from "../HomePage/HomePage";

function SignInPage() {
  const { isLoggedIn, signIn } = useAuth();
  const [id, setId] = useState("justin");
  const [pw, setPw] = useState("justin");

  const handleClickSignIn = () => {
    if (!id || !pw) return alert("아이디 또는 비밀번호를 입력해 주세요");

    if (id === "justin" && pw === "justin") {
      signIn(id);
    } else {
      return alert("아이디 또는 비밀번호가 잘못되었습니다.");
    }
  };

  return (
    <Page>
      {isLoggedIn ? (
        <HomePage />
      ) : (
        <div className="h-screen flex justify-center">
          <form
            className="bg-white p-8 rounded shadow-md w-96 mt-10"
            onSubmit={(e) => e.preventDefault()}
          >
            <h2 className="text-2xl font-bold mb-6 text-gray-900">로그인</h2>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="id"
              >
                ID
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-none focus:border-gray-500"
                id="id"
                name="id"
                type="text"
                value={id}
                onChange={(e) => setId(e.target.value)}
                placeholder="아이디를 입력해 주세요"
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="pw"
              >
                PW
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-none focus:border-gray-500"
                type="password"
                id="pw"
                name="pw"
                value={pw}
                onChange={(e) => setPw(e.target.value)}
                placeholder="비밀번호를 입력해 주세요"
              />
            </div>

            <button
              className="w-full bg-gray-900 text-white py-2 rounded-md hover:bg-gray-800 focus:outline-none"
              onClick={handleClickSignIn}
            >
              로그인
            </button>
          </form>
        </div>
      )}
    </Page>
  );
}

export default SignInPage;
