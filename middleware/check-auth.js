// Trong middleware check-auth
export default function(context) {
    if (process.server) { // Nếu ở môi trường server
        context.store.dispatch('initAuth', context.req)
    } else { // Nếu ở môi trường client
        context.store.dispatch('initAuth', null)
    }
}
