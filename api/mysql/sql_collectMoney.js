//引入相应模块
var mysql = require("mysql");

//定义数据库
var sql = mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"",
	database:"supermarket"
});

//连接数据库
sql.connect();

module.exports = {
	collect:function(table,data,callback){
		//查询数据库
		sql.query("select * from money where barCode = "+ data.barCode,function(err,results,fields){
			console.log(888,results);
			callback(results)
		})
	}
	
}