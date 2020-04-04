var orm = require("../config/orm");

const burgers = {
    all: function(cb){
        orm.all("burgers", function(res){
            cb(res);
        });
    },

    create: function (cols, vals, cb){
        orm.create( cols, vals, function(res){
            cb(res);
        });
    },

    delete: function (condition, cb){
        orm.delete("burgers", condition, function(res){
            cb(res)
        });
    }
};

module.exports = burgers;