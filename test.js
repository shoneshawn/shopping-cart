/**
 * Created by apple on 17/4/12.
 */

var vm = new Vue({
    el: '#app',
    data: {
        title: 'heheda',
        postList: [],
        totalMoney: 0
    },
    filters: {},
    mounted: function () {
        this.first();
    },
    method: {
        first: function () {
            var _this = this;
            this.$http.get('data/cartData.json', {"id": 123}).then(function (res) {
                _this.postList = res.body.result.list;
                _this.totalMoney = res.body.result.totalMoney;
            })
        },
        selectedProduct: function (item) {
            if (typeof item.checked == 'undefined') {//item内没有checked的话,就是undefined
                Vue.set(item, 'checked', true)//在vue里创建一个checked,并且值为true.这是全局注册的方法
                this.$set(item, 'checked', true)//这是局部注册的方法 ,在这里要用这种方法,因为有else
            } else {
                item.checked = !item.checked;//点击一下选中,再点击一下取消


            }

        }
    }


})