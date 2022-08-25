import styles from './Puzzle.module.css';
import { Element } from '../Elements/Element';
import update from 'immutability-helper';
import { pieces } from '../../images/pieces/pieces.js'
import { useCallback, useEffect, useState } from 'react';
import { useDrop } from 'react-dnd';

export function Puzzle({ mixed }) {
    const [hideSourceOnDrag, setHideSourceOnDrag] = useState(true)
    const toggle = useCallback(() =>
        setHideSourceOnDrag(!hideSourceOnDrag),
        [hideSourceOnDrag]
    )

    const [boxes, setBoxes] = useState(pieces)
    useEffect(() => {
        const mixedPieces = pieces.map(el => el ?
            {
                ...el,
                left: Math.random() * 300,
                right: Math.random() * 300
            }
            : el)
        setBoxes(mixedPieces)
    }, [mixed])

    const moveBox = useCallback(
        (id, left, top) => {
            console.log(id, left, top)
            const a = boxes.findIndex(box => box.id === id)
            console.log(a)
            setBoxes(
                update(boxes, { [a]: { $merge: { left, top } } })
            )
        },
        [boxes, setBoxes]
    )
    const [, drop] = useDrop(
        () => ({
            accept: 'puzzle',
            drop(item, monitor) {
                const delta = monitor.getDifferenceFromInitialOffset()
                const left = item.left + delta.x
                const top = item.top + delta.y
                console.log(item.id, left, top)
                moveBox(item.id, left, top)

                return undefined
            },
        }),
        [moveBox]
    )
    console.log(boxes)
    return (
        <section className={styles.box}>
            <ul className={styles.elemBox} ref={drop}>
                {boxes ?
                    boxes.map(box =>
                        <Element
                            el={box.el}
                            key={box.id}
                            id={box.id}
                            left={box.left}
                            top={box.top}
                            hideSourceOnDrag={hideSourceOnDrag}
                            onChange={toggle} />

                    ) : (
                        <></>
                    )
                }
            </ul>
        </section>
    )
}