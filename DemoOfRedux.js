import { useReducer, React } from 'react';

var initialState = {
    like: 0,
    dislike: 0
};

function Reducer(state, action) {
    switch (action.type) {
        case 'Like':
            return { like: state.like + 1, dislike: state.dislike };
        case 'DisLike':
            return { dislike: state.dislike + 1, like: state.like };
        default:
            return state;
    }
}

export default function DemoOfRedux() {
    const [state, dispatch] = useReducer(Reducer, initialState);

    function handleDislike() {
        dispatch({ type: 'DisLike' });
    }

    function handleLike() {
        dispatch({ type: 'Like' });
    }

    return (
        <>
            <div>
                <h1>
                    Likes Count is {state.like} and dislike count is {state.dislike}
                </h1>
                <button onClick={handleLike} type="button" className="btn btn-danger">
                    Like
                </button>
                <button onClick={handleDislike} className="btn btn-primary">
                    DisLike
                </button>
            </div>
        </>
    );
}
