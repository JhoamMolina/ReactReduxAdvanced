import commentsReducer from '../../reducers/comments';
import { SAVE_COMMENT } from '../../actions/types';

it('handles actions of type SAVE_COMMENTS', () => {
    const action = {
        type: SAVE_COMMENT,
        payload: 'new comment'
    };
    const newState = commentsReducer([], action);

    expect(newState).toEqual(['new comment']);

})

it('handles action with unkown type', () => {
    const newState = commentsReducer([], {});
    expect(newState).toEqual([]);
})