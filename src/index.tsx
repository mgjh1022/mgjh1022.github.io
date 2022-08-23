import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";

import { GlobalCss } from "./atoms";
import { AlbumModal, Layout } from "./pages";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <GlobalCss />
    <RecoilRoot>
      <Layout />
      <AlbumModal />
    </RecoilRoot>
  </React.StrictMode>
);
