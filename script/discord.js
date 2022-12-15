// ---------------------------------------------
// note.com
// ---------------------------------------------
const axios = require('axios')
const path = require('path')

exports.post = function(webhook_url = "", content = "", botname = "bot") {
(async () => {
	if (webhook_url == ""){
		webhook_url = "https://discord.com/api/webhooks/959064686907768852/f0kxrKRJ10Fydc7z2wwlKD96FfLdtmOEU_YNsop_oOq0y5wUNSUc3iMTILV-vwAVHgPf"
	}
	const config = {
		headers: {
			'Accept': 'application/json',
			'Content-type': 'application/json',
		}
	}
	
	while(content.includes("_br_")){
		content = content.replace("_br_", "\n")
	}
	
    const res = await axios.post(webhook_url, {username: botname, content: content}, config)
    //console.log(res)
})();
}


// main
exports.execute = function(content = "", name = "通知bot", mode = "dev") {
(async () => {
	try {
		console.log("start")
	} catch (err) {
		// エラーが起きた際の処理
	} finally {
		console.log("done")
	}
})();
}