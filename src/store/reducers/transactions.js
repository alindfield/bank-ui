import {data} from '../../data/transactions';
import {createAction, updateObject} from '../../shared/utilities';

const initialState = {
    rows: data
};

const doSort = (state, action) => {
    return updateObject(state, {rows: action.data});
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.SORT: return doSort(state, action);
        default: return state;
    };
};

export default reducer;

export const actions = {
    SORT: 'SORT'
};

export const updateData = (data) => {
    return createAction(actions.SORT, {data: data});
};