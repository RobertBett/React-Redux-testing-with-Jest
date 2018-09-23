import { saveComment } from '../index';
import { SAVE_COMMENT } from '../types';

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
})