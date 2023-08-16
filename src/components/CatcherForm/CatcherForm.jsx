import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";



function CatcherForm() {
    const dispatch = useDispatch();
    const [newCatcher, setNewCatcher] = useState("");


    const handleCatcherSubmit = (event) => {
        event.preventDefault();
        // spread: give me everything in pitcherList, then add this new thing
        dispatch({
          type: "ADD_CATCHER",
          payload: newCatcher,
        });
        setNewCatcher("");
      };
      const handleCatcherNameChange = (event) => {
        setNewCatcher(event.target.value);
      };

    return (
        <>
        <form onSubmit={handleCatcherSubmit}>
        <input
          type="text"
          value={newCatcher}
          onChange={handleCatcherNameChange}
          placeholder="New Pitcher Name"
        />
        <button type="submit">Add Catcher</button>
      </form>
        </>
    )
}



export default CatcherForm;
