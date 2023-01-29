window.onload = function () {
    countDown();
    function addZero(i) {
        return i < 10 ? "0" + i: i + "";
    }
    function countDown() {
        var nowtime = new Date();
        var endtime = new Date("2027/06/21,07:06:21");
        var lefttime = parseInt((endtime.getTime() - nowtime.getTime()) / 1000);
        var d = parseInt(lefttime / (24*60*60))
        var h = parseInt(lefttime / (60 * 60) % 24);
        var m = parseInt(lefttime / 60 % 60);
        var s = parseInt(lefttime % 60);
        d = addZero(d)
        h = addZero(h);
        m = addZero(m);
        s = addZero(s);
        document.querySelector(".count").innerHTML = `重启余  ${d}天 ${h} 时 ${m} 分 ${s} 秒`;
        if (lefttime <= 0) {
            document.querySelector(".count").innerHTML = "感谢您还记得我们，现在是2027年6月21日，那天的4年后，请向1634288249@qq.com与3352118375@qq.com发送邮件催促我们";
            return;
        }
        setTimeout(countDown, 1000);
      }
  }