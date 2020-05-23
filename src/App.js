import React from "react";
import Badge, { colors } from "./ui/atoms/Badge";
import StreamerName from "./ui/molecules/StreamerName";

export default function App() {
      return (
            <div className="App">
                <StreamerName text={"Ponce"} certified={true} />
            </div>
      );
}
