import React, {useState} from 'react';
import {Button} from "antd";
import {useSelector} from "react-redux";

const ObjectList = ({setElements, saveElementsWithCoords}) => {
  const objectList = useSelector(state => state.dashboard.objectList)

  const [selectedElement, setSelectedElement] = useState(null);

  const handleElementClick = (element) => {
    setSelectedElement(element);
  };

  const handleAddElement = (e) => {
    e.preventDefault()
    if (selectedElement) {
      const newElement = {
        id: `new_${Math.random().toString(36).substr(2, 9)}`,
        content: selectedElement.content,
        position: {x: 0, y: 0},
        width: selectedElement.width,
        height: selectedElement.height,
      };

      setElements((prevElements) => [...prevElements, newElement]);
    }
  };


  return (
    <div className="object-list-wrapper">
      <div className="object-list">
        <h4>Кликните, чтобы выбрать</h4>
        {objectList.map((elem) => (
          <label
            key={elem.content}
            className={`object-list-item${selectedElement?.content === elem.content ? ' selected' : ''}`}
            onClick={() => handleElementClick(elem)}
          >
            <input
              type="radio"
              name="object-radio"
              checked={selectedElement === elem}
              onChange={() => {
              }}
            />
            <img className={'board-item-img'} src={elem.content} alt="add-draggable-element"/>
          </label>
        ))}
        <Button type={'primary'} onClick={(e) => handleAddElement(e)}>
          Добавить элемент
        </Button>
        <Button type={'dashed'} onClick={saveElementsWithCoords}>
          Сохранить планировку
        </Button>
      </div>
    </div>
  );
};

export default ObjectList;
