import styles from './Element.module.css';
import { useDrop, useDrag } from 'react-dnd';
import { useDispatch } from 'react-redux';
import { useRef } from 'react';
import { changePlace } from '../../services/actions/puzzle';

export function Element({ el, id, index }) {
  console.log(el, id, index)

  const dispatch = useDispatch()
  const ref = useRef(null);
  const [{ handlerId }, drop] = useDrop({
    accept: 'puzzle',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      }
    },
    hover(el, monitor) {
      if (!ref.current) {
        return
      }
      const dragIndex = el.index;
      const hoverIndex = index;
      console.log(dragIndex)
      console.log(hoverIndex)
      if (dragIndex === hoverIndex) {
        return
      }
      
      const hoverBoundingRect = ref.current.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if (dragIndex && dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }
      if (dragIndex && dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }
      el.index = hoverIndex
      console.log(dragIndex, hoverIndex)
      dispatch(changePlace(dragIndex, hoverIndex));
    },
  })

  const [{ opacity }, drag] = useDrag({
    type: 'puzzle',
    item: () => {
      return { id, index }
    },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0 : 1,
    }),
  })

  drag(drop(ref));

  return (
    <li className={styles.imageBox} ref={ref} style={{ opacity }}>
      <img src={el.el} className={styles.image} >
      </img>
    </li>

  )
}