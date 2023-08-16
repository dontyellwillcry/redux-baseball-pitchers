import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";



function OnTheMound() {
      const myPitcher = useSelector((store) => store.myPitcher);



    return (
        <>
        <h2>On the Mound: {myPitcher}</h2>
        </>
    )
}

export default OnTheMound;