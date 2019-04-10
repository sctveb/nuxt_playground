export default function({store,redirect}){
    if(!store.state.check){
        return redirect('/todolist')
    }
}