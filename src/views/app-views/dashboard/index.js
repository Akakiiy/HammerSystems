import './dashboard.css'
import React, {useState} from 'react';
import Board from './Board';
import ObjectList from "./ObjectList";
import {useDispatch, useSelector} from "react-redux";
import {saveElementsDashboard} from "../../../redux/actions/Dashboard";

const Dashboard = () => {
  const dispatch = useDispatch();
  const savedElements = useSelector(state => state.dashboard.elements)

  const [elements, setElements] = useState(savedElements)
  const [showElements, setShowElements] = useState(false);

  const saveElementsWithCoords = () => {
    dispatch(saveElementsDashboard(elements))
    setShowElements(true);
    setTimeout(() => {
      setShowElements(false);
    }, 5000)
  };

  return (
    <div className={'dashboard-wrapper'}>
      <h1>Dashboard</h1>
      <div className={'dashboard'}>
        <ObjectList setElements={setElements}
                    saveElementsWithCoords={saveElementsWithCoords}/>
        <Board elements={elements}
               setElements={setElements}/>
      </div>
      <div>
        {showElements && (
          <div>
            <h2>Планировка сохранена:</h2>
            <pre>{JSON.stringify(elements, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
