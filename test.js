var assert = require('assert');
var mod = require("./index.js");

describe('Array', function () {
    describe('#indexOf()', function () {
        it("SQL string can't have ['] character.", function () {
            let _testing = "SELECT * FROM '' FROM'";
            let _expected = "SELECT * FROM  FROM";
            assert.equal(mod.sql(_testing), _expected, -1);
        });
        it("SQL string can't have DELETE word.", function () {
            let _testing = "SELECT * FROM DELETE FROMDELETE";
            let _expected = "SELECT * FROM  FROM";
            assert.equal(mod.sql(_testing), _expected, -1);
        });
        it("SQL string can't have DROP word.", function () {
            let _testing = "DROPSELECT * FROM DROP TABLE";
            let _expected = "SELECT * FROM  TABLE";
            assert.equal(mod.sql(_testing), _expected, -1);
        });
    });
});