function draw() {
    var canvas = document.getElementById("canvas");
    if (canvas.getContext) {
        var ctx = canvas.getContext("2d");
        //API:  https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D
        /*
        *   绘制矩形
        */
//        //方形左上角的坐标为距离（X轴）x像素，距离（Y轴）y像素（这里的坐标为（10,10））。
//        //绘制一个填充的矩形 fillRect(x, y, width, height)
//        ctx.fillStyle = "rgb(200,0,0)";
//        ctx.fillRect (10, 10, 55, 50);
//
//        ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
//        ctx.fillRect (30, 30, 55, 50);
//
//        //绘制一个矩形的边框 strokeRect(x, y, width, height)
//        ctx.strokeRect(40,40,55,50);
//
//        //清除指定矩形区域，让清除部分完全透明。 clearRect(x, y, width, height)
//        ctx.fillRect(25,25,100,100);
//        ctx.clearRect(45,45,60,60);
//        ctx.strokeRect(50,50,50,50);

        /*
         *   绘制路径
         */
        //三角形
//        ctx.beginPath();
//        ctx.moveTo(75,50); //将一个新的子路径的起始点移动到(x，y)坐标
//        ctx.lineTo(100,75); //绘制一条从当前位置到(100,75)的直线。
//        ctx.lineTo(100,25);
////        ctx.fill(); //使用当前的样式填充子路径。
//
//        ctx.closePath() //使笔点返回到当前子路径的起始点
//        ctx.stroke(); //使用当前的样式描边子路径
//
//        //笑脸
//        ctx.beginPath();
//        ctx.arc(75,75,50,0,Math.PI*2,true); // 绘制一段圆弧路径
//        ctx.moveTo(110,75);
//        ctx.arc(75,75,35,0,Math.PI,false);   // 口(false顺时针)
//        ctx.moveTo(65,65);
//        ctx.arc(60,65,5,0,Math.PI*2,true);  // 左眼
//        ctx.moveTo(95,65);
//        ctx.arc(90,65,5,0,Math.PI*2,true);  // 右眼
//        ctx.stroke();

        /*
         *   绘制线
         */
        var img = new Image();   // 创建一个<img>元素
        img.onload = function(){
            // 执行drawImage语句
            ctx.drawImage(img,0,0);
            ctx.beginPath();
            ctx.moveTo(30,96);
            ctx.lineTo(500,66);
            ctx.lineTo(103,76);
            ctx.lineTo(170,15);
            ctx.strokeStyle = "blue";
            ctx.stroke();
        }
        img.src = 'images/u9.jpg'; // 设置图片源地址
    }
}