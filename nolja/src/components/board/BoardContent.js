import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editContent, removeContent} from '../../modules/boardReducer';
import { useNavigate } from 'react-router-dom';

function BoardContent() {
    const { selectRowData } = useSelector(state => state.boardReducer)

    const { title, setTitle } = useState(selectRowData.title)
    const { content, setContent } = useState(selectRowData.content)

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleContent = (e) => {
        setContent(e.target.value)
    }
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const onChange = () => {
        const _inputData = {
            id: selectRowData.id,
            title: title,
            content: content
        }
        console.log('clickSave :: ', _inputData)
        dispatch(editContent(_inputData))
        setTitle('')
        setContent('')
        navigate.push('/')
    }
    const onRemove = () => {

        dispatch(removeContent(selectRowData.id))

        setTitle('')
        setContent('')

        navigate.push('/')
    
    }
    return(
        <div>
            <h2>상세보기</h2>
            <div>
                <div>
                    <input type='text' className='inputTitle' onChange={handleTitle} value={title} />
                </div>
                <div>
                    <textarea className='inputContent' onChange={handleContent} value={content} />
                </div>
                <div>
                    <button type='button' onClick={onChange} className='editBtn'>edit</button>
                    <button type='button' onClick={onRemove} className='deleteBtn'>delete</button>
                </div>
            </div>
        </div>
    )
}
export default BoardContent;