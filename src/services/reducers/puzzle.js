import {
    CHANGE_PIECES_PLACE,
    PUT_PIECE_INTO_FIELD,
    REMOVE_PIECE,
    SET_PIECES
} from "../actions/puzzle"

const initialPuzzleState = {
    pieces: [],
    picture: []
}

export const puzzleReducer = (state = initialPuzzleState, action) => {
    switch (action.type) {
        case SET_PIECES: {
            return {
                ...state,
                pieces: action.pieces
            }
        }

        case PUT_PIECE_INTO_FIELD: {
            return {
                ...state,
                picture: state.picture.concat(action.item)
            }
        }

        case REMOVE_PIECE: {
            return {
                ...state,
                pieces: [...state.pieces].filter(piece => piece.id !== action.item.id)
            }
        }

        case CHANGE_PIECES_PLACE: {
            const pieces = [...state.pieces];
            pieces.splice(action.hoverIndex, 0, pieces.splice(action.dragIndex, 1)[0]);
            return {
                ...state,
                pieces: pieces
            }
        }
        default: {
            return state
        }
    }
}
