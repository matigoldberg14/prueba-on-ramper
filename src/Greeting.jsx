import * as React from "react";
import OnramperWidget from "@onramper/widget";

export function Greeting() {
  return (
    <div
      style={{
        width: "440px",
        height: "595px",
        boxShadow: "0 2px 10px 0 rgba(0, 0, 0, 0.1)",
        borderRadius: "10px",
        margin: "auto"
      }}
    >
      <OnramperWidget
        defaultAmount={200}
        API_KEY="pk_test_ass3gtLSWQpI11IWUZLJdrfyQhj7bTw_3xwLvhEvH6Q0"
        filters={{
          onlyCryptos: ["ETH"]
        }}
      />
    </div>
  );
}
