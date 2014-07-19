/******************************************************************************************
*这是综合设置，具体下面有解释，不懂百度呗
*******************************************************************************************/
var showFlagsPer={
// 显示国旗图标/IP位置  如：urlbar-icons、identity-box、TabsToolbar、nav-bar-customization-target等等
showLocationPos:"identity-box",
iconStyleWidth:"100%",//图标宽度限制(等比例限制高度)，原始大小请用 "100%",其他规格化大小：16px 24px 32px ......
iconType:"toolbarbutton",//按钮的类型，如：statusbarpanel、menu、image等
iconClass:"toolbarbutton-1 chromeclass-toolbar-additional",//Class设置，如：statusbarpanel-iconic等

//菜单弹出方向，不设置就默认,参考 https://developer.mozilla.org/en-US/docs/XUL/PopupGuide/Positioning
iconMenuPosition:"at_pointer",

// 是否启用本地图标
isFlagFoxFlags :false,

// 本地图标路径： profile\chrome\lib\flagfoxflags  注意格式（感谢flagfox扩展）
flagFoxFlags :"/lib/flagfoxflags/",

// 是否启用旧版本地国旗图标库，启用此项之后，使用网络图标的时候，会优先读取旧版lib图标库
libIcon:false,

// 旧版本地国旗图标库，相对路径： profile\chrome\lib\countryflags.js
libIconPath:"lib\\countryflags.js",

//毫秒,延迟时间，时间内未取得所选择查询源数据，就使用新淘宝询源
Inquiry_Delay:3500,

//网络图标地址，还有一个：http://www.1108.hk/images/ext/
BAK_FLAG_PATH:'http://www.razerzone.com/asset/images/icons/flags/',

//默认API，存入perfs，CZ：纯真、CZedu：波士顿大学、myip：MYIP.CN、sina：新浪、taobao：淘宝...
site:'CZ',

// 未知的国旗图标
Unknown_Flag:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABwUlEQVQ4jZWRMahScRjFL40REW9ojqaGhoaGprg0eL3//3fkj0pCDrYp2hARmRItjk4ND0EuSFMgSEQIiuMjEjdnwUGIvLdF+bxc/j6ut8X3eM9X7z3P+vE7nPMdw9gRgPdEdCSlPJRS3t+9Xyrbtp8A4FqtFmQyGQbARHRERAXLsg6uNADwMZ1O83q9jpbLZdjtdnW5XPa3Rksi+iqEeA7g5j8NFosFu64bRjuaz+dhu93WhULBB8AAXCll3TTNO6fweDx+qLWOwvACf06TySR0HCdQSjGAt2fjKwA8m83+6zCdTsNWqxXkcjkG4Nq2/ezUgIg+ZbNZ3mw25yDP88JOp6NLpdLJL/4AaAkhnu4+cFyv14MoiiJmjvr9vq5Wq34ikeBt7+8AXpimeevC8+Lx+D0APBgMdK/X08lk8gT6KaV8HYvF7l46nxDiJQD2PC+sVCo+Ef0A8ODK3c/0/5zP5/0gCCKlFBPRu2vD2/6/ms1mMBqNjgGwEOLxtWEhxCMAPBwOjx3H0UT02zCMG/vEf6OU4tVqFRWLRZ+IvuwVn4g+pFIpbjQawXbnV3sZWJZ1IKU8BDAhom+2bd/eh/8LEFU+M9Rx2boAAAAASUVORK5CYII=",

//本地文件图标
 File_Flag:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACf0lEQVQ4jX3S3UtTYQDH8QP9GV31T0TXKmLFiBGjmlPLt6RSyZc0kFCLcqEhXRQSeBNaDXFqw7em29yc23Fbvswdt7mztzPn5Gnu5cyxF/t1ERw8LvrBc/d8PzwXD0VRFMVz7+b5w+Eiz40gFVAiyQ4h6VPixPsacfdLEKYfx3t9iG73sBF7Vzd1fiqV7FImOoLC6SzOCjHwx2P45X+DA3sv8hktzvJrwsnx8wg7Olnq4jLRERSyGhSyGgBFAEUENluwZ36B0/g0ijkdCtkfyPML4OxP8V/gLwL4LA3Y1vcgsjOAPL+AXGoW2ZMphGzt/wAOLwJFeEy12FrtRPhnH7InU8iQCaRj4wjSraVAOvJWiHOZGfw+48Ho78GhbUXQ1o10bBypyEckQqPwWx+VAqnwkBBnkyoU80dwrshgX3qIgLUdidAo4qwSxDOIkK0NPlPzBxGQCLwSYp58xmnSjJ1lKTbn74M1t4B4BnHMPMfRbgcOt57gYL1R/Io4OyDEiegnkOB7bC1IYJ2T42CtXgg5exMIIfAa68UA8faJ4iOvEg7NdVjUt+HRVYOzNyFM1yG4IQchBJ61B2Igtt8rijlnP2xzlTBPSeDWyhDckCOwLoPfKAUhBG5DnRiIOrtEccDxDPRMBUzfqrC/LIXfKAVrkIA1SKBY8mFfXyMGuO12UeyztoFWl8P0tQLMokSIWYMEVRO7YHQKMRB0PBbFHlMzaHU5jJNlJYDPcAvOFblXBPg2GrVuYy1cegVcuhq4dHWg1eUwTN6Ac1EGRl8DRqeAa7UazpW73h3tnY6Sz2T+Lru8qbnZQM9UzFqmy9KasWuWL8NXWwyqyisll8/tD6KEcRuPWHf/AAAAAElFTkSuQmCC",
};
/******************************************************************************************
*这里是设置文字显示的，可以自定义多，“未知类型”就是不显示了，
*可以自己查看网站HTTP头尝试增加，另外也可以根据需要截取，只支持函数操作，当然前提你知道你要什么
*这个顺序就是显示顺序,自行调整，另：IP始终会显示，无论你设置中是否存在，但可以调整显示位置
*这里域名和IP是脚本自身就存在的，所以可以直接使用 ip host
*******************************************************************************************/
var showFlagStipSet=[
{
label:"域名：",
words:"host"
},
{
label:"网站IP：",
words:"ip"
},{
label:"服务器：",
words:"Server"
},{
label:"网站编码：",
words:"Content-Type",
regx:function(word){if (word.match("=")) {
					word = word.replace(/text\/html; charset=/ig, "").toUpperCase();
				} else word = "未知类型";
				return word;}
},{
label:"网站程序：",
words:"X-Generator"
},{
label:"网站语言：",
words:"X-Powered-By"
}]
/******************************************************************************************
child:[  ]内为当前菜单的下一级菜单配置
text 为运行参数，如果无需参数，直接删除text属性
exec 为打开路径，可以是任意文件和文件夹，支持相对路径，相对于配置文件夹；
文件夹不支持直接“\\”开头的相对路径，需要用“Services.dirsvc.get("ProfD", Ci.nsILocalFile).path”开头
oncommand 可以用function(){}；
=======================
除了以上属性外，可以自定义添加其他属性，如果快捷键accesskey等
=======================
{}, 为分隔条 
=======================
自带命令形式（其中ip为网站IP地址，host为网站域名。)：
如：ip为42.121.31.127，host为：bbs.kafan
----------
要打开http://www.cz88.net/ip/index.aspx?ip=42.121.31.127 可以使用以下形式
tooltiptext: 'http://www.cz88.net/ip/index.aspx?ip=',
oncommand: 'showFlagS.open(this.tooltipText, "ip");'
---------------------
要打开http://whois.domaintools.com/bbs.kafan.cn 可以使用以下形式
tooltiptext: 'http://whois.domaintools.com/',
oncommand: 'showFlagS.open(this.tooltipText, "host");'
=======================
如果设置了id属性，会尝试获取此id并移动，如果在浏览器中没有找到此id，则这个id就不会生效
*******************************************************************************************/
var showFlagSmenu = [{
	label: "IP",
	image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABEUlEQVQ4jZXTO0sDURAF4M9ojAQ0RDRRsRQEH5WgVSpFhAh2AUXFSjFg1CK+IIWNVX60xY5kzW5MPDAwO3PO3Jm5d8mijHP08RXWj1g5h58Rd3CDGqbDahHrjCvSwhWmcnJTkWuNElfQQzW+i2FVzEesGpxKXoHNaBGW0EQDD7jFXuQ6wc1gG+3wVyUzN3ERbZ9Frh3cDNbRRSFV4DRObGAhct3gZjCHDyxjESc4wE6KUw9OKa8AXOMw/BnJFRZS+WNcjhKTLOclxMMo4g0bfxUo4Nlg42ns41H+G/mFXbxiNhUr4R1b48TihHuDXZDMfjeJ+Adr+JT8A/XwV/5TAI4kMz8NdTMxZiTvvie5zlx8A5EhHDBDtuxxAAAAAElFTkSuQmCC",
	child: [{
		label: "纯真查询IP",
		tooltiptext: 'http://www.cz88.net/ip/index.aspx?ip=',
		oncommand: 'showFlagS.open(this.tooltipText, "ip");'
	}, {
		label: "MyIP.cn查询IP",
		tooltiptext: 'http://www.myip.cn/',
		oncommand: 'showFlagS.open(this.tooltipText, "ip");'
	},]
}, {
	label: "DNS",
	image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACE0lEQVQ4jZWTS0sbYRiFn01tu4/Qy2zMJj9FbSVN/RuiSLwsBIk7NxJkAk0FN8HIYKBduCiS4ZP8gCAaCAOCi1BHEGmaySjihTndJEOqtqUHvuU5cJ73O/C7XgAfgC/AGXDXe2fAVyADvOQPeg18SiaTwezsrBzHkTFG+/v7chxH2WxWqVSqC2wAbx+aXwG76XRaxhiFYaiHCsNQtVpNk5OTAr4BVt88BBQmJiZ0dHSkKIoemQfVbDb7IRu9yrxPJBLtarX6T3NftVpNlmV1gI8AlZmZGQVBIEnyfV+e5+n4+FidTkfn5+fyPE8nJye6urqK68zNzakHltPt7W1J0v39vQqFgmzbVqlUUj6fV7FY1NLSkmzblm3bMR/HcQT4ALfGmDhgfX1dxhg1Gg0tLi5qdXVVxhhdX19rZWVFzWZTkmSMEXD7ZEAul1O5XNbh4aFKpZKq1arCMNTy8rI8zxsMuAP4PlihWCyqXq/HwCqVihYWFrS2tqbNzc2Yw2CFnUGIFxcXury8jAPa7bZarZZ839fNzU0McX5+PoY4nkgkfvzvGZPJZHzGZ0B+bGxMBwcHfw2JokiNRkOZTEbA5/5HAhgGKqOjo9He3p6CIHgU1O125bqu0um0gF3gzcM9DAN5y7LaU1NT2trakuu6cl1X5XJZ09PTGhkZ+QnYve08qSFgHNjpEe7P+RSoAO+A54OGXzjAWh+7MNsJAAAAAElFTkSuQmCC",
	child: [{
		label: "Whois 查询",
		tooltiptext: 'http://whois.domaintools.com/',
		oncommand: 'showFlagS.open(this.tooltipText, "host");'
	}, {
		label: "DNS健康",
		tooltiptext: 'http://www.intodns.com/',
		oncommand: 'showFlagS.open(this.tooltipText, "host");'
	}, {
		label: "DNS信息",
		tooltiptext: 'http://www.robtex.com/dns/',
		oncommand: 'showFlagS.open(this.tooltipText, "host");'
	}, {
		label: "DNS域名",
		tooltiptext: 'http://dnsw.info/',
		oncommand: 'showFlagS.open(this.tooltipText, "host");'
	}]
}, {
	label: "搜索",
	image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAPCAYAAADtc08vAAABHklEQVQokZ3TPyjFURwF8I8/r5fyUhZRUoqJ/Q0Gg0lGZbJgsxmUiSR5+TOIkWJQBhkUFvUGGZVRBsmCPMJkUIZ7vbxfnidn/J57zj3f+/1efkYKAzhAAR94wylGUF9GRyTn8IBzrGAi1vJ4wjZafhLXYgavmEVTgs9gDPfYQUPSIItHLMY2ymE0XjKeJHK4QfsvYkKbeaHFIlI4wmGF27+wgPfvhTROsI/qPxhMC9MpogobuEBjBXENdnGbJAaFeQ9XMMgKk1hNEhns4Rp9ZcRdOItJO5Ox6tCGY9xhORp1owdTuMIler+LU8K2bQnL0Yz5eLgQ4xaEnjejYRFpTOIFa0r3vDUmGEI/OoRtLUEOz1hS4ZOUw7rwmv8SfwIjnjkY6akXagAAAABJRU5ErkJggg==",
	child: [{
		label: "类似网站",
		tooltiptext: 'http://www.similarsitesearch.com/cn/site/',
		oncommand: 'showFlagS.open(this.tooltipText, "host");'
	}, {
		label: "相似页面",
		oncommand: 'getBrowser().selectedTab = getBrowser().addTab ("http://www.google.com/search?q=related:"+content.location.href);'
	}, {
		label: "反向链接",
		tooltiptext: 'http://www.google.com/search?q=link:',
		oncommand: 'showFlagS.open(this.tooltipText, "host");'
	}, {
		label: "反向链接2",
		oncommand: function() {
			var url = content.location.href;
			var aURI = makeURI(url);
			var eTLDService = Components.classes["@mozilla.org/network/effective-tld-service;1"].
			getService(Components.interfaces.nsIEffectiveTLDService);
			var basedomain = eTLDService.getBaseDomain(aURI);
			getBrowser().selectedTab = getBrowser().addTab('http://www.google.co.jp/search?q=link:' + basedomain + '+-site:' + basedomain);
		}
	}, {
		label: "内部链接",
		oncommand: function() {
			var url = content.location.href;
			var aURI = makeURI(url);
			var eTLDService = Components.classes["@mozilla.org/network/effective-tld-service;1"].
			getService(Components.interfaces.nsIEffectiveTLDService);
			var basedomain = eTLDService.getBaseDomain(aURI);
			getBrowser().selectedTab = getBrowser().addTab('http://www.google.co.jp/search?q=link:' + basedomain + '+site:' + basedomain);
		}
	},]
}, {
	label: "黑名单",
	tooltiptext: 'http://rbls.org/',
	oncommand: 'showFlagS.open(this.tooltipText, "host");',
	image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAATklEQVQ4jc2RSQoAIAgA5/+ftkuBuCTSIQXBdXBBHoV5AECAMjYMoAuOrRsyfyspwMaiPNl4FUDV9QBBrg8wq1wP1L9B9QUHd7M35T9gAW7cCiGxw6gLAAAAAElFTkSuQmCC"
}, {
	label: "BuiltWith",
	tooltiptext: 'http://builtwith.com/',
	oncommand: 'showFlagS.open(this.tooltipText, "host");',
	image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABeElEQVQ4jWNgGPqgfVFrZd2cmpaV+5aFkWWAdKDYK05n5v9xzZHLKDbg3rN78m/fvuUjy4DY5sjl/O6c37ldWH8ltscufPbsGdfZG2f1Vh9YHbrnzB7HS/cvaaw+sDp0+7Et7lcfX1VZfWB16JajG70xDOB0Zv7P6cz8P6oxfEX5tNJuTmfm//a5NkfbF7VWcjoz/9eL17o2Zd3EbE5n5v8qYbKPUQyonlnaqRWjeovTmfk/pwvz37jmyGUEDZAPkXrK6cz8P6DadzMDAwPDpDUT8mCucMqzO0TQAM9St12czsz/uV1YfiW3x8+XD5F8zunM/J/Xnf1HVm/aDE5n5v/K4bKPQmr8N3I6M/+X9Bd6Hd0YvgImzrD37E4nbhfWXzBbYbhqVkXH+kNrAtDFkXFUY9gqBgYGBoZdp3Y5O+XaHRL1FfigF691feKqvnxYLNXOrGyVDRJ/YZSke2HV/lUhIdX+66QChN/6V3hvff78uShZaWdwAQAt8syRnVYeggAAAABJRU5ErkJggg=="
}, {
	label: "Alexa排名",
	tooltiptext: 'http://alexa.com/data/details/main?url=',
	oncommand: 'showFlagS.open(this.tooltipText, "host");',
	image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC3UlEQVQ4jW1TS0xTURC9fS0VQVpUBMQfKCKaoAsTE40aUBPjQmNiXLqQGHdGaF9baG1a0YoSFhoErBEh6sJoJBg/C6OSGNSoqAs3akSMb+59Ly2fgi1QKRwXPD5VJ5nN5J4zd+acYWxOHA4OWDfVaeU5PtFp9fBfZgfB7CRY3TS4xCsebahTDx+5oaWz/8XWBlG8/LRoT3XRqFEmSH+lUSakOnk0zy/atl0Wq5LAm+tFscVDL036Y4OdYHIQMtwcC6o5JPtUzShP1XN9orO0Wc3Xv91jzfaJeya9i1EmbLkYgvNBBJ7HQ2jsiqLu+TAKz2mQ5pDk+dWWyjvKfFZUK46ZHcqIUSYwO2HH5RDe/Yxj39UwLG6O9Rc0dH4bQ/unEaRX85lx5rv48MY6cYjl+HnXdGdmI1R0RBBPTOLg9T6wCgXspALXgwh6+saxvEadGcUoE3J94h6zuHlsmlWyE/LPqjh6ewCrAypWB1SUNYVxszuG7/3jWHkmmSDDTcRMjtmCUSaYZMKu5jBa3kTR+jaGio4Ibr2PoacvmUCSCVYPn2DznLNgSSYcvzuIz6FxnGgfxGKvAKtQUP1wCL39iX8ILB6KM6ub+qa1XniKo1uJo/VtDAYbgVUqyPIKPPkyht7+BJadVsFssw2tbvrCluoSSjIhvYqj49MoPtBvlDWFsedKGJde/ELbuxiUSALltwdQfF6DpEu58qwIspJ6dV+6i/olfYlFtRoCT4cRfB1F7bNh7G6ektN2P4LmV1FsbwjBYCdY3CRKG0PbWTDYnVIQEPUpDpo06i402AlmfbkGm25n3Z0GO8HspPE1AeEBIDHGGNt7TVmU6+OtZgclJDlZlbkpyQSzU4mvqFEbDrSEM5Lu4WBrb2ZhrVad6eE/Uhw08Tc4xUkTmR76ujagndgfFGn/vUi/3y/tbNBK1gRUb7aXP0lz0ce0KvqQ5RUPCwLcUdbE1zHGDHMxfwDuAj+ls3X/jQAAAABJRU5ErkJggg=="
}, {
	label: "安全查询",
	tooltiptext: 'http://webscan.360.cn/index/checkwebsite?url=',
	oncommand: 'showFlagS.open(this.tooltipText, "host");',
	image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACwklEQVQ4jWWTb2jVBRSGn3u597a7xKURJS1osQqCsBIWN2oQDCIS1HAxHFpcBA2KXC5xhWRIUWROvyRLazbaGItmIaGCazrcprvD1Wq52h+L5gaarLHa7p/t9/RhIjUfON/e97zvh3NgEZ93kth/mvqa41zZfBQ3tWJFCxMvHqV+xzFKFutvsLuFJe+e5MsP2vBId9z3j0esbsKnPsTVjZj4BB+txTVf0Fi+j/hN5s866ftjcplapN6t5ut8yIkJfOMgPrIPH9yL0VfxiY/p/d+SwcvhZi1WN6pvqZsNgsfNZZeYm8VgFk+1Y+FOjL2OVGLxezQA0NTLk1qgVqqn1GH1mNlM0tJdcUt3hsxOo39jx2m8rwZ5DuNV2NFFCX9N06h3qTvUEXVe7TM985qxTcgGTI+hV9E/8VIKDzfg1y3oeLgB5xjTZeoGg+Abs5ku0zN1Tk2u89bkQt2pEUwPYXYAg2F0EP0VHQ+NYo45g5j6kLnsWkt33WlkI8ZfwvwkhiqR9chqLN2CuR60Dx1Gx0MZzDDnHJq7xdz0csvezJMXFpJDlUgF8jyyBstewVwXega9gF4OZfAfxpxGr2EwidlrYdNXw079dj15PU71Y/oHzPZi0IW2o+fRH2OjTA7QMNKNh5txZhS9sjDpS8g6ZC2m+9F+tAftuN7ge5y/mFdPUyuJZ2txayM+vAfbTqC/Y/YXLKvGsirMXkBTaCfaHtKesF6MePK76CoAHthD8zMH8OkDeH8NtrVi8DPm+kLmesMGqYh2x/RMTM/HdbDAcz/dU3/jEhNVxCNb6Fv6Mt77DhbtxuqPcPZsVFNx7blNUyt0oFjHVlp7tqgr0bLoHxJVxKNJGihHksh2jFZjxd6oh75a7qffFrqt9XZXttxRf5P5v5QfpKTwberYxhDbI1ITN2//0qEVhwrqHjuSv2qx/l9L8AUMFODD3QAAAABJRU5ErkJggg=="
}, {
	label: "安全浏览",
	oncommand: "getBrowser().selectedTab = getBrowser().addTab ('http://google.com/safebrowsing/diagnostic?site=' +content.document.domain.replace('www.', ''));",
	image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABWUlEQVQ4jaXTPUvDQBgH8HyzkiCVdlBcFD+CDgUn0bU5rUMRS6mD4BuCVgfFKmitCl0s+FKhvoEgVvsyWKuRS9JLcvm7tcplSHW44e6e5/c8x91JAaKFZJXWFELRzZBVWgsQLST9JfknInlt9ExRJLMMqSOG67ID7gLb5xbG100h1hNIFyzM51gbu61wnN7Znl14Al+GC7LTas9nMi20bPgHPnUXmatOxbE1E89v3D8wd8DAbGBiw0R/XMfupY3RJcM/oBCKkUUDiUMGF/h1HN+AQiiC0xSa4aL04mBgVvcPTKZNbBYspHIMy3mGJnXx+s4xmBARAVg4Ybh4ctAb66wNJXSUGxx7RfEqBaDa5EgdMSEwmWXIlnwA+Qcb5QbHcLLTbjBGcfboILLq4yX2xXVsFSzUP1zcVzmOb2zsF21EVsRkhVD89zPVJTmqhWWV1rsGVFqRo1r4G6iM33AbQTj+AAAAAElFTkSuQmCC"
}];
/******************************************************************************************************************
*这里是查询源设置，可以自行按照示例添加，不限定于IP，可以是其他相关的API，只要是你想要显示的都可以
*myip和taobao为脚本内置，目前只支持myip菜单更换位置。
*另外可以设定image属性为菜单增加图标。
*******************************************************************************************************************/
var showFlagSsiteSource=[{
label:"纯真 查询源",//菜单中显示的文字
id:"CZ",//必须设定一个ID，以便脚本读取
inquireAPI:"http://www.cz88.net/ip/index.aspx?ip=",//查询接口
//docum是一个XMLHttpRequest();的req.responseText，（具体可以百度	XMLHttpRequest()）。传回的obj为最终要显示的结果样式等
regulation:function(docum) {
					var s_local, myip, myAddr;
					var addr_pos = docum.indexOf("AddrMessage");
					s_local = docum.substring(addr_pos + 13);
					s_local = s_local.substring(0, s_local.indexOf("<"));

					var myip_pos = docum.indexOf("cz_ip");
					myip = docum.substring(myip_pos + 7);
					myip = myip.substring(0, myip.indexOf("<"));

					var myAddr_pos = docum.indexOf("cz_addr");
					myAddr = docum.substring(myAddr_pos + 9);
					myAddr = myAddr.substring(0, myAddr.indexOf("<"));

					s_local = s_local.replace(/ +CZ88.NET ?/g, "");


					if (s_local) {
						if (myip) s_local = s_local+'\n'+'我的IP：' + myip;
						if (myAddr) s_local = s_local+'\n'+'我的地址：' +myAddr;
											var obj = {
						Site: s_local
					};
return obj;
					}else return null;
		}		
},{
label:"MyIP 查询源",
id:"myip",
},{
label:"新浪 查询源",
id:"sina",
inquireAPI:"http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=json&ip=",
regulation:function(docum){
					var responseObj = JSON.parse(docum);
					if (responseObj.ret == 1) {
						if (responseObj.isp !== '' || responseObj.type !== '' || responseObj.desc !== '')
							var addr = responseObj.country + responseObj.province + responseObj.city + responseObj.district + '\n' + responseObj.isp + responseObj.type + responseObj.desc;
						else
							var addr = responseObj.country + responseObj.province + responseObj.city + responseObj.district;
						var obj = {
							Site: addr
						};
return obj;
					}else return null;
					}
},{
label:"波士顿大学",
id:"CZedu",
inquireAPI:"http://phyxt8.bu.edu/iptool/qqwry.php?ip=",
regulation:function(docum){
					var s_local = docum;
					s_local = s_local.replace(/ +CZ88.NET ?/g, "");

					var obj = {
						Site: s_local
					};
					if (s_local) {
return obj;
					}else return null;
		}
},]