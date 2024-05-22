import {defineStore} from 'pinia'
import {LoadingBarApi} from 'naive-ui'

interface LoadingBarState {
    loadingBar: LoadingBarApi | null
}

const useLoadingBarStore = defineStore('loadingBar', {
    state: (): LoadingBarState => ({
        loadingBar: null
    }),

    actions: {
        setLoadingBar(loadingBar: LoadingBarApi) {
            this.loadingBar = loadingBar;
        },
        startLoading() {
            this.loadingBar?.start()
        },

        finishLoading() {
            this.loadingBar?.finish()
        },

        errorLoading() {
            this.loadingBar?.error()
        }
    }
})

export default useLoadingBarStore