import React from 'react'
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import CommentList from '../CommentList';
import Root from '../../Root';



describe('Comment List component', () => {
    let wrapped;

    beforeEach(() =>{
        const initialState ={
            comments: ['comment', 'comment1','blah blah']
        }
        wrapped = mount(
        <Root initialState={initialState}>
            <CommentList/>
        </Root>);
    });
    it('creates one li per Comment',()=>{
        expect(wrapped.find('li').length).toEqual(3);
    })
    it('shows the text ', () =>{
        expect(wrapped.render().text()).toContain('comment')
        expect(wrapped.render().text()).toContain('comment1')
        expect(wrapped.render().text()).toContain('blah blah')
    })

    it('should match the snapshot', () =>{
        expect(toJSON(wrapped)).toMatchSnapshot()
    })
})
