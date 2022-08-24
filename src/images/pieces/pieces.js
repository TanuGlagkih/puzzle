import { v4 as uuidv4 } from 'uuid';

import el_1 from './1.jpg'
import el_2 from './2.jpg'
import el_3 from './3.jpg'
import el_4 from './4.jpg'
import el_5 from './5.jpg'
import el_6 from './6.jpg'
import el_7 from './7.jpg'
import el_8 from './8.jpg'
import el_9 from './9.jpg'
import el_10 from './10.jpg'
import el_11 from './11.jpg'
import el_12 from './12.jpg'
import el_13 from './13.jpg'
import el_14 from './14.jpg'
import el_15 from './15.jpg'
import el_16 from './16.jpg'

export const pieces = []

function createImg(el) {
    return {
        el: el,
        id: uuidv4(),
        left: Math.random() * 300,
        top: Math.random() * 300
    }
}

pieces.push(createImg(el_1))
pieces.push(createImg(el_2))
pieces.push(createImg(el_3))
pieces.push(createImg(el_4))
pieces.push(createImg(el_5))
pieces.push(createImg(el_6))
pieces.push(createImg(el_7))
pieces.push(createImg(el_8))
pieces.push(createImg(el_9))
pieces.push(createImg(el_10))
pieces.push(createImg(el_11))
pieces.push(createImg(el_12))
pieces.push(createImg(el_13))
pieces.push(createImg(el_14))
pieces.push(createImg(el_15))
pieces.push(createImg(el_16))


