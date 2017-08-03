import React from 'react';
import { mountConnected, mockStore } from '../../utils/helper';
import { expect } from 'chai';
import Menu from 'components/Menu';
import menuList from '../../fixtures/menu.json';

describe('<Menu />', () => {
    let wrapper;
    let store;

    beforeEach(() => {
        store = {
            menu: {
                items: menuList,
            },
        };

        wrapper = mountConnected(<Menu className="menu" />, mockStore(store));
    });

    it('Must render component correctly', () => {
        expect(wrapper.find('.menu')).to.have.length(1);
    });

    it('Must render first menu level correctly, considering fixture', () => {
        expect(wrapper.find('ul')).to.have.length(2);

        expect(wrapper.find('ul > li a').at(0).text()).to.equal('Work');
        expect(wrapper.find('ul > li a').at(1).text()).to.equal('About');
    });

    it('Must render second menu level, when necesary', () => {
        expect(wrapper.find('ul > li > ul > li')).to.have.length(3);

        expect(wrapper.find('ul > li > ul > li a').at(0).text()).to.equal('What we do');
        expect(wrapper.find('ul > li > ul > li a').at(1).text()).to.equal('How we work');
        expect(wrapper.find('ul > li > ul > li a').at(2).text()).to.equal('Leadership');
    });
});
