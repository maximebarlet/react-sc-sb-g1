import React, {useState} from "react";
import Badge, { colors } from "./ui/atoms/Badge";


export default function App() {



  return (
    <div className="App">
			<div className="container">
				<Badge text="Ponce" color={colors.purple}/>
				
			</div>
     	{/* <Badge text="Designer" color={colors.grey}/> */}
    </div>
	);
}
