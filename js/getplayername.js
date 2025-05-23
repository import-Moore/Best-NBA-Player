var player = "none";
document.addEventListener('DOMContentLoaded', function () {
    //获取当前URL的查询参数
    const params = new URLSearchParams(window.location.search);
    //获取查询参数 'id' 的值
    const playerId = params.get('id');

    if (playerId) {
        //使用 playerId 做一些事情，比如显示玩家信息
        player = playerId;
        console.log("playerid是", playerId, "\nplayer是", player);
    } else {
        //处理没有传递 'id' 参数的情况
        console.log("id from the former page not found")
    }
        modifyPage();
    manipulateChart();

});

setTimeout(function() {
    console.log("函数外面player是", player); //这行代码会在 DOMContentLoaded 事件触发后执行
}, 1000); //延迟 1 秒执行
