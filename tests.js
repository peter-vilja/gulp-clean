/*global describe, before, it*/
'use strict';
var fs = require('fs');
var es = require('event-stream');
var gulp = require('gulp');
var clean = require('./');
var chai = require('chai');
var expect = chai.expect;

describe('gulp-clean plugin', function () {

  before(function () {
    var exists = fs.existsSync('tmp');
    if (!exists) { fs.mkdirSync('tmp'); }
  });

  function createTree(callback) {
    fs.mkdir('tmp/tree/', function () {
      fs.mkdir('tmp/tree/leaf', function () {
        fs.mkdir('tmp/tree/leaf/node', function () {
          fs.writeFile('tmp/tree/leaf/node/leaf.js', 'console.log("leaf")', function () {
            fs.mkdir('tmp/tree/leftleaf', function () {
              fs.writeFile('tmp/tree/leftleaf/leaf1.js', 'console.log("leaf")', function () {
                callback();
              });
            });
          });
        });
      });
    });
  }

  it('cleans test directory', function (done) {
    fs.mkdir('tmp/test', function () {
      gulp.src(['tmp/test'])
        .pipe(clean())
        .pipe(es.map(function () {
          fs.exists('tmp/test', function (exists) {
            expect(exists).to.be.false;
            done();
          });
        }));
    });
  });

  it('removes all from tree', function (done) {
    createTree(function () {
      gulp.src(['tmp/tree'])
        .pipe(clean())
        .pipe(es.map(function () {
          fs.exists('tmp/tree/leaf/node/leaf.js', function (exists) {
            expect(exists).to.be.false;
            done();
          });
        }))
        .pipe(es.map(function () {
          fs.exists('tmp/tree', function (exists) {
            expect(exists).to.be.false;
            done();
          });
        }));
    });
  });

  it('cannot remove current working directory', function (done) {
    gulp.src(['.'])
      .pipe(clean())
      .pipe(es.map(function () {
        fs.exists('./index.js', function (exists) {
          expect(exists).to.be.true;
          done();
        });
      }));
  });

  it('cannot delete anything outside working directory', function (done) {
    fs.exists('../safetoremove', function (exists) {
      if (!exists) {
        fs.mkdirSync('../safetoremove');
      }
      gulp.src(['../safetoremove'])
        .pipe(clean())
        .pipe(es.map(function () {
          fs.exists('../safetoremove', function (exists) {
            expect(exists).to.be.true;
            done();
          });
        }));
    });
  });
});