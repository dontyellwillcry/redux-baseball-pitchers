import { useState } from "react";


function OnTheMound() {
      const [currentPitcher, setCurrentPitcher] = useState("Maud Nelson");


    return (
        <>
        <h2>On the Mound: {currentPitcher}</h2>
        </>
    )
}

export default OnTheMound;