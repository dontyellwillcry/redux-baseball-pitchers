import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TotalPitchers from "../TotalPitchers/TotalPitchers";
import TotalCatchers from "../TotalCatchers/TotalCatchers";
import PitcherForm from "../PitcherForm/PitcherForm";
import CatcherForm from "../CatcherForm/CatcherForm";

function App() {
  const [currentPitcher, setCurrentPitcher] = useState("Maud Nelson");
  const [currentCatcher, setCurrentCatcher] = useState("Elston Howard");

  // const [pitcherList, setPitcherList] = useState(['Maud Nelson', 'Ila Borders', 'Don Newcombe', 'CC Sabathia']);
  // const [catcherList, setCatcherList] = useState(['Roy Campanella', 'Elston Howard', 'Kenji Jojima']);

  const listOfPitchers = useSelector((store) => store.listOfPitchers);

  const listOfCatchers = useSelector((store) => store.listOfCatchers);

  const dispatch = useDispatch();

  

  
  


  return (
    <div>
      <h1>Redux Baseball Pitchers</h1>
      <h2>On the Mound: {currentPitcher}</h2>
      <h2>Behind the Plate: {currentCatcher}</h2>
      <TotalPitchers/>
      <TotalCatchers/>
      <h3>All Pitchers</h3>
      
      <PitcherForm/>
      <ul>
        {listOfPitchers.map((pitcher) => (
          <li onClick={() => setCurrentPitcher(pitcher)}>{pitcher}</li>
        ))}
      </ul>
      <h3>All Catchers</h3>
      
      <CatcherForm/>
      <ul>
        {listOfCatchers.map((catcher) => (
          <li onClick={() => setCurrentCatcher(catcher)}>{catcher}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
