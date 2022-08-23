import React from 'react';
import { useSelector } from 'react-redux';
import ButtonHome from '../components/board/ButtonHome';
import ButtonWrite from '../components/board/ButtonWrite';

function Board() {
    const uri = useSelector(state => state.uriReducer.inputData)
    return(
        <div>
            <hr />
            <nav>
                <ul>
                    <li><ButtonHome /></li>
                    {uri !== '/BoardNew' ?
                        <li><ButtonWrite /></li> :
                        <li></li>
                    }
                </ul>
            </nav>
        </div>
    );
}






export default Board;
