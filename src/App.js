import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout/DefaultLayout";
import HomePage from "./pages/HomePage/HomePage";
import ProductDetailPage from "./pages/ProductDetailPage/ProductDetailPage";
import SignInPage from "./pages/SignInPage/SignInPage";
import MyPage from "./pages/MyPage/MyPage";
import CartPage from "./pages/CartPage/CartPage";
import { AuthProvider } from "./contexts/auth.context";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <AuthProvider>
      <Provider store={store}>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/my-page" element={<MyPage />} />
            <Route path="/cart-page" element={<CartPage />} />
          </Route>
        </Routes>
      </Provider>
    </AuthProvider>
  );
}

export default App;
