import { request } from "./Api"; 
import { getRecommendlist, getRecommend, registRecommend, modifyRecommend, deleteRecommend } from "../modules/RecommendModule";

export function callGetRecommendListAPICalls() {
    
    console.log('getRecommendlist api calls...');
    
    /* redux-thunk(미들 웨어)를 이용한 비동기 처리 */
    return async (dispatch, getState) => {
        
        /* Api의 axios 처리 참조  */
        const result = await request('GET', '/recommend');
        console.log('getRecommendlist result : ', result);
        
        /* action 생성 함수에 결과 전달하며 dispatch 호출 */
        dispatch(getRecommendlist(result));
    }
}

export function callGetRecommendAPI(id) {
    
    console.log('getRecommend api calls...');

    return async (dispatch, getState) => {
    
        const result = await request('GET', `/recommend/${id}`);
        console.log('getRecommend result : ', result);
    
        dispatch(getRecommend(result));
    }
}

export function callRegistRecommendAPI(recommend) {
    
    console.log('registRecommend api calls...');

    return async (dispatch, getState) => {
    
        const result = await request('POST', '/recommend/', recommend);
        console.log('registRecommend result : ', result);
    
        dispatch(registRecommend(result));
    }
}

export function callModifyRecommendAPI(recommend) {
    
    console.log('modifyRecommend api calls...');

    return async (dispatch, getState) => {
    
        const result = await request('PUT', `/recommend/${recommend.id}`, recommend);
        console.log('registRecommend result : ', result);
    
        dispatch(modifyRecommend(result));
    }
}

export function callDeleteRecommendAPI(id) {
    
    console.log('deleteRecommend api calls...');

    return async (dispatch, getState) => {
    
        const result = await request('DELETE', `/recommend/${id}`);
        console.log('deleteRecommend result : ', result);
    
        dispatch(deleteRecommend(result));
    }
}
