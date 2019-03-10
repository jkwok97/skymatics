const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static(__dirname));

app.get('/skymatics-test', function (req, res) {
    res.sendFile(path.join(__dirname,'index.html'))
});

app.listen(PORT, function() {
    console.log("running on port 3001");
})

module.exports = app;
