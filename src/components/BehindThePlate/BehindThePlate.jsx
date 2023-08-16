import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";



function BehindThePlate() {
      const myCatcher = useSelector((store) => store.myCatcher);



    return (
        <>
        <h2>On the Mound: {myCatcher}</h2>
        </>
    )
}

export default BehindThePlate;