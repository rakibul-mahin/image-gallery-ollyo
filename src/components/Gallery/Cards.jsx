import React from "react";
import { Draggable } from "react-beautiful-dnd";

const Cards = ({ img, id, index, isChecked, onToggleChecked }) => {
  return (
    <Draggable draggableId={id} key={id} index={index}>
      {(provided) => (
        <div
          className='border-2 border-dashed border-yellow-300 rounded-lg hover:bg-gradient-to-tl from-purple-900 to-green-700 z-40'
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <label className='cursor-pointer label'>
            <input
              type='checkbox'
              className='checkbox checkbox-info'
              checked={isChecked}
              onChange={() => onToggleChecked(id)}
            />
          </label>
          <img src={img} alt={id} />
        </div>
      )}
    </Draggable>
  );
};

export default Cards;
