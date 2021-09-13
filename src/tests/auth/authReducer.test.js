import { authReducer } from "../../auth/authReducer";
import {types} from "../../types/types";

describe('pruebas en auth reducer', () => {

    test('debe de retornar el estado por defecto', () => {

        const state = authReducer({logged: false}, {});
        expect(state).toEqual({logged: false});
    })

    test('debe autenticar', () => {

        const action = {
            type: types.login,
            payload: {
                name: "luis"
            }
        }

        const state = authReducer({logged: false}, action);
        expect(state).toEqual({
            logged: true,
            name: "luis"
        });
        
    })

    test('debe hacer logout', () => {
        
        const action = {
            type: types.logout
        }

        const state = authReducer({logged: true, name: 'Pedro'}, action);
        expect(state).toEqual({logged: false});
    })
})