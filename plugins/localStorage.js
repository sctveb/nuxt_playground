import createPersistedState from 'vuex-persistedstate'

export default ({store}) => {
  window.onNuxtReady(() => {
    createPersistedState({
        key: 'yourkey',
        storage: localStorage,
        // paths: []
    })(store)
  })
}