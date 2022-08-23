import { createActions, handleActions } from 'redux-actions';

const initialState = {};

const GET_BOARDLIST = 'board/GET_BOARDLIST';
const GET_BOARD = 'board/GET_BOARD';
const REGIST_BOARD = 'board/REGIST_BOARD';
const MODIFY_BOARD = 'board/MODIFY_BOARD';
const DELETE_BOARD = 'board/DELETE_BOARD';

export const { board : { getBoardlist, getBoard, registBoard, modifyBoard, deleteBoard }} = createActions({
    [GET_BOARDLIST]: (res) => ({boardlist : res}),
    [GET_BOARD]: (res) => ({board : res}),
    [REGIST_BOARD]: (res) => ({regist : res}),
    [MODIFY_BOARD]: (res) => ({modify : res}),
    [DELETE_BOARD]: (res) => ({delete : res})
});

const boardReducer = handleActions(
    {
        [GET_BOARDLIST]: (state, { payload }) => {
            return payload;
        },
        [GET_BOARD]: (state, {payload}) => {
            return payload;
        },
        [REGIST_BOARD]: (state, {payload}) => {
            return payload;
        },
        [MODIFY_BOARD]: (state, {payload}) => {
            return payload;
        },
        [DELETE_BOARD]: (state, {payload}) => {
            return payload;
        }
    },
    initialState
);

export default boardReducer;