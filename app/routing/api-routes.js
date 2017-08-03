var path = require('path');

module.exports = function (app) {
    
    app.get('/api/matches', function (req, res) {
        res.sendFile(path.join(__dirname + '/.html'));
    })

    app.post('api/matches', function (req, res) {
        res.sendFile(path.join(__dirname + '/home.html'));
    })

}