import React, { useState } from "react";
import Page from "../../components/Page/Page";
import { updateNickname } from "../../store/reducers/profile.reducer";
import { useDispatch, useSelector } from "react-redux";

function MyPage() {
  const storedNickname = useSelector((state) => state.profile.nickname);
  const { id, pw } = useSelector((state) => state.profile.account);
  const [nickname, setNickname] = useState(storedNickname);
  const dispatch = useDispatch();

  const handleClickUpdateNickname = () => {
    if (!nickname) {
      alert("닉네임을 입력해주세요");
      return;
    }
    dispatch(updateNickname(nickname));
  };

  return (
    <Page>
      <div className="bg-white text-black min-h-screen p-8">
        <h1 className="text-3xl font-bold mb-8">마이페이지</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">계정 정보</h2>
            <p className="mb-2">
              <strong>ID:</strong> {id}
            </p>
            <p className="mb-2">
              <strong> PW:</strong> {pw}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">닉네임 수정</h2>
            <div className="mb-4 flex gap-2">
              <input
                className="p-2 border rounded-md focus:outline-none focus:border-gray-500"
                type="text"
                placeholder="닉네임을 입력해 주세요"
                onChange={(e) => setNickname(e.target.value)}
                value={nickname}
              />

              <button
                className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 focus:outline-none"
                onClick={handleClickUpdateNickname}
              >
                닉네임 바꾸기
              </button>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}

export default MyPage;
