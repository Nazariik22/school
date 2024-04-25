

const initialState = [
    {title:'Адміністрація',root:'/admin'},
    {title:'Вчительська',root:'/teachers'},
    {title:'Документи',root:'/doc'},
]
const asideReduser = (state = initialState, action) => {
    switch (action.type) {
        case ' ':
          break
        default:
            return state;
    }
}
export {
    asideReduser
}