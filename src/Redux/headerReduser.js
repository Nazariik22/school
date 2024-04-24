

const initialState = {
    menu: [
        { title: 'Головна', root: '/' },
        { title: 'Новини', root: '/new' },
        { title: 'Фотогалерея', root: '/fotoall' },
        { title: 'Контакти', root: '/contact' },
    ],
    structura: [
        { title: 'Структура', isFatching: false },
        { title: 'Вхід', isFatching: false },
        { title: 'Соціальні мережі', isFatching: false },
    ]
}
const headerReduser = (state = initialState, action) => {
    switch (action.type) {
        case ' ':
            break
        default:
            return state;
    }
}
export {
    headerReduser
}