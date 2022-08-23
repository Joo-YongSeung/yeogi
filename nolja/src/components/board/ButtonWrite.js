import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { uriSave } from '../../modules/uriReducer';

function ButtonHome() {
    const dispatch = useDispatch();
    function onClick() {
        dispatch(uriSave('/board'))
    }
    return(
        <Link to='/board/BoardNew'>
            <div><button onClick={onClick}>
                Write
            </button></div>
        </Link>
    );
}
export default ButtonHome;