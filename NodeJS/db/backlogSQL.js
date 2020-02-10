var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'adminadmin',
    database: 'backlog_db',
    dateStrings: true
});

const getGame = (id) => {

    return new Promise((resolve, reject) => {

        let q = "SELECT * FROM game WHERE 1 = 1 "
        let params = [];

        if (id != null) {
            q += " AND idgame = ?"
            params.push(id);
        }

        connection.query(q, params, function (error, result, fields) {

            if (error) {
                console.log("error: ", error);
                reject(error);
            }
            else {
                console.log(result);
                resolve(result);
            }
        });
    });
}

const getPublisher = (publisher) => {

    return new Promise((resolve, reject) => {

        let q = "SELECT * FROM publisher WHERE 1 = 1 "
        let params = [];
        console.log("get", publisher)
        if (publisher != null) {
            q += " AND name = ? ";
            params.push(publisher);
        }
        console.log("q  ", q);
        connection.query(q, params, function (error, result, fields) {

            if (error) {
                console.log("error:", error);
                reject(error);
            }
            else {
                console.log(result);
                resolve(result);
            }
        });

    });
}

const createPublisher = (publisher) => {

    return new Promise((resolve, reject) => {

        let q = "INSERT INTO publisher (name) "
        let params = [];
       
        if (publisher != null) {
            q+= " VALUES(?) "
            params.push(publisher);
        }

        connection.query(q, params, function (error, result, fields){

            if(error){
                console.log("error: ", error);
                reject(error);
            }
            else{
                console.log("result: ", result);
                resolve(result);
            }
        });
    });
}

const getDeveloper = (developer) => {

    return new Promise((resolve, reject) => {

        let q = "SELECT * FROM developer WHERE 1 = 1 "
        let params = [];

        if (developer != null) {
            q += " AND name =  ? ";
            params.push(developer);
        }

        connection.query(q, params, function (error, result, fields) {

            if (error) {
                console.log("error:", error);
                reject(error);
            }
            else {
                console.log(result);
                resolve(result);
            }
        });

    });

}

const createDeveloper = (developer) => {

    return new Promise((resolve, reject) => {

        let q = "INSERT INTO developer (name) "
        let params = [];
       
        if (developer != null) {
            q+= " VALUES(?) "
            params.push(developer);
        }

        connection.query(q, params, function (error, result, fields){

            if(error){
                console.log("error: ", error);
                reject(error);
            }
            else{
                console.log("result: ", result);
                resolve(result);
            }
        });
    });
}

const getPlatform = (platform) => {

    return new Promise((resolve, reject) => {

        let q = "SELECT * FROM platform WHERE 1 = 1 ";
        let params = [];

        if(platform != null){
            q+= " AND name = ? ";
            params.push(platform);
        }

        connection.query(q, params, function(error, result, fieds){

            if(error){
                console.log("error: ",error);
                reject(error);
            }
            else{
                console.log("result: ", result);
                resolve(result);
            }
        });
    });
}

const createPlatform = (platform, company) => {

    return new Promise((resolve, reject) => {

        let q = "INSERT INTO platform (name, company) ";
        let params = [];

        if(platform != null){
            q+= " VALUES(?, ?) ";
            params.push(platform);
        }
        if(company != null){
            params.push(company);
        }

        connection.query(q, params, function(error, result, fields){

            if(error){
                console.log("error: ", error);
                reject(error);
            }
            else{
                console.log("result: ", result);
                resolve(result);
            }
        });
    });
}

const getSeller = () => {

}

const createGame = (data) => {

    return new Promise((resolve, reject) => {

        let q = `INSERT INTO game (name, published_year, platform_idplatform, developer_iddeveloper,
        publisher_idpublisher, purchase_info_idpurchase_info) `;

        if (data != null) {
            q += " VALUES(?, ?, ?, ?, ?, ?)"
        }
    });
}


module.exports = {
    getAllGames: () => {
        return getGame();
    },
    getGameById: (id) => {
        return getGame(id);
    },
    getPublisher: (publisher) => {
        return getPublisher(publisher);
    },
    getAllPublishers: () => {
        return getPublisher(null);
    },
    createPublisher: (publisher) => {
        return createPublisher(publisher);
    },
    getDeveloper: (developer) => {
        return getDeveloper(developer);
    },
    getAllDevelopers: () => {
        return getDeveloper(null);
    },
    createDeveloper: (developer) => {
        return createDeveloper(developer);
    },
    getPlatform: (platform) => {
        return getPlatform(platform);
    },
    getAllPlatforms: () => {
        return getPlatform(null)
    },
    createPlatform: (platform, company) => {
        return createPlatform(platform, company);
    }
}
