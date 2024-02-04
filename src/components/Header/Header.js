import React from "react";
import { useAuth } from "../../contexts/auth.context";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
  const { isLoggedIn, logOut } = useAuth();
  const userId = useSelector((state) => state.profile.account.id);

  return (
    <header className=" bg-black text-white p-4 flex justify-between items-center ">
      <div>
        <Link to="/" className=" text-3xl font-bold ">
          BALLANG
        </Link>
      </div>
      <nav>
        <ul className=" flex items-center space-x-4">
          {isLoggedIn ? (
            <>
              {<li>{userId}의 심장이 발랑거리다</li>}
              <li className="hover:text-gray-300">
                <Link to="/my-page">마이페이지</Link>
              </li>
              <li className="hover:text-gray-300">
                <Link to="/cart-page">장바구니</Link>
              </li>
              <li className="hover:text-gray-300">
                <Link to="/" onClick={logOut}>
                  로그아웃
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/sign-in" className="hover:text-gray-300">
                  로그인
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
