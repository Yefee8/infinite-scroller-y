# infinite-scroller-y
A lightweight infinite scroll function library!

# usage

```
import infiniteScroll from 'infinite-scroller-y'

let page = 0
function myFunction(){
axios.get(`https://google.com/?page=${page}`)
page++;
}

infiniteScroll(myFunction());
```
