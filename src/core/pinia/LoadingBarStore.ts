import {defineStore} from 'pinia'
import {useLoadingBar, LoadingBarApi} from 'naive-ui'

interface LoadingBarState {
    loadingBar: LoadingBarApi
}

const useLoadingBarStore = defineStore('loadingBar', {
    state: (): LoadingBarState => ({
        loadingBar: useLoadingBar()
    }),

    actions: {
        startLoading() {
            this.loadingBar.start()
        },

        finishLoading() {
            this.loadingBar.finish()
        },

        errorLoading() {
            this.loadingBar.error()
        }
    }
})

export default useLoadingBarStore