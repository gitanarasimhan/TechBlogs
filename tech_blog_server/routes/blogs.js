const express = require('express');
const posts = require('../resources/blogPosts');

const router = express.Router();
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://test:test@cluster0-x8icx.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;
var blogSchema = new mongoose.Schema({
    blog_post_date: "",
    blog_links: {
        article_link: "",
    },
    blog_tags: "",
    blog_title: "",
    blog_details: ""
});

router.get('/', function (req, res, next) {

    db.collection("users").find({}).toArray(function (err, result) {
        if (err) throw err;
        res.json(result);
    });

});

router.post("/", (req, res) => {
    console.log(req.body);
    var User = mongoose.model("User", blogSchema);

    var myData = new User(req.body);

    // save model to database
    myData.save()
        .then(serverport => {
            res.json('Server added successfully');
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});

module.exports = router;