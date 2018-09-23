import React from 'react';
import { mount } from 'enzyme'
import toJSON  from 'enzyme-to-json';
import App from '../App';
import CommentBox from '../CommentBox';
import CommentList from '../CommentList';
import Root from '../../Root';



describe('App Component', () =>{
    let wrapped;
    beforeEach(() =>{
        wrapped = mount(<Root><App/></Root>)
     })
     it('shows a comment box', ()=>{
         expect(wrapped.find(CommentBox).length).toEqual(1) 
     });
     it('shows a comment list', ()=>{
         expect(wrapped.find(CommentList).length).toEqual(1)
     });
    it('should match the snapshot', () =>{
        expect(toJSON(wrapped)).toMatchSnapshot();
    })
})