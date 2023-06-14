import {useEffect, useRef, useState} from "react";

const Board = ({elements, setElements}) => {
  const boardRef = useRef(null);
  const [draggedItem, setDraggedItem] = useState(null);
  const [dragOffset, setDragOffset] = useState({x: 0, y: 0});
  const [boardWidth, setBoardWidth] = useState(null)
  const [boardHeight, setBoardHeight] = useState(null)

  /*
  * вычисляет ширину и высоту внешнего дива
  * */
  useEffect(() => {
    const {width, height} = boardRef.current.getBoundingClientRect();
    setBoardWidth(width)
    setBoardHeight(height)
  }, [])

  const handleDragStart = (event, item) => {
    event.dataTransfer.setData("text/plain", JSON.stringify(item));
    setDraggedItem(item);
    /*
    * позволяет вычислить координаты верхнего левого угла, относительно положения курсора на элементе
    * */
    const {top, left} = boardRef.current.getBoundingClientRect();
    const offsetX = event.clientX - left - item.position.x;
    const offsetY = event.clientY - top - item.position.y;
    setDragOffset({x: offsetX, y: offsetY});
  };

  const handleDrag = (event, item) => {
    const {top, left} = boardRef.current.getBoundingClientRect();
    const offsetX = event.clientX - left;
    const offsetY = event.clientY - top;

    /*
    * Вычисление новой позиции с учетом смещения курсора на элементе
    * */
    const elementOffsetX = offsetX - dragOffset.x;
    const elementOffsetY = offsetY - dragOffset.y;
    /*
    * при резких движениях, координаты могут уйти в отрицательное значение
    * */
    if (elementOffsetX >= 0 && elementOffsetY >= 0) {
      /*
      * Ограничение на внешний див доски -1px так как border = 1px
      * */
      if (elementOffsetX < boardWidth - item.width - 1 && elementOffsetY < boardHeight - item.height - 1) {
        const newItems = elements.map((element) =>
          element.id === item.id ? {...element, position: {x: elementOffsetX, y: elementOffsetY}} : element
        );
        setElements(newItems);
      }
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setDraggedItem(null);
  };

  return (
    <div
      className={'board'}
      ref={boardRef} // Ссылка на внешний div
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {elements.map((item) => (
        <div
          className={'board-item'}
          key={item.id}
          style={{
            left: item.position.x,
            top: item.position.y,
            width: `${item.width}px`,
            height: `${item.height}px`,
            opacity: draggedItem === item ? 0 : 1,
          }}
          draggable="true"
          onDragStart={(event) => handleDragStart(event, item)}
          onDrag={(event) => handleDrag(event, item)}
        >
          <img className={'board-item-img'} src={item.content} alt="bord-draggable-element"/>
        </div>
      ))}
    </div>
  );
};

export default Board;
