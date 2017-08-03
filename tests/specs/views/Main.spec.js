import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Main } from 'views/Main';
import Menu from 'components/Menu';

describe('<Main />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Main />);
    });

    it('Must render component correctly', () => {
        expect(wrapper.find('.main')).to.have.length(1);
    });

    it('Dont show Shadow div by default', () => {
        expect(wrapper.find('.shadow')).to.have.length(0);
    });

    it('Must show Shadow div if state defines it', () => {
        wrapper.setState({ showShadow: true });

        expect(wrapper.find('.shadow')).to.have.length(1);
    });

    it('Must show navbar, Brand and <Menu />', () => {
        expect(wrapper.find('.navbar')).to.have.length(1);
        expect(wrapper.find('.brand')).to.have.length(1);
    });

    it('Must render both menus', () => {
        expect(wrapper.find(Menu)).to.have.length(2);
    });

    it('Must render Content div', () => {
        expect(wrapper.find('.content-wrapper')).to.have.length(1);
        expect(wrapper.find('.banner')).to.have.length(1);
        expect(wrapper.find('.content-inner')).to.have.length(1);
    });
});
