var supertest = require("supertest");
var should = require("should");
var assert = require('assert');

// This agent refers to PORT where program is runninng.

var server = supertest.agent("http://localhost:3000");

// UNIT test begin

describe("SAMPLE unit test",function(){

  // #1 should return home page

  it("should return array of users",function(done){

    // calling home page api
    server
      .get("/users")
      .expect("Content-type",/json/)
      .expect(200) // THis is HTTP response
      .end(function(err,res){
        should.not.exist(err);
        // HTTP status should be 200
        assert(res.status,200,"Response is incorrect");
        assert.equal(res.body.error, null);
        done();
      });
  });

});