# setObjectByIdsTileset
通过3dtiles的瓦片集中图元（构件/要素）的ids来操作图元（构件/要素）
//设置id为1和2的图元为不可见，其余图元的可见状态不变。
Cesium3DTileset.setOnlyObjsVisible([1,2],false);
//设置id为1和2的图元为可见，其余图元的可见状态不变。
Cesium3DTileset.setOnlyObjsVisible([1,2],true);

