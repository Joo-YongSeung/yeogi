import { createActions, handleActions } from 'redux-actions';

const initialState = {};

const GET_RECOMMENDLIST = 'recommend/GET_RECOMMENDLIST';
const GET_RECOMMEND = 'recommend/GET_RECOMMEND';
const REGIST_RECOMMEND = 'recommend/REGIST_RECOMMEND';
const MODIFY_RECOMMEND = 'recommend/MODIFY_RECOMMEND';
const DELETE_RECOMMEND = 'recommend/DELETE_RECOMMEND';

export const { recommend : { getRecommendlist, getRecommend, registRecommend, modifyRecommend, deleteRecommend }} = createActions({
    [GET_RECOMMENDLIST]: (res) => ({recommendlist : res}),
    [GET_RECOMMEND]: (res) => ({recommend : res}),
    [REGIST_RECOMMEND]: (res) => ({regist : res}),
    [MODIFY_RECOMMEND]: (res) => ({modify : res}),
    [DELETE_RECOMMEND]: (res) => ({delete : res})
});

const recommendReducer = handleActions(
    {
        [GET_RECOMMENDLIST]: (state, { payload }) => {
            return payload;
        },
        [GET_RECOMMEND]: (state, {payload}) => {
            return payload;
        },
        [REGIST_RECOMMEND]: (state, {payload}) => {
            return payload;
        },
        [MODIFY_RECOMMEND]: (state, {payload}) => {
            return payload;
        },
        [DELETE_RECOMMEND]: (state, {payload}) => {
            return payload;
        }
    },
    initialState
);

export default recommendReducer;