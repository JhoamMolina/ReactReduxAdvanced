export default ({dispatch}) =>  (next) => (action) => {
    // check to see if the action has a promise in the payload

    if(!action.payload || !action.payload.then ){
        return next(action);
    }

    action.payload.then(function(response) {
        const newAction = {...action, payload: response };
        dispatch(newAction)
    });
}

