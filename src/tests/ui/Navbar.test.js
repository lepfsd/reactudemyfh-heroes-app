import React from 'react'
import { mount } from "enzyme"
import { Navbar } from '../../ui/Navbar'
import { AuthContext } from '../../auth/AuthContext'
import { MemoryRouter } from 'react-router'


describe('Pruebas en <Navbar/>', () => {

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: true,
            name: "luis"
        }
    }

    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <MemoryRouter>
                <Navbar/>
            </MemoryRouter>
        </AuthContext.Provider>
    )

    test('debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('.text-info').text().trim()).toBe("luis")
    })
})