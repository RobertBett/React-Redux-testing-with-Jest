import commentsReducer from '../comments';
import { SAVE_COMMENT } from '../../actions/types';
import toJSON  from 'enzyme-to-json';

describe('reducer component', () =>{
    let newState;
    it('handles actions of type SAVE_COMMENT', ()=> {
    const action ={
        type: SAVE_COMMENT,
        payload: 'New Comment'
    };
    newState = commentsReducer([], action);
    expect(newState).toEqual(['New Comment'])
    });
    it('handles action with uknown type', () => {
    newState = commentsReducer([], { type: 'vmkl;mvermvpoe'} );
    expect(newState).toEqual([])
    })
    it('should match the snapshot', () =>{
        expect(toJSON(newState)).toMatchSnapshot()
    })
})