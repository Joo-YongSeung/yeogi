import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { callRegistBoardAPI } from '../../apis/BoardAPICalls';

function BoardNew() {

    const result = useSelector(state => state.boardReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [registBoard, setRegistBoard] = useState(
        {
            id: 0,
            title: '',
            detail : {
                description : ''
            }
        }
    );

    const onChangeHandler = (e) => {
        let title = e.target.name;
        let value = e.target.value;

        switch(title) {
        case 'description' :
            title = 'detail';
            value = {
                description : value
            };
            break;
        }

        setRegistBoard(
            {
                ...registBoard,
                [title] : value
            }
        );
    }

    useEffect(
        () => {
            if(result.regist) {
                alert('후기글 작성')
                navigate(`/board`);
            }
        },
        [result]
    );

    const onClickHandler = () => {
        dispatch(callRegistBoardAPI(registBoard));
    }

    return(
        <div>
            <h2>글 작성</h2>
            <div>
                <div>
                    <input type='text' placeholder='제목을 입력하세요' name="title" value={registBoard.title} onChange={ onChangeHandler } />
                    <br/>
                    <textarea name='description' value={registBoard.detail.description} onChange={ onChangeHandler } />
                    <br/>
                    <button onClick={ onClickHandler }>후기글 등록</button>
                </div>
            </div>
        </div>
    )
}
export default BoardNew;