var express = require('express'),
    employees = require('./routes/employees'),
    app = express();
app.use(express.static('www'));
// Created Directory "directory-react-nodejs-Harshal" into /var/www/html/
// CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests
//Commited On 20 Dec !!!!!
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});
app.get('/employees', employees.findAll);
app.get('/employees/:id', employees.findById);
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
