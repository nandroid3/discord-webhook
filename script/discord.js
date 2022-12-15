// ---------------------------------------------
// note.com
// ---------------------------------------------
const axios = require('axios')

exports.post = function(webhook_url = "", content = "", botname = "bot") {
(async () => {
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
})();
}
