function clickElement(el) {
  if (!el) return;

  const rect = el.getBoundingClientRect();

  const x = rect.left + rect.width / 2 + (Math.random() * 4 - 2);
  const y = rect.top + rect.height / 2 + (Math.random() * 4 - 2);

  setTimeout(() => {
    chrome.runtime.sendMessage({ x, y });
  }, Math.random() * 100);
}
//紅綠燈
var k3 = function(){
	var kk3 = setInterval(function(){
		if(document.getElementsByClassName("h-8 w-full next-color-box text-black-dark display-font justify-center items-center font-bold text-sm uppercase relative")[0] !== undefined){
			if(document.getElementsByClassName("h-8 w-full next-color-box text-black-dark display-font justify-center items-center font-bold text-sm uppercase relative")[0].getElementsByTagName('span')[0].textContent === '!'){
				//document.getElementsByClassName("flex-row w-full mb-16 justify-between opacity-90")[0].children[2].style.display = 'block';
				//const rect = document.getElementsByClassName("flex-row w-full mb-16 justify-between opacity-90")[0].children[2].getBoundingClientRect();
				clickElement(
				  document.getElementsByClassName("flex-row w-full mb-16 justify-between opacity-90")[0].children[2]
				);
				//document.getElementsByClassName("flex-row w-full mb-16 justify-between opacity-90")[0].children[1].style.display = 'none';
				//document.getElementsByClassName("flex-row w-full mb-16 justify-between opacity-90")[0].children[0].style.display = 'none';
			}
			else if(document.getElementsByClassName("h-8 w-full next-color-box text-black-dark display-font justify-center items-center font-bold text-sm uppercase relative")[0].getElementsByTagName('span')[0].textContent === '@'){		
				//const rect = document.getElementsByClassName("flex-row w-full mb-16 justify-between opacity-90")[0].children[1].getBoundingClientRect();
				clickElement(
				  document.getElementsByClassName("flex-row w-full mb-16 justify-between opacity-90")[0].children[1]
				);
				//document.getElementsByClassName("flex-row w-full mb-16 justify-between opacity-90")[0].children[1].style.display = 'block';
				//document.getElementsByClassName("flex-row w-full mb-16 justify-between opacity-90")[0].children[0].style.display = 'none';
				//document.getElementsByClassName("flex-row w-full mb-16 justify-between opacity-90")[0].children[2].style.display = 'none';
			}
			else{
				//const rect = document.getElementsByClassName("flex-row w-full mb-16 justify-between opacity-90")[0].children[0].getBoundingClientRect();
				clickElement(
				  document.getElementsByClassName("flex-row w-full mb-16 justify-between opacity-90")[0].children[0]
				);
				//document.getElementsByClassName("flex-row w-full mb-16 justify-between opacity-90")[0].children[0].style.display = 'block';
				//document.getElementsByClassName("flex-row w-full mb-16 justify-between opacity-90")[0].children[2].style.display = 'none';
				//document.getElementsByClassName("flex-row w-full mb-16 justify-between opacity-90")[0].children[1].style.display = 'none';
			}
		}
		else{
			clearInterval(kk3);
			k1();
		}
	}, 20);
}
//神經電路覆寫 連連看
var k4 = function(){
	let p = document.getElementsByClassName("absolute transform -translate-x-1/2 -translate-y-1/2");
	let a = '';
	let aa = new Array(p.length);
	for(let i = 0; i < p.length; i+=1){
		setTimeout(function(){
			/*const rect = p[i].getBoundingClientRect();
			const x = rect.left + rect.width / 2;
			const y = rect.top + rect.height / 2;*/
			clickElement(
				p[i]
			);
			a += p[i].textContent[0];
		}, 100*i);
	}
	setTimeout(function(){
		for(let i = 0; i < p.length; i+=1){
			aa[a[i]-1] = i;
		}
		const rect = p[0].getBoundingClientRect();
		clickElement(p[0]);
		//alert(aa);
		for(let i = 0; i < p.length; i+=1){
			setTimeout(function(){
				//const rect = p[parseInt(aa[i])].getBoundingClientRect();
				clickElement(p[parseInt(aa[i])]);
			}, 500+i*100);
		}
	}, 500);
	setTimeout(function(){
		k1();
	}, 1000*p.length);
}
//攔截有效的數據封包 音遊
var k5 = function(){
	var kk5 = setInterval(function(){
		if(document.getElementsByClassName("text-sm opacity-80 font-mono tracking-wide")[0] !== undefined && /攔截有效的數據封包/.test(document.getElementsByClassName("text-sm opacity-80 font-mono tracking-wide")[0].textContent)){
			if(document.getElementsByClassName("absolute left-1/2 cursor-pointer -translate-x-1/2 h-16 w-16 pointer-events-auto border-2 flex items-center justify-center text-2xl backdrop-blur-sm bg-black border-secondary shadow-[0_0_20px_rgba(0,255,255,0.15),inset_0_0_10px_rgba(0,255,255,0.1)]")[0] != undefined){
				//const rect = document.getElementsByClassName("absolute left-1/2 cursor-pointer -translate-x-1/2 h-16 w-16 pointer-events-auto border-2 flex items-center justify-center text-2xl backdrop-blur-sm bg-black border-secondary shadow-[0_0_20px_rgba(0,255,255,0.15),inset_0_0_10px_rgba(0,255,255,0.1)]")[0].getBoundingClientRect();
				clickElement(document.getElementsByClassName("absolute left-1/2 cursor-pointer -translate-x-1/2 h-16 w-16 pointer-events-auto border-2 flex items-center justify-center text-2xl backdrop-blur-sm bg-black border-secondary shadow-[0_0_20px_rgba(0,255,255,0.15),inset_0_0_10px_rgba(0,255,255,0.1)]")[0]);
			}
		}
		else{
			clearInterval(kk5);
			k1();
		}
	}, 500);
}
//document.getElementsByClassName("text-5xl font-mono relative inline-flex items-center justify-center p-6 bg-emerald-950/50 text-emerald-400")[0].textContent
//document.getElementsByClassName("cursor-pointer text-3xl font-mono relative p-4 transition-colors duration-200 hover:bg-emerald-900/50 text-emerald-800")[].textContent
//解密 神經數據.exe 對圖片
var k6 = function(){
	var kk6 = setInterval(function(){
		if(document.getElementsByClassName("text-xl font-mono font-bold inline-block text-emerald-400")[0] !== undefined && /解密 神經數據.exe/.test(document.getElementsByClassName("text-xl font-mono font-bold inline-block text-emerald-400")[0].textContent)){
			let a = document.getElementsByClassName("text-5xl font-mono relative inline-flex items-center justify-center p-6 bg-emerald-950/50 text-emerald-400")[0].textContent;
			let b = document.getElementsByClassName("cursor-pointer text-3xl font-mono relative p-4 transition-colors duration-200 hover:bg-emerald-900/50 text-emerald-800");
			for(var i = 0; i < b.length; i+=1){
				if(a==b[i].textContent){
					//const rect = b[i].getBoundingClientRect();
					clickElement(b[i]);
					break;
				}
			}
		}
		else{
			clearInterval(kk6);
			k1();
		}
	}, 20);
}
//記憶庫覆寫 九宮格
var k7 = function(){
	let a = document.getElementsByClassName("grid grid-cols-3 gap-2 w-full aspect-square mb-4 p-4 rounded-lg bg-black/20 backdrop-blur-sm border border-primary/20")[0].textContent;
	var kk7 = setInterval(function(){
		if(document.getElementsByClassName("text-2xl font-semibold relative display-font text-secondary")[0] !== undefined && /記憶庫覆寫/.test(document.getElementsByClassName("text-2xl font-semibold relative display-font text-secondary")[0].textContent)){
			//let a = document.getElementsByClassName("text-5xl font-mono relative inline-flex items-center justify-center p-6 bg-emerald-950/50 text-emerald-400")[0].textContent;
			let b = document.getElementsByClassName("cursor-pointer text-3xl font-mono relative p-4 transition-colors duration-200 hover:bg-emerald-900/50 text-emerald-800");
			for(var i = 0; i < 9; i+=1){
				if(a[i]=='1' && '0'==document.getElementsByClassName("grid grid-cols-3 gap-2 w-full aspect-square mb-4 p-4 rounded-lg bg-black/20 backdrop-blur-sm border border-primary/20")[0].children[i].textContent){
					//const rect = document.getElementsByClassName("grid grid-cols-3 gap-2 w-full aspect-square mb-4 p-4 rounded-lg bg-black/20 backdrop-blur-sm border border-primary/20")[0].children[i].getBoundingClientRect();
					clickElement(document.getElementsByClassName("grid grid-cols-3 gap-2 w-full aspect-square mb-4 p-4 rounded-lg bg-black/20 backdrop-blur-sm border border-primary/20")[0].children[i]);
					break;
				}
			}
		}
		else{
			clearInterval(kk7);
			k1();
		}
	}, 20);
}
//打水母
setInterval(function(){
    if(document.getElementsByClassName("absolute items-center justify-center flex-1 w-full h-full text-black-dark ")[2]!==undefined){
		setTimeout(function(){
			var hp = document.getElementsByClassName("absolute items-center justify-center flex-1 w-full h-full text-black-dark ");
			hp = hp[hp.length - 1].textContent;
			var c = document.getElementsByClassName("mobile-clean-card w-full transform origin-center transition-transform  MobileCleanCard_card__6YGZv p-2 relative");
			if(hp.split(' / ')[1].split(',').join('') * person.recure * 0.01  >  hp.split(' / ')[0].split(',').join('')){
				for(var i = 0; i < 3; i++){
					if(person.fight[i]=='1'){
						if(!/快捷欄/.test(c[i].textContent)){
							//const rect = c[i].getBoundingClientRect();
							clickElement(c[i]);
						}
						break;
					}
				}
			}
			else{
				for(var i = 3; i < 6; i++){
					if(person.fight[i]=='1'){
						//const rect = c[i].getBoundingClientRect();
						clickElement(c[i]);
						break;
					}
				}
			}
		}, Math.floor(Math.random()*1000));
	}
}, 3000);
var k = 5;
//撿東西
setInterval(function(){
    if(k > 0 && document.getElementsByClassName("mobile-clean-card w-full transform origin-center transition-transform active:scale-[0.98] MobileCleanCard_card__6YGZv mb-2 p-2 pl-4 pr-4 flex-row items-center cursor-pointer mt-8 ")[0]!==undefined && document.getElementsByClassName("mobile-clean-card w-full transform origin-center transition-transform active:scale-[0.98] MobileCleanCard_card__6YGZv mb-2 p-2 pl-4 pr-4 flex-row items-center cursor-pointer mt-8 ")[0].textContent === '拿取全部物品'){
		k -= 1;
		setTimeout(function(){
			//const rect = document.getElementsByClassName("loading-background-front absolute top-0 left-0 w-full h-full bg-center bg-cover z-[-1] pointer-events-none")[0].getBoundingClientRect();
			clickElement(document.getElementsByClassName("loading-background-front absolute top-0 left-0 w-full h-full bg-center bg-cover z-[-1] pointer-events-none")[0]);
		},900+Math.floor((Math.random()*200)+1));
		if(document.getElementsByClassName("mobile-clean-card w-full transform origin-center transition-transform active:scale-[0.98] MobileCleanCard_card__6YGZv mb-2 p-2 pl-4 pr-4 flex-row items-center cursor-pointer mt-8 ")[0]!==undefined)
			k=0;
	}
	else if(document.getElementsByClassName("mobile-clean-card w-full transform origin-center transition-transform active:scale-[0.98] MobileCleanCard_card__6YGZv mb-2 p-2 pl-4 pr-4 flex-row items-center cursor-pointer mt-8 ")[0]===undefined){
		k = 5;
	}
}, 2000);
//刷新
setInterval(function(){
	var t=document.getElementsByClassName("relative ion-activatable cursor-pointer mt-2 flex flex-row items-center border border-primary-dark flex-grow-0 pl-4 pr-4 p-1")[0];
	if(t!==undefined&&/手動刷新/.test(t.textContent)){
		//const rect = t.getBoundingClientRect();
		clickElement(t);
	}
	var t1=document.getElementsByClassName("text-white justify-center items-center text-center p-6");
	if(t1[0]!=undefined&&/Uh oh, My bad.. Something went wrong/.test(t1[0].textContent)){
		location.reload();
	}
}, 1000);
var k1 = function(){
	var kk1 = setInterval(function(){
		if(document.getElementsByClassName("h-8 w-full next-color-box text-black-dark display-font justify-center items-center font-bold text-sm uppercase relative")[0] !== undefined){
			clearInterval(kk1);
			k3();
		}
		if(document.getElementsByClassName("mb-4 mt-2 text-center text-xl text-yellow-500 font-bold")[0] !== undefined && /神經電路覆寫/.test(document.getElementsByClassName("mb-4 mt-2 text-center text-xl text-yellow-500 font-bold")[0].textContent)){
			clearInterval(kk1);
			k4();
		}
		if(document.getElementsByClassName("text-sm opacity-80 font-mono tracking-wide")[0] !== undefined){
			clearInterval(kk1);
			k5();
		}
		if(document.getElementsByClassName("text-xl font-mono font-bold inline-block text-emerald-400")[0] !== undefined && /解密 神經數據.exe/.test(document.getElementsByClassName("text-xl font-mono font-bold inline-block text-emerald-400")[0].textContent)){
			clearInterval(kk1);
			k6();
		}
		if(document.getElementsByClassName("text-2xl font-semibold relative display-font text-secondary")[0] !== undefined && /記憶庫覆寫/.test(document.getElementsByClassName("text-2xl font-semibold relative display-font text-secondary")[0].textContent)){
			clearInterval(kk1);
			k7();
		}
	}, 1000);
}
k1();
//輸入數值
var input_value = function(x){
	new Promise((resolve, reject) => {
			//clickElement(document.getElementsByClassName("z-10 w-16 pl-2 text-sm bg-highlight-bright")[0]);
			//document.getElementsByClassName("z-10 w-16 pl-2 text-sm bg-highlight-bright")[0].value = parseInt(x);
			//clickElement(document.getElementsByClassName("z-10 w-16 pl-2 text-sm bg-highlight-bright")[0]);
			setTimeout(function(){
				if(document.getElementsByClassName("z-10 w-16 pl-2 text-sm bg-highlight-bright")[0]!=null && document.getElementsByClassName("z-10 w-16 pl-2 text-sm bg-highlight-bright")[0].value != parseInt(x)){
					document.getElementsByClassName("z-10 w-16 pl-2 text-sm bg-highlight-bright")[0].value = parseInt(x);
					clickElement(document.getElementsByClassName("z-10 w-16 pl-2 text-sm bg-highlight-bright")[0]);
					resolve("Success!");
				}
			},1000);
	});
	if(false) reject("failure reason");
}
//掛機
setInterval(function(){
			//ai
			if(person.ai=='1'){
				if(document.getElementsByClassName("relative ion-activatable cursor-pointer clickable mb-2")[0]!==undefined && /掛機機器人/.test(document.getElementsByClassName("relative ion-activatable cursor-pointer clickable mb-2")[0].textContent)){			
					var img=document.getElementsByClassName("display-font font-bold text-left w-full mt-1 bg-primary text-black-darker text-sm uppercase pl-2 pr-2")[0];
					if(img==undefined||!(/將所有進度圖示拖入框框內以啟動任務。/.test(img.textContent)))
					setTimeout(function(){
						//const rect = document.getElementsByClassName("relative ion-activatable cursor-pointer clickable mb-2")[0].getBoundingClientRect();
						clickElement(document.getElementsByClassName("relative ion-activatable cursor-pointer clickable mb-2")[0]);
						setTimeout(function(){
							location.reload();
						},10*60*1e+3);
						setTimeout(function(){
							var p=document.getElementsByClassName("mobile-clean-card w-full transform origin-center transition-transform active:scale-[0.98] MobileCleanCard_card__6YGZv mb-2 p-2 pl-4 pr-4 flex-row items-center cursor-pointer ");
							//const rect = p[p.length-1].getBoundingClientRect();
							clickElement(p[p.length-1]);
						},400+Math.floor((Math.random()*200)+1));
					},400+Math.floor((Math.random()*200)+1));
				}
			}
			//scavenge
			if(person.scavenge=='1'){
				if(document.getElementsByClassName("relative ion-activatable cursor-pointer clickable mb-2")[1]!==undefined && /搜索物資/.test(document.getElementsByClassName("relative ion-activatable cursor-pointer clickable mb-2")[1].textContent)){			
					var img=document.getElementsByClassName("display-font font-bold text-left w-full mt-1 bg-primary text-black-darker text-sm uppercase pl-2 pr-2")[0];
					if(img==undefined||!(/將所有進度圖示拖入框框內以啟動任務。/.test(img.textContent)))
					if(window.location.href=='https://cybercodeonline.com/tabs/map')
					(async function(){
						await new Promise((resolve, reject) => {
							setTimeout(function(){
								clickElement(document.getElementsByClassName("relative ion-activatable cursor-pointer clickable mb-2")[1]);
								resolve("Success!");
							},100+Math.floor((Math.random()*200)+1));
							if(false) {
								reject("failure reason");
							}
						});
						await input_value(person.scavenge_value);
						await new Promise((resolve, reject) => {
							setTimeout(function(){
								var p=document.getElementsByClassName("mobile-clean-card w-full transform origin-center transition-transform active:scale-[0.98] MobileCleanCard_card__6YGZv mb-2 p-2 pl-4 pr-4 flex-row items-center cursor-pointer ");
								clickElement(p[p.length-1]);
								resolve("Success!");
							},2600+Math.floor((Math.random()*200)+1));
							if(false) {
								reject("failure reason");
							}
						});
						/*await new Promise((resolve, reject) => {
							var t = setInterval(function(){
								console.log(count++);
								if(count > 3){
									clearInterval(t);
									resolve("Success!");
								}
							},100+Math.floor((Math.random()*200)+1));
							if(false) {
								reject("failure reason"); // 拒絕，回傳錯誤提示
							}
						});*///async/await使用方法
					})();	
					/*setTimeout(function(){
						//const rect = document.getElementsByClassName("relative ion-activatable cursor-pointer clickable mb-2")[0].getBoundingClientRect();
						clickElement(document.getElementsByClassName("relative ion-activatable cursor-pointer clickable mb-2")[1]);
						setTimeout(function(){
							location.reload();
						},10*60*1e+3);
						setTimeout(function(){
							var p=document.getElementsByClassName("mobile-clean-card w-full transform origin-center transition-transform active:scale-[0.98] MobileCleanCard_card__6YGZv mb-2 p-2 pl-4 pr-4 flex-row items-center cursor-pointer ");
							//const rect = p[p.length-1].getBoundingClientRect();
							input_value(person.scavenge_value);
							setTimeout(function(){
								clickElement(p[p.length-1]);
								//clickElement(document.getElementsByClassName("z-10 w-16 pl-2 text-sm bg-highlight-bright")[0]);
							},2000+Math.floor((Math.random()*200)+1));//確認時間>輸入數值
						},500+Math.floor((Math.random()*200)+1));//輸入數值
					},100+Math.floor((Math.random()*200)+1));//跳轉頁面*/
				}
			}
			//hash
			if(person.mining=='1'){
				if(err4>0){
					setTimeout(function(){
						location.reload();
					},10*60*1e+3);
					/*const rect = document.getElementsByClassName("absolute w-full h-full top-0 left-0 z-10 cursor-pointer")[0].getBoundingClientRect();
					const x = rect.left + rect.width / 2;
					const y = rect.top + rect.height / 2;
					chrome.runtime.sendMessage({ x, y });
					err4 = 0;*/
				}
				var p = document.getElementsByClassName("mobile-clean-card w-full transform origin-center transition-transform active:scale-[0.98] MobileCleanCard_card__6YGZv mb-2 p-2 pl-4 pr-4 flex-row items-center cursor-pointer");
				if(p.length!==0 && /開始/.test(p[p.length-1].textContent) && document.getElementsByClassName("relative ion-activatable cursor-pointer clickable mb-2")[4]!==undefined){
					//alert(p[p.length-1].getBoundingClientRect().top+"&"+p[p.length-1].getBoundingClientRect().height);
					//const rect = p[p.length-1].getBoundingClientRect();
					clickElement(p[p.length-1]);
					err4+=1;
				}
				else if(document.getElementsByClassName("relative ion-activatable cursor-pointer clickable mb-2")[4]!==undefined){
					err4 = 0;
					//const rect = document.getElementsByClassName("relative ion-activatable cursor-pointer clickable mb-2")[4].getBoundingClientRect();
					clickElement(document.getElementsByClassName("relative ion-activatable cursor-pointer clickable mb-2")[4]);
				}
			}
}, 3200);
var err4 = 0;
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/; domain=cybercodeonline.com";
}
function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
var person = {
	info:"info",
	fight:localStorage.getItem('a'),
	recure:localStorage.getItem('b'),
	ai:localStorage.getItem('c'),
	mining:localStorage.getItem('d'),
	scavenge:localStorage.getItem('e'),
	scavenge_value:localStorage.getItem('f'),
};
/*
alert(
	"request.action：" + person.action + '\n' +
	"request.fight：" + person.fight + '\n' +
	"request.recure：" + person.recure + '\n' +
	"request.ai：" + person.ai + '\n' +
	"request.mining：" + person.mining
);
*/
chrome.runtime.onMessage.addListener(
	function (request, sender, sendResponse) {
	    if (request.action == 'info') {
	        // 赋值
			//console.log("request.action：" + request.action);
			//console.log("request.fight：" + request.fight);
			//console.log("request.recure：" + request.recure);
			//console.log("request.ai：" + request.ai);
			//console.log("request.mining：" + request.mining);
			/*alert(
				"request.action：" + request.action + '\n' +
				"request.fight：" + request.fight + '\n' +
				"request.recure：" + request.recure + '\n' +
				"request.ai：" + request.ai + '\n' +
				"request.mining：" + request.mining
			);*/
			person = request;
	        window.fight = request.fight;
	        window.recure = request.recure;
	        window.ai = request.ai;
	        window.mining = request.mining;
			window.scavenge = request.scavenge;
	        window.scavenge_value = request.scavenge_value;
			localStorage.setItem("a", window.fight);
			localStorage.setItem("b", window.recure);
			localStorage.setItem("c", window.ai);
			localStorage.setItem("d", window.mining);
			localStorage.setItem("e", window.scavenge);
			localStorage.setItem("f", window.scavenge_value);
	        switch (window.fight) {
	            case '000001':
					//localStorage.setItem("a", "1");
					//a='1';
	            	// code...
	            	// 返回数据
                    sendResponse({
                        result: true
                    });
	                break;
				default:
					//localStorage.setItem("a", "0");
					//a='0';
	            	// code...
	            	// 返回数据
                    sendResponse({
                        result: true
                    });
	                break;
	        }
	    } else {
			person.action='info';
	        sendResponse(
				person
			);
	    }
	}
);