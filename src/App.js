import React, {useState} from "react";
import StreamerName from "./ui/molecules/StreamerName";
import Icon from "./ui/atoms/Icon";


export default function App() {



  return (
    <div className="App">
      <StreamerName
        text="Ponce"
        type="primary"
        iconRight="certification"
      ></StreamerName>
      <Icon color="#9146FF"></Icon>
    </div>
	);
}
