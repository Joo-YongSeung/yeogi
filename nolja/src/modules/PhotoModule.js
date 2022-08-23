import { createActions, handleActions } from "redux-actions";

const initialState = {};

const GET_PHOTOLIST = 'photo/GET_PHOTOLIST';
const GET_PHOTO= 'photo/GET_PHOTO';
const REGIST_PHOTO  = 'photo/REGIST_PHOTO ';
const MODIFY_PHOTO  = 'photo/MODIFY_PHOTO ';
const DELETE_PHOTO  = 'photo/DELETE_PHOTO ';

export const { photo : { getPhotolist, getPhoto, registPhoto, modifyPhoto, deletePhoto}} = createActions({
    [GET_PHOTOLIST] : (res) =>({ photolist : res}),
    [GET_PHOTO] : (res) =>({ photo : res}),
    [REGIST_PHOTO] : (res) =>({ regist : res}),
    [MODIFY_PHOTO] : (res) =>({ modify : res}), 
    [DELETE_PHOTO] : (res) =>({ delete: res }),
});

const photokeyReducer = handleActions({
    [GET_PHOTOLIST] : (state, { payload }) => {
        return payload;
    },
    [GET_PHOTO] : (state, { payload }) => {
        return payload;
    },
    [REGIST_PHOTO] : (state, { payload }) => {
        return payload;
    },
    [MODIFY_PHOTO] : (state, { payload }) => {
        return payload;
    },
    [DELETE_PHOTO] : (state, { payload }) => {
        return payload;
    }  
},
initialState
);

export default photokeyReducer;

