import { initStore } from './store';

export const configureStore = () => {
    const actions = {
        ADD_DATA: (curState, payload) => {
            return { ...curState, ...payload };
        },
        SET_JOURNEY_PATH: (curState, path) => {
            return { activeJourneyPath: path };
        },
        DELETE_JOURNEY_PATH: () => {
            return { activeJourneyPath: null };
        },
    }

    initStore(actions, { 
        data: {
            meta: null,
            journeys: null
        },
        activeJourneyPath: null
    });
};
