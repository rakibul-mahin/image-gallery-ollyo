import Cards from "./Cards";
import Featured from "./Featured";
import images from "../../Data/data";
import { useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { motion } from "framer-motion";

const Gallery = () => {
  const [img, setImg] = useState(images);

  const handleDragDrop = (results) => {
    const { source, destination, type } = results;
    if (!destination) {
      return;
    }
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    if (type === "group") {
      const reorderedImg = [...img];
      const sourceIndex = source.index;
      const destinationIndex = destination.index;
      const [removedImg] = reorderedImg.splice(sourceIndex, 1);
      reorderedImg.splice(destinationIndex, 0, removedImg);
      return setImg(reorderedImg);
    }
  };

  const handleToggleChecked = (id) => {
    const updatedImages = img.map((image) =>
      image.id === id ? { ...image, checked: !image.checked } : image
    );
    setImg(updatedImages);
  };

  const handleDeleteChecked = () => {
    const remainingImages = img.filter((image) => !image.checked);
    setImg(remainingImages);
  };

  const countSelectedForDeletion = img.filter((image) => image.checked).length;

  return (
    <DragDropContext onDragEnd={handleDragDrop}>
      <Droppable droppableId='ROOT' type='group'>
        {(provided) => (
          <div
            className='container mx-auto'
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            <div className='p-5 grid lg:grid-cols-5 sm:grid-cols-2 gap-2'>
              {img.map((pic, index) => {
                return index == 0 ? (
                  <Featured
                    img={pic.url}
                    id={pic.id}
                    index={index}
                    key={pic.id}
                    isChecked={pic.checked}
                    onToggleChecked={handleToggleChecked}
                  />
                ) : (
                  <Cards
                    img={pic.url}
                    id={pic.id}
                    index={index}
                    key={pic.id}
                    isChecked={pic.checked}
                    onToggleChecked={handleToggleChecked}
                  />
                );
              })}
            </div>
            {provided.placeholder}
            <div className='flex flex-col justify-center items-center m-3'>
              <p className='text-2xl'>
                Selected for deletion: {countSelectedForDeletion} image(s)
              </p>
              <motion.button
                onClick={handleDeleteChecked}
                className='btn btn-error mt-3'
                whileHover={{ rotate: "-2deg" }}
                whileTap={{ scale: 2 }}
                transition={{ duration: 0.125, ease: "easeOut" }}
              >
                Delete Images
              </motion.button>
            </div>
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Gallery;
