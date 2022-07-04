export const loggerMiddleware = (store: any) => (next: any) => (action: any) => {
    if(!action.type) {
        return next(action);
    }
    console.group('type: ', action.type);
    console.log('payload: ', action.payload);
    console.log('currentState: ', store.getState());
    console.log('error: ', action.error);

    next(action);
    console.log('next state: ', store.getState());
};

