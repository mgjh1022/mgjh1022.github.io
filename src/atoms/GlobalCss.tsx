import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import emotionReset from "emotion-reset";
import { Global, css } from "@emotion/react";

export const GlobalCss: React.FC = () => (
  <Global
    styles={css`
      ${emotionReset}

      @font-face {
        font-family: "SeoulHangangM";
        src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/SeoulHangangM.woff")
          format("woff");
        font-weight: normal;
        font-style: normal;
      }

      html,
      body {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        overflow: hidden;
        background-color: #4d4d4d;

        #inner {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100%;
          height: 100%;
          transform: translate(-50%, -50%);
          background-color: #fff;
          box-shadow: 7px 7px 10px 5px #00000033;

          @media only screen and (min-width: 510px) {
            max-width: 390px;
            max-height: 800px;
          }
        }

        #root {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
        }

        .slick-slider,
        .slick-list,
        .slick-track,
        .slick-slide,
        .slick-slide > div {
          width: 100%;
          height: 100%;
        }
      }

      .ReactModal__Overlay {
        opacity: 0;
        transition: opacity 200ms ease-in-out;
      }

      .ReactModal__Overlay--after-open {
        opacity: 1;
      }

      .ReactModal__Overlay--before-close {
        opacity: 0;
      }

      *,
      *::after,
      *::before {
        box-sizing: border-box;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        font-smoothing: antialiased;
      }
    `}
  />
);
