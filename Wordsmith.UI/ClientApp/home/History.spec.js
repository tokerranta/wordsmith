import Enzyme, { shallow } from 'enzyme';
import React from 'react';
import History from './History';
import expect from 'expect';
import Adapter from 'enzyme-adapter-react-15';
Enzyme.configure({ adapter: new Adapter() });

describe('<History />', () => {
    describe('when history contains one reversed phrase', () => {
        it('should render a list with one item', () => {
            const reverseHistory = [
                { phrase: 'Hej', reversed: 'jeH'}
            ];
            const wrapper = shallow(<History  reverseHistory={reverseHistory} />);
            const actualCount = wrapper.find('li').length;
            const expectedCount = 1;
            expect(actualCount).toBe(expectedCount);
        });
    });
});