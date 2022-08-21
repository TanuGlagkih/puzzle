export const SET_PIECES = 'SET_PIECES';
export const PUT_PIECE_INTO_FIELD = 'PUT_PIECE_INTO_FIELD';
export const REMOVE_PIECE = 'REMOVE_PIECE';
export const CHANGE_PIECES_PLACE = 'CHANGE_PIECES_PLACE';

export function setPieses(pieces) {
    return {
        type: 'SET_PIECES',
        pieces
    }
}

export function putPieceIntoField(item) {
    return {
        type: 'PUT_PIECE_INTO_FIELD',
        item
    }
}

export function removePiece(item){
    return{
        type: 'REMOVE_PIECE',
        item
    }
}

export function changePlace(hoverIndex, dragIndex) {
    return {
        type: 'CHANGE_PIECES_PLACE',
        hoverIndex,
        dragIndex
    }
}