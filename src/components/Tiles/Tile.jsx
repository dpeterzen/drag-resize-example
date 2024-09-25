import React, { useState, forwardRef, useEffect, useRef } from 'react';
import Draggable from 'react-draggable';
import { Resizable } from 're-resizable';

const gridSize = 20; // Define the grid size

const Tile = forwardRef(({ id, children, onClick, zIndex, containerRef }, ref) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [size, setSize] = useState({ width: 100, height: 100 });
  const [bounds, setBounds] = useState({ left: 0, top: 0, right: 0, bottom: 0 });

  const snapToGrid = (value) => {
    return Math.round(value / gridSize) * gridSize;
  };

  const handleDrag = (e, data) => {
    setPosition({
      x: snapToGrid(data.x),
      y: snapToGrid(data.y),
    });
  };

  const handleResize = (e, direction, ref, d) => {
    setSize({
      width: snapToGrid(ref.offsetWidth),
      height: snapToGrid(ref.offsetHeight),
    });
  };

  useEffect(() => {
    if (containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      setBounds({
        left: 0,
        top: 0,
        right: containerRect.width - size.width,
        bottom: containerRect.height - size.height,
      });
    }
  }, [containerRef, size]);

  return (
    <Draggable
      position={position}
      onDrag={handleDrag}
      grid={[gridSize, gridSize]}
      handle=".drag-handle"
      bounds={bounds}
    >
      <Resizable
        size={size}
        onResizeStop={handleResize}
        grid={[gridSize, gridSize]}
        minWidth={20}
        minHeight={20}
      >
        <div ref={ref} style={{ width: '100%', height: '100%', zIndex }} onClick={onClick} className="drag-handle">
          {children}
        </div>
      </Resizable>
    </Draggable>
  );
});

Tile.displayName = 'Tile';

export default Tile;