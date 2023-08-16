import { useSelector, useDispatch } from "react-redux";



function CatcherList() {
    const listOfCatchers = useSelector((store) => store.listOfCatchers);
    const dispatch = useDispatch();



    return (
        <>
        <ul>
          {listOfCatchers.map((catcher, index) => (
            <li key={index} onClick={() => dispatch({
              type: "ADD_PLATE",
              payload: catcher,
            })}>{catcher}</li>
          ))}
        </ul>
        </>
    )
}



export default CatcherList