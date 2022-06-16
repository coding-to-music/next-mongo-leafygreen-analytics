import { css } from "@emotion/react";
import { uiColors } from "@leafygreen-ui/palette";

const CDN = "https://d2va9gm4j17fy9.cloudfront.net";
const fontsURL = `${CDN}/fonts`;

export const globalStyles = css`
  @font-face {
    font-family: "Akzidenz";
    font-weight: normal;
    src: url("${fontsURL}/akzidgrostdreg.eot");
    /* IE9 Compat Modes */
    src: url("${fontsURL}/akzidgrostdreg.eot?#iefix")
        format("embedded-opentype"),
      /* Pretty Modern Browsers */ url("${fontsURL}/akzidgrostdreg.ttf")
        format("truetype"),
      /* Safari, Android, iOS */ url("${fontsURL}/akzidgrostdreg.svg#Akzidenz")
        format("svg");
    /* Legacy iOS */
  }
  @font-face {
    font-family: "Akzidenz";
    font-weight: 600;
    src: url("${fontsURL}/akzidgrostdmed.eot");
    /* IE9 Compat Modes */
    src: url("${fontsURL}/akzidgrostdmed.eot?#iefix")
        format("embedded-opentype"),
      /* IE6-IE8 */ url("${fontsURL}/akzidgrostdmed.woff") format("woff"),
      /* Pretty Modern Browsers */ url("${fontsURL}/akzidgrostdmed.ttf")
        format("truetype"),
      /* Safari, Android, iOS */ url("${fontsURL}/akzidgrostdmed.svg#Akzidenz")
        format("svg");
    /* Legacy iOS */
  }
  @font-face {
    font-family: "Akzidenz";
    font-weight: bold;
    src: url("${fontsURL}/akzidgrostdmed.eot");
    /* IE9 Compat Modes */
    src: url("${fontsURL}/akzidgrostdmed.eot?#iefix")
        format("embedded-opentype"),
      /* IE6-IE8 */ url("${fontsURL}/akzidgrostdmed.woff") format("woff"),
      /* Pretty Modern Browsers */ url("${fontsURL}/akzidgrostdmed.ttf")
        format("truetype"),
      /* Safari, Android, iOS */ url("${fontsURL}/akzidgrostdmed.svg#Akzidenz")
        format("svg");
    /* Legacy iOS */
  }
  html {
    font-family: "Akzidenz", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: normal;
    font-style: normal;
  }
  body {
    margin: 0;
    background-color: ${uiColors.gray.dark3};
  }
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
`;
