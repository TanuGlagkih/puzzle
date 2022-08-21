// import { useDrop, useDrag } from 'react-dnd';
// import { useDispatch, useSelector } from 'react-redux';
// import { useRef } from 'react';

// import styles from './PuzzleField.module.css';

// import { Element } from '../Elements/Element';

// import { putPieceIntoField, removePiece } from '../../services/actions/puzzle';
// import { changePlace } from '../../services/actions/puzzle';

// export function PuzzleField() {
//     const dispatch = useDispatch();
//     const { picture } = useSelector(state => state.puzzle)

//     const [{ canDrop, isOver }, drop] = useDrop(() => ({
//         accept: 'puzzle',
//         drop: (item) => {
//             dispatch(putPieceIntoField(item));
//             dispatch(removePiece(item));
//         },
//         collect: (monitor) => ({
//             isOver: monitor.isOver(),
//             canDrop: monitor.canDrop(),
//         }),
//     }))

//     const isActive = canDrop && isOver
//     let border
//     if (isActive) {
//         border = '3px dashed green';
//     } else if (canDrop) {
//         border = '3px dashed green';
//     }

//     return (
//         <ul ref={drop} className={styles.field} style={{ border }}>
//             {picture ?
//                 picture.map((el, id, index) => (
//                     <PuzzleContainer el={el} key={id} id={id} index={index}/>
//                 ))
//                 : (<></>)
//             }
//         </ul>
//     )
// }

// export function PuzzleContainer({ el, key, index, id }) {
//     const dispatch = useDispatch()
//     const ref = useRef(null);
//     const [{ handlerId }, drop] = useDrop({
//         accept: 'puzzle',
//         collect(monitor) {
//             return {
//                 handlerId: monitor.getHandlerId(),
//             }
//         },
//         hover(el, monitor) {
//             if (!ref.current) {
//                 return
//             }
//             const dragIndex = el.index;
//             const hoverIndex = index;
//             if (dragIndex === hoverIndex) {
//                 return
//             }
//             const hoverBoundingRect = ref.current?.getBoundingClientRect();
//             const hoverMiddleY =
//                 (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
//             const clientOffset = monitor.getClientOffset();
//             const hoverClientY = clientOffset.y - hoverBoundingRect.top;
//             if (dragIndex && dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
//                 return
//             }
//             if (dragIndex && dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
//                 return
//             }
//             el.index = hoverIndex
//             dispatch(changePlace(dragIndex, hoverIndex));
//         },
//     })

//     const [{ opacity }, drag] = useDrag({
//         type: 'puzzle',
//         item: () => {
//             return { id, index }
//         },
//         collect: (monitor) => ({
//             opacity: monitor.isDragging() ? 0 : 1,
//         }),
//     })

//     drag(drop(ref));
//     return (
//         <div ref={ref} style={{ opacity }}>
//             <Element el={el} id={key} />
//         </div>

//     )
// }