require('./UPPERCASE/BOOT.js');

BOOT({
	CONFIG : {
		defaultBoxName : 'CRUDExample',
		isDevMode : true
	},
	SERVER_CONFIG : {
		dbName : 'CRUDExample-test',
		isNotRequireDBAuth : true
	}
});
