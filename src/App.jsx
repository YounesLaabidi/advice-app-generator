import React from "react";
import WebFont from "webfontloader";
import Card from "./components/Card";
import Style from "./App.css";
export default function App() {
  WebFont.load({
    google: {
      families: ["Manrope"],
    },
  });
  return (
    <main className="main" style={{ fontFamily: "Manrope", fontWeight: "800" }}>
      <Card />
    </main>
  );
}
