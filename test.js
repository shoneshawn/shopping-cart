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
            if (typeof item.checked == 'undefined') {//item��û��checked�Ļ�,����undefined
                Vue.set(item, 'checked', true)//��vue�ﴴ��һ��checked,����ֵΪtrue.����ȫ��ע��ķ���
                this.$set(item, 'checked', true)//���Ǿֲ�ע��ķ��� ,������Ҫ�����ַ���,��Ϊ��else
            } else {
                item.checked = !item.checked;//���һ��ѡ��,�ٵ��һ��ȡ��


            }

        }
    }


})