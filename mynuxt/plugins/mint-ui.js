import Vue from 'vue'
import Mint from 'mint-ui'
import { Button, Swipe, SwipeItem, Loadmore, Indicator } from 'mint-ui';
import 'mint-ui/lib/swipe/style.css'
import 'mint-ui/lib/button/style.css'
import 'mint-ui/lib/loadmore/style.css'
import 'mint-ui/lib/indicator/style.css'

Vue.component(Loadmore.name, Loadmore);
Vue.component(Button.name, Button);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.use(Mint)
