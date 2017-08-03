import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { SubLevelLink } from 'components/SubLevelLink';

describe('<SubLevelLink />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<SubLevelLink url="#/work" label="Work" handleShadow={() => {}} />);
    });

    it('Must render component correctly', () => {
        expect(wrapper.find('a')).to.have.length(1);
    });

    it('Must have correct label', () => {
        expect(wrapper.find('a').text()).to.equal('Work');
    });
});
