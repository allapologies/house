import React from 'react'
import { mount } from 'enzyme'
import { ProjectsListItem } from '../'

describe('<ProjectListItem/>', () => {
    it('should be available', () => {
        expect(ProjectsListItem).toBeDefined()
    })
    it('renders project item and link', () => {
        const project = {
            projectId: 1,
            title: 'first'
        }
        const wrapper = mount(
            <ProjectsListItem project={project} />
        )
        expect(wrapper.find('li').length).toBe(1)
        expect(wrapper.containsMatchingElement(<a>first</a>)).toBe(true)
    })
})

