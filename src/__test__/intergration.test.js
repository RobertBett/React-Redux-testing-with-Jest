import React from 'react';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import moxios from 'moxios';
import Root from '../Root';
import App from '../components/App';


describe('Intergration Tests', () => {
    let wrapped;
    beforeEach(() =>{
        moxios.install();
        moxios.stubRequest('http://jsonplaceholder.typicode.com/comments',{
            status: 200,
            response: [{name: 'fetched 1'}, { name:'whatever'}]
        })

        wrapped = mount(
            <Root>
                <App/>
            </Root>
        );
    });
    afterEach(() =>{
        moxios.uninstall()
    });
    
    it('can fetch a list of comments and display them', (done) =>{
        wrapped.find('#fetch-button').simulate('click');

        moxios.wait(() => {
            wrapped.update()
            expect(wrapped.find('li').length).toEqual(2);   
            done()
            wrapped.unmount();
        });
    })
    it('should match the snapshot', () =>{
        expect(toJSON(wrapped)).toMatchSnapshot()
    })
})