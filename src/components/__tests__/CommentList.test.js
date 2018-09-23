import React from 'react'
import { mount } from 'enzyme';
import CommentList from '../CommentList';
import Root from '../../Root';


let wrapped;

describe('Comment List component', () =>{
    beforeEach(() =>{
        wrapped = mount(<Root><CommentList/></Root>);
    });
    
    it('creates one li per Comment',()=>{
    
    })
})
