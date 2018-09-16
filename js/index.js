// window.onload=function(){

// 	// 导航下拉菜单
// 	let text=document.querySelectorAll(".top-white .title .list");
// 	let menu=document.querySelectorAll(".top-white .navmenu");
// 	// console.log(menu);
// 	for(let x=0;x<text.length;x++){
// 		text[x].onmouseenter=function(){
// 			for(let y=0;y<menu.length;y++){
// 				menu[y].style.display="none";
// 			}
// 		menu[x].style.display="block";
// 		}
// 		text[x].onmouseleave=function(){
// 			menu[x].style.display="none";
// 		}
// 	}


//     commend(left2,right2,miList2,wd);//调用内容平移
// }



//页面加载
$(function(){

	//购物车
	let shop=$(".top-nav .shop");
	let box=$(".shop .shop-box");
	console.log(box);
	shop.mouseenter(function(){
	$(box).clearQueue().slideDown();
	});
	shop.mouseleave(function(){
	$(box).clearQueue().slideUp();
	});


	//侧导航 选项卡
	let lis=$(".banner .container .text .title .list");
	let aside=$(".banner .text .list .bn-choose");
	//jq有隐式循环（所以不用写循环），链式调用（因为每次返回的是jq对象）的特点
	lis.mouseenter(function(){
		aside.css("display","none");
		$(this).children(".banner .text .list .bn-choose").css("display","flex");
	})
	lis.mouseleave(function(){
		$(this).children(".banner .text .list .bn-choose").css("display","none");
	})


	//家电 选项卡
	let parent=$(".house .container .top-right .title span1");
	let son=$(".house .right .list ul");
	let title=$(".house .container .top-right .title span1");
	//son不是parent的子元素，因为没有移出效果，所以不能用上述方法
	parent.mouseenter(function(){
		//获取索引值
		let i=$(this).index();
		title.first().css("active");
		//方法1：链式调用
		son.css("display","none").eq(i).css("display","block");
		title.removeClass("active").eq(i).addClass("active");
		// //方法2：分开写
		// son.css("display","none");//每次返回的都是jq对象
		// son.eq(i).css("display","block");
	})
	//等同于初始化
	parent.triggerHandler('mouseenter');


	//导航下拉
	let text=$(".top-white .title .list");
	let menu=$(".top-white .navmenu");
	//jq有隐式循环（所以不用写循环），链式调用（因为每次返回的是jq对象）的特点
	text.mouseenter(function(){
		let i=$(this).index();
		menu.css("display","none");
		$(this).children(".top-white .navmenu").css("display","block");
	})
	text.mouseleave(function(){
		$(this).children(".top-white .navmenu").css("display","none");
	})


	//轮播图
	let now=0;
	let imgBox=$(".banner .picture .imgs img");
	console.log(imgBox);
	let btns=$(".banner .picture .dots .point");
	console.log(btns);
	imgBox.first().css("z-index","10");
	btns.first().addClass("active");
	let t=setInterval(move, 2000);
	function move(){
		now++;
		if(now==imgBox.length){
			now=0;
		}
		imgBox.css("z-index","5").eq(now).css("z-index","10");
		btns.removeClass("active").eq(now).addClass("active");
	}
	function moveL(){
		now--;
		if(now==-1){
			now=imgBox.length-1;
		}
		imgBox.css("z-index","5").eq(now).css("z-index","10");
		btns.removeClass("active").eq(now).addClass("active");
	}

	let imgs=$(".banner .container .picture");

	// 鼠标移入移出停止效果
	imgs.mouseenter(function(){
		clearInterval(t);
	})
	imgs.mouseleave(function(){
		t=setInterval(move, 2000);
	})

	//轮播点
	let bot=$(".banner .picture .dots .point");
	bot.click(function () {
		let a=$(this).index();
		bot.removeClass("active").eq(a).addClass("active");
		imgBox.css("z-index","5").eq(a).css("z-index","10");
    })

	//左右按键
	let left=$(".banner .leftBtn");
	console.log(left);
	let right=$(".banner .rightBtn");
	left.click(function(){
		moveL();
	})
	right.click(function(){
		move();
	})


	//小米闪购平移
	let lbtn=$(".flashover .container .left");
	let rbtn=$(".flashover .container .right");
    let lists=$(".flashover ul .list-container .list");
    // console.log(lbtn,rbtn,lists);
    let widths=lists.width()/2;
    let times=0;
    rbtn.click(function () {
        times++;
        if (times===2){
            times=1;
        }
        lists.css("transform",`translate(${(-widths*times)}px)`);
    })
    lbtn.click(function () {
        times--;
        if (times===-1){
            times=0;
        }
        lists.css("transform",`translate(${(-widths*times)}px)`);
    })


    //为你推荐平移
	let lbtn1=$(".commend .container .left");
	let rbtn1=$(".commend .container .right");
    let lists1=$(".commend .container ul");
    // console.log(lbtn,rbtn,lists);
    let widths1=lists1.width()/3;
    let times1=0;
    rbtn1.click(function () {
        times1++;
        if (times1===3){
            times1=2;
        }
        lists1.css("transform",`translate(${(-widths1*times1)}px)`);
    })
    lbtn1.click(function () {
        times1--;
        if (times1===-1){
            times1=0;
        }
        lists1.css("transform",`translate(${(-widths1*times1)}px)`);
    })


    //小轮播声明1
	let message1=$(".content ul .first .message");
	let num1=$(".content ul .first .num .dot");
	let left1=$(".content ul .first .left");
	let right1=$(".content ul .first .right");
	let width1=message1.width();

	//小轮播声明2
	let message2=$(".content ul .second .message");
	let num2=$(".content ul .second .num .dot");
	let left2=$(".content ul .second .left");
	let right2=$(".content ul .second .right");
	let width2=message2.width();

	//小轮播声明3
	let message3=$(".content ul .third .message");
	let num3=$(".content ul .third .num .dot");
	let left3=$(".content ul .third .left");
	let right3=$(".content ul .third .right");
	let width3=message3.width();

	//小轮播声明4
	let message4=$(".content ul .fourth .message");
	let num4=$(".content ul .fourth .num .dot");
	let left4=$(".content ul .fourth .left");
	let right4=$(".content ul .fourth .right");
	let width4=message4.width();

     //小轮播函数
    function banner(imgs,dots,leftBtn,rightBtn,widths) {
        let now=0;
        let next=0;
        //设置默认值
        imgs.eq(0).css("left","0");
        dots.eq(0).addClass("active");

        let flag=true;
        function move() {
            next++;
            if(next==imgs.length){
                next=0;
            }
            imgs.eq(next).css("left",`$(widths)px`);
            imgs.eq(now).animate({left:-widths});
            imgs.eq(next).animate({left:0},function(){
                flag=true;
            });
            dots.eq(now).removeClass("active");
            dots.eq(next).addClass("active");
            now=next;
        }
        // 左箭头
        function moveL(){
            next--;
            if(next<0){
                next=imgs.length-1;
            }
            imgs.eq(next).css("left",`$(-widths)px`);
            imgs.eq(now).animate({left:widths});
            imgs.eq(next).animate({left:0},function(){
                flag=true;
            });
            dots.eq(now).removeClass("active");
            dots.eq(next).addClass("active");
            now=next;
        }
        leftBtn.click(function(){
            if(!flag){
                return;
            }
            if (next==0) {
                return;
            }
            flag=false;
            moveL();
        })
        rightBtn.click(function(){
            if(!flag){
                return;
            }
            if (next==imgs.length-1) {
                return;
            }
            flag=false;
            move();
        })
        //轮播点
            dots.click(function(){
                let i=$(this).index();
                if (next==i){
                    return;
                }
                if (next>i){
                    imgs.eq(i).css("left",`${-widths}px`);
                    imgs.eq(now).animate({left:widths});
                    imgs.eq(i).animate({left:0});
                    dots.eq(now).removeClass("active");
                    dots.eq(i).addClass("active");
                }else  if (next<i){
                    imgs.eq(i).css("left",`${widths}px`);
                    imgs.eq(now).animate({left:-widths});
                    imgs.eq(i).animate({left:0});
                    dots.eq(now).removeClass("active");
                    dots.eq(i).addClass("active");
                }
                now=next=i;
            })
    }

    banner(message1,num1,left1,right1,width1);//调用小轮播
    banner(message2,num2,left2,right2,width2);//调用小轮播
    banner(message3,num3,left3,right3,width3);//调用小轮播
    banner(message4,num4,left4,right4,width4);//调用小轮播


    //返回顶部
    let back=$(".box .back");
    console.log(back);
	back.click(function(){
		animate((document.body),{scrollTop:0});
		animate((document.documentElement),{scrollTop:0});
	})


	//倒计时
    function djs(spans){
    	setDate();
        setInterval(setDate,1000);
        function setDate(){
            let arr=fn();
            spans.each(function (i) {
                $(this).html(arr[i]);
            })
        }
        function fn() {
            let arr = [];
            let now = new Date();
            let future = new Date(2018,9,1,18,0,0);
            let time = Math.floor((future.getTime() - now.getTime()) / 1000);

            //月
            // let month = Math.floor(time / (30 * 24 * 60 * 60));
            // arr.push(month);
            // let day = Math.floor(time % (30 * 24 * 60 * 60) / (24 * 60 * 60));
            // arr.push(day);
            let hour = Math.floor(time % (30 * 24 * 60 * 60) % (24 * 60 * 60) / (60 * 60));
            arr.push(hour);
            let m = Math.floor(time % (30 * 24 * 60 * 60) % (24 * 60 * 60) % (60 * 60) / (60));
            arr.push(m);
            let s = Math.floor(time % (30 * 24 * 60 * 60) % (24 * 60 * 60) % (60 * 60) % (60));
            arr.push(s);

            return arr;
        }
    }
    let spans=$(".flashover ul li .time");
    djs(spans);

})