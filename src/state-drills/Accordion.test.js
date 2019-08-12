import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Accordion from './Accordion';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';


describe(`Accordions Component`, () => {
    // array of objects each with a name and content
    const sections = [
        {
          title: 'Section 1',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        },
        {
          title: 'Section 2',
          content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
        },
        {
          title: 'Section 3',
          content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
        },
      ]
  
    /* smoke test not shown */
  
    it('renders the first tab by default', () => {
      const tree = renderer.create(<Accordion />).toJSON()
      expect(tree).toMatchSnapshot()
    })

    it('renders no sections as active by default', () => {
        const tree = renderer.create(<Accordion sections = {sections} />).toJSON()
        expect(tree).toMatchSnapshot()
      })

      it('opens any clicked tab', () => {
        const wrapper = shallow(<Accordion sections = {sections} />)
        wrapper.find('button').at(1).simulate('click')
        expect(toJson(wrapper)).toMatchSnapshot()
      })

      it('only opens the last section when multiple sections have been clicked', () => {
        const wrapper = shallow(<Accordion sections = {sections} />)
        wrapper.find('button').at(0).simulate('click')
        wrapper.find('button').at(1).simulate('click')
        wrapper.find('button').at(2).simulate('click')
        expect(toJson(wrapper)).toMatchSnapshot()
      })
  })