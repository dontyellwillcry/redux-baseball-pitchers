import { useSelector, useDispatch } from "react-redux";



function PitcherList() {
    const listOfPitchers = useSelector((store) => store.listOfPitchers);
    const dispatch = useDispatch();



    return (
        <>
        <ul>
          {listOfPitchers.map((pitcher, index) => (
            <li key={index} onClick={() => dispatch({
              type: "ADD_MOUND",
              payload: pitcher,
            })}>{pitcher}</li>
          ))}
        </ul>
        </>
    )
}



export default PitcherList