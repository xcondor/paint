var canvas = document.getElementById('canvas')

function drawcanvas (){
  var ctx = canvas.getContext('2d');
  ctx.lineWidth = 1; //设置线宽
  /*
    1. 设置网格的大小，gridSize用于确定网格之中的线之间的间隔
    2. 获取Canvas的宽度width、高度height，用于计算x轴、y轴需要绘画的条数
    3. 采用遍历的方式，绘画x轴的线条
    4. 采用遍历的方式，绘画y轴的线条
  */
  // 1. 设置网格大小
  var girdSize = 50;

  // 2. 获取Canvas的width、height
  var CanvasWidth = ctx.canvas.width;
  var CanvasHeight = ctx.canvas.height;
  // 3. 采用遍历的方式，绘画x轴的线条
  var xLineTotals = Math.floor(CanvasHeight / girdSize); // 计算需要绘画的x轴条数
  for (var i = 0; i < xLineTotals; i++) {
      ctx.beginPath(); // 开启路径，设置不同的样式
      ctx.moveTo(0, girdSize * i - 0.5); // -0.5是为了解决像素模糊问题
      ctx.lineTo(CanvasWidth, girdSize * i - 0.5);
      ctx.strokeStyle = "#fff"; // 设置每个线条的颜色
      ctx.stroke();
  }

  // 4.采用遍历的方式，绘画y轴的线条
  var yLineTotals = Math.floor(CanvasWidth / girdSize); // 计算需要绘画y轴的条数
  for (var j = 0; j < yLineTotals; j++) {
      ctx.beginPath(); // 开启路径，设置不同的样式
      ctx.moveTo(girdSize * j, 0);
      ctx.lineTo(girdSize * j, CanvasHeight);
      ctx.strokeStyle = "#fff"; // 设置每个线条的颜色
      ctx.stroke();
  }
}

drawcanvas();
var canvas = document.getElementById("canvas");   
  var ctx = canvas.getContext("2d");  
  //按下标记   
  var onoff = false;  
  //变量oldx跟oldy代表鼠标移动前的坐标  
  var oldx = -10;   
  var oldy = -10;   
  //设置颜色  
  var linecolor = "white";   
  //设置线宽   
  var linw = 50;   
  //添加鼠标移动事件   
  canvas.addEventListener("mousemove",draw,true);  //第三个参数主要跟捕获或者冒泡有关   
  //添加鼠标按下事件   
  canvas.addEventListener("mousedown",down,false);   
  //添加鼠标弹起事件   
  canvas.addEventListener("mouseup",up,false);   
  function down(event){     
   onoff = true;     
   oldx = event.pageX-10;      
   oldy = event.pageY-10;  
   //console.log(event.pageX+'..............000.............'+event.pageY);
  //event.pageX跟event.pageY相对于整个页面鼠标的位置 包括溢出的部分（就是滚动条）   
  }   
  function up(){     
   onoff = false;   
 }  
 function draw(event){    
  if(onoff == true){        
   var newx = event.pageX-50;        
   var newy = event.pageY-50;        
   ctx.beginPath();//beginPath() 丢弃任何当前定义的路径并且开始一条新的路径。它把当前的点设置为 (0,0)。       
   ctx.moveTo(oldx,oldy);   //移动到点击时候的坐标，以那个坐标为原点      
   ctx.lineTo(newx,newy);   //绘制新的路径       
   ctx.strokeStyle=linecolor;       
   ctx.lineWidth=linw;       
   ctx.lineCap="squre";       
   ctx.stroke();//stroke() 方法会实际地绘制出通过 moveTo() 和 lineTo() 方法定义的路径。默认颜色是黑色。    
//将新的鼠标位置赋给下一次开始绘制的起始坐标      
   oldx = newx;      
   oldy = newy;   
  };
 };