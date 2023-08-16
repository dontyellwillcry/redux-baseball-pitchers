import { useSelector, useDispatch } from "react-redux";





function TotalPitchers() {
    const listOfPitchers = useSelector((store) => store.listOfPitchers);

    return (
        <>
        <div>Total Pitchers: {listOfPitchers.length}</div>
        </>
    )
}


export default TotalPitchers;