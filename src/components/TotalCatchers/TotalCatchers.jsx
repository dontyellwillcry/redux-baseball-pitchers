import { useSelector, useDispatch } from "react-redux";




function TotalCatchers() {
    const listOfCatchers = useSelector((store) => store.listOfCatchers);
    return (
        <>
        <div>Total Catchers: {listOfCatchers.length}</div>
        </>
    )
}


export default TotalCatchers;