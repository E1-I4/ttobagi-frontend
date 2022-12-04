import React from 'react';
import { useDraggable } from '@dnd-kit/core';

export function TrashContainer(props) {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: "trash-container",
    });
    const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        'touch-action': 'manipulation',
    } : undefined;


    return (
        <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
            {props.children}
        </div>
    );
}