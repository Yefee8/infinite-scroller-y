module.exports = function infiniteScroll(func) {
    if(typeof window !== undefined){
        let reloadCount = 0;
        if (window.scrollY === document.documentElement.scrollHeight - document.documentElement.clientHeight) {
            const maxScrollCount = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            if (maxScrollCount * reloadCount === window.scrollY) {
                return func;
            }
        }
    }
}
