
const initialState={
    menu:[
        {title:'Батькам'},
        {title:'Дітям'},
        {title:'Вчителям'},
    ],
    admin:"Прізвище та ім'я"
}
const footerReduser = (state = initialState, action) => {
    switch (action.type) {
        case ' ':
          break
        default:
            return state;
    }
}
export {
    footerReduser
}