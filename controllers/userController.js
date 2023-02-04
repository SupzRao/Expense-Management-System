const bodyParser = require("body-parser");

var urlencoded=bodyParser.urlencoded({extended:false});
module.exports = function   (app){

    app.get('/getuser', function (req, res) {
        console.log(req.url)
        if(req.query.id!=null)
        {
            console.log(req.query.id);
            res.send('Send user with id above');
        }else{
            res.send('Send all users');
        }
    });
    app.post('/adduser', urlencoded,function (req, res) {
        const obj = JSON.parse(JSON.stringify(req.body)); 
        console.log(obj);
        res.send(req.body);

    });
    app.delete('/deleteuser/:id', function (req, res) {
        console.log('Deleted '+req.params.id);
        res.send('Deleted user with id '+req.params.id)

    });
    app.put('/updateuser',urlencoded, function (req, res) {
        const obj = JSON.parse(JSON.stringify(req.body)); 
        console.log(obj);
        res.send('Updated');

    });
};