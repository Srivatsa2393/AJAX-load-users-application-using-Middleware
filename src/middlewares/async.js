export default function({ dispatch }) {
  return next => action => {
    //console.log(action);
    //if the action does not have a payload or the payload does not have a .then property
    // we dont care about it, send it on
    if(!action.payload || !action.payload.then){
      return next(action);
    }

    //next(action);
    //console.log('We have a promise', action);
    //Make sure the action's promise resolves
    action.payload
      .then(function(response) {
        //creates a new action
        const newAction =   { ...action, payload: response };
        dispatch(newAction);
      });
  };
}
