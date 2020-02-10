const sql = require('../db/backlogSQL');


module.exports = {

    getGame: async (req, res) => {

        try {
            let id = req.query.id;
            let gameData;

            if (id != null) {
                gameData = await sql.getGameById(id)
            }
            else {
                gameData = await sql.getAllGames();
            }
            res.statusCode = 200;
            res.json({ status: "OK", response: gameData });
        }
        catch (error) {
            res.statusCode = 400;
            res.json({ status: "NOT OK", response: error });
        }
    },
    postGame: async (req, res) => {

        try {
            let publisher = req.body.publisher;
            let developer = req.body.developer;
            let platform = req.body.platform;

            let checkPublisher = await sql.getPublisher(publisher);

            if (checkPublisher.length == 0) {
                await sql.createPublisher(publisher);
            }

            let checkDeveloper = await sql.getDeveloper(developer);

            if (checkDeveloper.length == 0) {
                await sql.createDeveloper(developer);
            }

            let checkPlatform = await sql.getPlatform(platform);

            if (checkPlatform.length == 0) {
                await sql.createPlatform(platform);
            }


            res.statusCode = 200;
            res.json({ status: "OK", response: checkPublisher });
        }
        catch (error) {
            res.statusCode = 400;
            res.json({ status: "NOT OK", response: error });
        }
    },
    getPublisher: async (req, res) => {

        try {
            let publisherName = req.query.publisherName;

            console.log("id", publisherName);
            let publishers;

            if (publisherName != null) {
                publishers = await sql.getPublisher(publisherName)
            }
            else {
                publishers = await sql.getAllPublishers();
            }
            res.statusCode = 200;
            res.json({ status: "OK", response: publishers });

        }
        catch (error) {
            res.statusCode = 400;
            res.json({ status: "NOT OK", response: error });
        }
    },
    postPublisher: async (req, res) => {

        try {

            let publisherName = req.body.publisher;
            let checkPublisher;

            if (publisherName != null) {
                checkPublisher = await sql.getPublisher(publisherName)
            }
            if (checkPublisher.length == 0) {

                let publisherAdded = await sql.createPublisher(publisherName);
                res.statusCode = 200;
                res.json({ status: "OK", response: publisherAdded, msg: "Publisher added" });
            }
            else {
                res.statusCode = 200;
                res.json({ status: "NOT OK" ,msg: "Publisher already in database" });
            }
            res.statusCode = 200;
            res.json({ status: "NOT OK", msg: "No data to be added" });

        }
        catch (error) {
            res.statusCode = 400;
            res.json({ status: "NOT OK", response: error });
        }
    },
    getDeveloper: async (req, res) => {

        try {
            let developerName = req.query.developerName;

            console.log("id", developerName);
            let developers;

            if (developerName != null) {
                developers = await sql.getDeveloper(developerName)
            }
            else {
                developers = await sql.getAllDevelopers();
            }
            res.statusCode = 200;
            res.json({ status: "OK", response: developers });

        }
        catch (error) {
            res.statusCode = 400;
            res.json({ status: "NOT OK", response: error });
        }
    },
    postDeveloper: async (req, res) => {

        try {

            let developerName = req.body.developer;
            let checkDeveloper;

            if (developerName != null) {
                checkDeveloper = await sql.getDeveloper(developerName)
            }
            if (checkDeveloper.length == 0) {

                let developerAdded = await sql.createDeveloper(developerName);
                res.statusCode = 200;
                res.json({ status: "OK", response: developerAdded, msg: "Developer added"});
            }
            else {
                res.statusCode = 200;
                res.json({ status: "NOT OK", msg : "Developer already in database" });
            }
            res.statusCode = 200;
            res.json({ status: "NOT OK", msg: "No data to be added" });

        }
        catch (error) {
            res.statusCode = 400;
            res.json({ status: "NOT OK", response: error });
        }
    },
    getPlatform: async (req, res) => {

        try {
            let platformName = req.query.platformName;

            console.log("id", platformName);
            let platforms;

            if (platformName != null) {
                platforms = await sql.getPlatform(platformName)
            }
            else {
                platforms = await sql.getAllPlatforms();
            }
            res.statusCode = 200;
            res.json({ status: "OK", response: platforms });

        }
        catch (error) {
            res.statusCode = 400;
            res.json({ status: "NOT OK", response: error });
        }
    },
    postPlatform: async (req, res) => {

        try {

            let platformName = req.body.platform;
            let company = req.body.company;
            let checkPlatform;

            if (platformName != null) {
                checkPlatform = await sql.getPlatform(platformName)
            }
            if (checkPlatform.length == 0) {

                let platformAdded = await sql.createPlatform(platformName, company);
                res.statusCode = 200;
                res.json({ status: "OK", response: platformAdded, msg: "Platform added"});
            }
            else {
                res.statusCode = 200;
                res.json({ status: "NOT OK", msg : "Platform already in database" });
            }
            res.statusCode = 200;
            res.json({ status: "NOT OK", msg: "No data to be added" });

        }
        catch (error) {
            res.statusCode = 400;
            res.json({ status: "NOT OK", response: error });
        }
    },
    postPurchaseInfo: async (req, res) => {
        
        try{

        }
        catch(error){
            
        }
    }
}