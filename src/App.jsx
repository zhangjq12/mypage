import { useEffect, useState } from "react";
import "./App.css";
import { LayoutMain } from "./layout";
import zhCN from "antd/locale/zh_CN";
import { ConfigProvider } from "antd";
// import { Button } from "antd";
// import { PageLayout } from "./layouts";
// import { Route, BrowserRouter as Router } from "react-router";

function App() {
  const [locale, setLocale] = useState(zhCN);
  const [i18n, setI18n] = useState("zhCN");

  useEffect(() => {
    const systemLang = navigator.language;
    console.log(systemLang);
    if (systemLang.startsWith("zh")) {
      setLocale(zhCN);
      setI18n("zhCN");
    } else {
      setLocale(enUS);
      setI18n("en");
    }
  }, []);

  return (
    <ConfigProvider
      locale={locale}
      theme={{
        token: { fontFamily: '"Crimson Pro", serif', fontSize: "14px" },
      }}
    >
      <LayoutMain i18n={i18n} setI18n={setI18n} />
    </ConfigProvider>
    //   <PageLayout />
    // </RouterProvider>
  );
}

export default App;
