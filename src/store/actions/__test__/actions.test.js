import { saveComment } from '../index';
import { SAVE_COMMENT } from '../types';
import toJSON  from 'enzyme-to-json';

describe('saveComment', () =>{
    let action;
    it('has the correct',()=>{
        action = saveComment()
        expect(action.type).toEqual(SAVE_COMMENT);
    });

    it('has the correct payload', ()=>{
        action = saveComment('New Comment');
        expect(action.payload).toEqual('New Comment')
    })

    it('should match the snapshot', () =>{
        expect(toJSON(action)).toMatchSnapshot()
    })
})