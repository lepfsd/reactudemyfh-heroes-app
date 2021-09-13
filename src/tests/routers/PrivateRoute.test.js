import React from 'react';
import {mount} from 'enzyme';
import {PrivateRoute} from '../../routers/PrivateRoute';
import {MemoryRouter} from 'react-router-dom'

describe('pruebas en <PrivateRoute/>', () => {

    const props = {
        location: {
            pathname: '/marvel'
        }
    }

    Storage.prototype.setItem = jest.fn();

    test('debe de mostrar el componente si esta autenticado y guardar localStorage', () => {
        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute
                    isAuthenticated={true}
                    component={ () => <span>listo</span>}
                    {...props}
                />
            </MemoryRouter>
            
        );
        expect(wrapper.find('span').exists()).toBe(true);
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel')
    })

    test('debe de bloquear el componente si no esta auth', () => {
        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute
                    isAuthenticated={false}
                    component={ () => <span>listo</span>}
                    {...props}
                />
            </MemoryRouter>
            
        );
        expect(wrapper.find('span').exists()).toBe(false);
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel')
    })
})