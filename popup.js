var start=function(){
	if(localStorage.getItem('a')==null||localStorage.getItem('a').length!=6){
		localStorage.setItem("a", "000000");
	}
	for(var i = 0; i < 6; i++){
		if(localStorage.getItem('a')[i]=='0'){
			document.querySelector('#fight'+i).style.borderRight='50px solid red';
			document.querySelector('#fight'+i).style.borderLeft='';
			document.querySelector('#fight'+i).innerText='關閉';
		}
		else{
			document.querySelector('#fight'+i).style.borderRight='';
			document.querySelector('#fight'+i).style.borderLeft='50px solid green';
			document.querySelector('#fight'+i).innerText='開啟';
		}
		document.getElementById('fight'+i).addEventListener('click',function(){
			//console.log(getCookie('a'));
			var s = localStorage.getItem('a');
			s = s.split('');
			console.log(localStorage.getItem('a'));
			if(localStorage.getItem('a')[parseInt(this.id[5])]=='1'){
				this.style.borderRight='50px solid red';
				this.style.borderLeft='';
				this.innerText='關閉';
				s[parseInt(this.id[5])] = '0';
				s = s.join('');
				localStorage.setItem("a", s);
				//setCookie('a', '0', 900);
			}
			else{
				for(var j = 0; j < 3; j++){
					console.log(j);
					s[3*parseInt(this.id[5]/3) + j] = '0';
					document.querySelector('#fight'+(3*parseInt(this.id[5]/3) + j)).style.borderRight='50px solid red';
					document.querySelector('#fight'+(3*parseInt(this.id[5]/3) + j)).style.borderLeft='';
					document.querySelector('#fight'+(3*parseInt(this.id[5]/3) + j)).innerText='關閉';
				}
				this.style.borderRight='';
				this.style.borderLeft='50px solid green';
				this.innerText='開啟';
				s[parseInt(this.id[5])] = '1';
				s = s.join('');
				localStorage.setItem("a", s);
				//setCookie('a', '1', 900);
			}
			info.fight = localStorage.getItem('a');
			// 获取具有指定属性的所有标签页，active: true 标签页在窗口中是否为活动标签页；currentWindow 标签页是否在当前窗口中。
			chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
				// 取出当前标签页的 tag_id, 发送一个消息出去, 同时带上回调函数
				chrome.tabs.sendMessage(tabs[0].id, info, function (response) {
					// 回调函数(传回的信息)
					if (response.result) {
						// 关闭 popup.html 页面
						//window.close();
						console.log(response.result);
					} else {
						console.log(response.note);
					}
				});
			});
		});
	}
}
start();
if(localStorage.getItem('c')=='0'){
	document.querySelector('#mining').style.borderRight='50px solid red';
	document.querySelector('#mining').style.borderLeft='';
	document.querySelector("#mining").innerText='關閉';
}
else{
	document.querySelector('#mining').style.borderRight='';
	document.querySelector('#mining').style.borderLeft='50px solid green';
	document.querySelector("#mining").innerText='開啟';
}if(localStorage.getItem('d')=='0'){
	document.querySelector('#ai').style.borderRight='50px solid red';
	document.querySelector('#ai').style.borderLeft='';
	document.querySelector("#ai").innerText='關閉';
}
else{
	document.querySelector('#ai').style.borderRight='';
	document.querySelector('#ai').style.borderLeft='50px solid green';
	document.querySelector("#ai").innerText='開啟';
}
document.getElementById('valuebar').value = localStorage.getItem('b');
document.getElementById('valuebar1').value = localStorage.getItem('b');
for(var i of document.getElementsByTagName('span')){
	i.style.font='bold 18px sans-serif';
}
for(var i of document.getElementsByTagName('button')){
	i.style.width='100px';
}
document.getElementById('ai').addEventListener('click',function(){
	if(localStorage.getItem('d')=='1'){
		document.querySelector('#ai').style.borderRight='50px solid red';
		document.querySelector('#ai').style.borderLeft='';
		document.querySelector("#ai").innerText='關閉';
		localStorage.setItem("d", "0");
	}
	else{
		document.querySelector('#ai').style.borderRight='';
		document.querySelector('#ai').style.borderLeft='50px solid green';
		document.querySelector("#ai").innerText='開啟';
		localStorage.setItem("d", "1");
	}
	info.ai = localStorage.getItem('d');
	// 获取具有指定属性的所有标签页，active: true 标签页在窗口中是否为活动标签页；currentWindow 标签页是否在当前窗口中。
	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		// 取出当前标签页的 tag_id, 发送一个消息出去, 同时带上回调函数
		chrome.tabs.sendMessage(tabs[0].id, info, function (response) {
			// 回调函数(传回的信息)
			if (response.result) {
				// 关闭 popup.html 页面
				//window.close();
				console.log(response.result);
			} else {
				console.log(response.note);
			}
		});
	});
});
document.getElementById('mining').addEventListener('click',function(){
	if(localStorage.getItem('c')=='1'){
		document.querySelector('#mining').style.borderRight='50px solid red';
		document.querySelector('#mining').style.borderLeft='';
		document.querySelector("#mining").innerText='關閉';
		localStorage.setItem("c", "0");
	}
	else{
		document.querySelector('#mining').style.borderRight='';
		document.querySelector('#mining').style.borderLeft='50px solid green';
		document.querySelector("#mining").innerText='開啟';
		localStorage.setItem("c", "1");
	}
	info.mining = localStorage.getItem('c');
	// 获取具有指定属性的所有标签页，active: true 标签页在窗口中是否为活动标签页；currentWindow 标签页是否在当前窗口中。
	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		// 取出当前标签页的 tag_id, 发送一个消息出去, 同时带上回调函数
		chrome.tabs.sendMessage(tabs[0].id, info, function (response) {
			// 回调函数(传回的信息)
			if (response.result) {
				// 关闭 popup.html 页面
				//window.close();
				console.log(response.result);
			} else {
				console.log(response.note);
			}
		});
	});
});
// 获取具有指定属性的所有标签页，active: true 标签页在窗口中是否为活动标签页；currentWindow 标签页是否在当前窗口中。
chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
	// 取出当前标签页的 tag_id, 发送一个消息出去, 同时带上回调函数
	info.action='info';
	chrome.tabs.sendMessage(tabs[0].id, info, function (response) {
		// 回调函数(传回的信息)
		if (response.result) {
			// 关闭 popup.html 页面
			//window.close();
			console.log(response.result);
		} else {
			info = response;
			document.getElementById('valuebar').value=info.recure;
			document.getElementById('valuebar1').value=info.recure;
			console.log(info);
		}
	});
});
var info = {action:"info",fight:localStorage.getItem('a'), recure:localStorage.getItem('b'), mining:localStorage.getItem('c'), ai:localStorage.getItem('d')};
document.getElementById('valuebar').addEventListener('input',function(){//拉條
	document.getElementById('valuebar1').value=this.value;
	localStorage.setItem("b", this.value);
	info.recure=localStorage.getItem('b');
	// 获取具有指定属性的所有标签页，active: true 标签页在窗口中是否为活动标签页；currentWindow 标签页是否在当前窗口中。
	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		// 取出当前标签页的 tag_id, 发送一个消息出去, 同时带上回调函数
		chrome.tabs.sendMessage(tabs[0].id, info, function (response) {
			// 回调函数(传回的信息)
			if (response.result) {
				// 关闭 popup.html 页面
				//window.close();
				console.log(response.result);
			} else {
				console.log(response.note);
			}
		});
	});
});
document.getElementById('valuebar').addEventListener('focusout',function(){
});
document.getElementById('valuebar1').addEventListener('focusout',function(){//箱輸入失焦
	console.log('unfocus');
	var c = this.value;
	if(c=='') c=0;
	c = parseFloat(c);
	c = Math.max(c,0);
	c = Math.min(c,100);
	c = Number.isNaN(c) ? 0 : c;
	console.log(isNaN(c));
	document.getElementById('valuebar').value = c;
	document.getElementById('valuebar1').value = c;
	localStorage.setItem("b", document.getElementById('valuebar').value);
	info.recure=localStorage.getItem('b');
	// 获取具有指定属性的所有标签页，active: true 标签页在窗口中是否为活动标签页；currentWindow 标签页是否在当前窗口中。
	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		// 取出当前标签页的 tag_id, 发送一个消息出去, 同时带上回调函数
		chrome.tabs.sendMessage(tabs[0].id, info, function (response) {
			// 回调函数(传回的信息)
			if (response.result) {
				// 关闭 popup.html 页面
				//window.close();
				console.log(response.result);
			} else {
				console.log(response.note);
			}
		});
	});
});
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
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

function checkCookie() {
  let user = getCookie("username");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
    user = prompt("Please enter your name:", "");
    if (user != "" && user != null) {
      setCookie("username", user, 365);
    }
  }
}