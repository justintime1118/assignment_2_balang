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
    dispatch(updateNickname(nickname));
  };

  return (
    <Page>
      <h2>계정 정보</h2>
      <div>ID: {id}</div>
      <div>PW: {pw}</div>

      <h2>닉네임 수정</h2>
      <input
        type="text"
        placeholder="닉네임을 입력해 주세요"
        onChange={(e) => setNickname(e.target.value)}
        value={nickname}
      />
      <button onClick={handleClickUpdateNickname}>닉네임 바꾸기</button>
    </Page>
  );
}

export default MyPage;
