
const initialState = {};

const baseReducer = (state = initialState, { type, payload }: { type: string, payload: string; }) => {
    switch (type) {

        default:
            return state;
    }
};

export default baseReducer;