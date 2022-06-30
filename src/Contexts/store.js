import produce from 'immer';
import create from 'zustand';

const useStore = create((setStore) => ({
	fullscreen: false,
	setStore: (state) => setStore(produce(state)),
}));

export default useStore;
