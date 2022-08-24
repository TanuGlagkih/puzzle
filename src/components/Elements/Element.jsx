import styles from './Element.module.css';
import { useDrag } from 'react-dnd';

export function Element({ el, id, left, top, hideSourceOnDrag }) {
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: 'puzzle',
      item: { id, left, top },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [id, left, top],

  )
  if (isDragging && hideSourceOnDrag) {
    return <div ref={drag} />
  }
  console.log(id, left, top)
  return (
    <li className={styles.imageBox} ref={drag}
      style={{ left, top }} >
      <img src={el} className={styles.image} >
      </img>
    </li>

  )
}