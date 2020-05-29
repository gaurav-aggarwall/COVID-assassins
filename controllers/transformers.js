const router = require('express').Router();

router.post('/', (req, res) => { 
	const spawn = require("child_process").spawn; 
	const process = spawn('python3', ["./hello.py", req.body.name]); 
	
	process.stdout.on('data', data => { 
		res.send(data.toString()); 
	});
	
	process.stdout.on('error', data => { 
		res.status(500).json('Can not fetch data, please try again.'); 
	});
});

module.exports = router;