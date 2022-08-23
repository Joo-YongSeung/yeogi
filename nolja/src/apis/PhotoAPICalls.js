import { request } from "./Api";
import {getPhotolist, getPhoto, registPhoto, modifyPhoto, deletePhoto} from "../modules/PhotoModule";

export function callGetPhotoListAPI(){
   

    return async (dispatch, getState ) => {

        const result = await request('GET', '/photokey');
        dispatch(getPhotolist(result));
    }
}


export function callGetPhotoAPI(id){

    return async (dispatch, getState ) => {

        const result = await request('GET', `/photokey/${id}`);
        dispatch(getPhoto(result));
    }
}

export function callRegistPhotoAPI(photo){

    return async (dispatch, getState ) => {

        const result = await request('POST', '/photokey/', photo);
        dispatch(registPhoto(result));
    }
}

export function callModifyPhotoAPI(photo){

    return async (dispatch, getState ) => {

        const result = await request('PUT', `/photokey/${photo.id}`, photo);
        dispatch(modifyPhoto(result));
    }
}

export function callDeletePhotoAPI(id){

    return async (dispatch, getState ) => {

        const result = await request('DELETE', `/photokey/${id}`);
        dispatch(deletePhoto(result));
    }
}



