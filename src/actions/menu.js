import menuData from '../../api/nav.json';

export const FETCH_MENU = 'menu/FETCH_MENU';

export function fetchMenu() {
    const request = Promise.resolve(menuData);

    return {
        type: FETCH_MENU,
        payload: request,
    };
}
