import React from "react";
import FooterComponent from "./components/footer/footer.component";
import HeaderComponent from "./components/header/header.component";

const HomeLayout = ({ children }: any) => {
  return (
    <div className="bg-white dark:bg-slate-800 transition-all">
      <HeaderComponent />
      <main>{children}</main>
      <FooterComponent />
    </div>
  );
};

export default HomeLayout;
