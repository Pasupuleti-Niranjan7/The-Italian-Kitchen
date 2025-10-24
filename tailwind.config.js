// import { Config as tailwindConfig } from "tailwindcss/plugin";
import { Config } from "tailwindcss/plugin";

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "sm": { max: "640px" },
        "ms" : {max: "544px"}
      },
    },
  },
};
