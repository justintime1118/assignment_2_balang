import React from "react";
import { useAuth } from "../../contexts/auth.context";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
  const { isLoggedIn, logOut } = useAuth();
  const userId = useSelector((state) => state.profile.account.id);

  return (
    <header>
      <Link to="/">BALLANG</Link>
      <nav>
        <ul>
          {isLoggedIn ? (
            <>
              {/*userId && */ <li>{userId}님, 안녕하세요?</li>}
              <li>
                <Link to="/my-page">마이페이지</Link>
              </li>
              <li>
                <Link to="/cart-page">장바구니</Link>
              </li>
              <li>
                <button onClick={logOut}>로그아웃</button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/sign-in">로그인</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;

/*
로그인을 했을 경우에는 Header에서, 로그인한 사용자의 아이디와 로그아웃 버튼이 보여야 합니다.
로그인을 하지 않았을 경우에는 SignInPage로 이동시켜주는 로그인하기 버튼이 보여야 합니다.
Header에는 마이페이지 링크와 장바구니페이지 링크가 있어야 합니다.
장바구니 버튼은 로그인 여부와 상관 없이 보여야 하며, 로그인을 안 했을 경우에는 SignInPage로 보냅니다.
  로그인을 했을 경우에만 장바구니에 담고, 담겼다는 alert를 띄워줍니다.
*/
