/*
 * @Descripttion: file content
 * @version: 1.0
 * @Author: 予程_hepch
 * @Date: 2023-05-28 01:05:21
 * @LastEditors: 予程_hepch
 * @LastEditTime: 2023-05-28 02:00:08
 */
/**
 * 设置该图层id为1的图元颜色 为红色
 * Cesium3DTileset.setObjsColor([1]，Cesium.Color.RED)
 */
Cesium.Cesium3DTileset.prototype.setObjsColor = function (ids, color) {
    let currentStyle = this.style && this.style.style || {};
    this.style = new Cesium.Cesium3DTileStyle({
        ...currentStyle,
        color: {
            evaluateColor: function (feature) {
                if (ids.includes(feature._batchId)) {
                    return Cesium.Color.clone(feature.color, color);
                }
            }
        }
    })
};
Cesium.Cesium3DTileset.prototype.removeObjsColor = function (ids) {

    let currentStyle = this.style && this.style.style || {};
    this.style = new Cesium.Cesium3DTileStyle({
        ...currentStyle,
        color: {
            evaluateColor: function (feature) {
                if (ids.includes(feature._batchId)) {

                    return undefined
                }
            }
        }
    })
};
Cesium.Cesium3DTileset.prototype.setObjsExtendHeight = function () {
    // 在这里实现您的自定义方法
    console.log('This is my custom method!');
};
Cesium.Cesium3DTileset.prototype.setObjsOffset = function () {
    // 在这里实现您的自定义方法
    console.log('This is my custom method!');
};
Cesium.Cesium3DTileset.prototype.setObjsTranslate = function () {
    // 在这里实现您的自定义方法
    console.log('This is my custom method!');
};
/**
 * 设置该图层id为1的图元显示，其余所有图元全部不可见。
 * Cesium3DTileset.setObjsVisible([1],true);
 * 设置图元id=1的隐藏，其余所有图元可见。
 * Cesium3DTileset.setObjsVisible([1],false);
 */
Cesium.Cesium3DTileset.prototype.setObjsVisible = function (ids, boolean) {
    let currentStyle = this.style && this.style.style || {};
    this.style = new Cesium.Cesium3DTileStyle({
        ...currentStyle,
        show: {
            evaluate: function (feature) {
                let ishow = boolean
                if (ids.includes(feature._batchId)) {
                    return ishow
                } else {
                    return !ishow
                }

            }
        }
    })

};
/**
 * //设置id为1和2的图元为不可见，其余图元的可见状态不变。
 * Cesium3DTileset.setOnlyObjsVisible([1,2],false);
 * //设置id为1和2的图元为可见，其余图元的可见状态不变。
 * Cesium3DTileset.setOnlyObjsVisible([1,2],true);
 */
Cesium.Cesium3DTileset.prototype.setOnlyObjsVisible = function (ids, boolean) {
    let currentStyle = this.style && this.style.style || {};
    this.style = new Cesium.Cesium3DTileStyle({
        ...currentStyle,
        show: {
            evaluate: function (feature) {
                let ishow = boolean
                ids.includes(feature._batchId) ? ishow = ishow
                    : ishow = !ishow
                return ishow
            }
        }
    })
};

