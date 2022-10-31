import { FC, ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import Footer from "../components/footer";
import Header from "../components/header";
import RedirectOnAuthChange from "../utils/redirect-on-change";
import { Provider } from "react-redux";
import { cartStore } from "../redux/cartStore";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  //handles redirect when auth changes
  RedirectOnAuthChange();

  return (
    <>
      <Provider store={cartStore}>
        <div>
          <Toaster />
          <Header />
          {children}
          <Footer />
        </div>
      </Provider>
    </>
  );
};

export default Layout;
