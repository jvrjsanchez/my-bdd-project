const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert').strict;

let today;
let actualAnswer;

Given('today is Sunday', function () {
  today = 'Sunday';
});

When("I ask whether it's Friday yet", function () {
  actualAnswer = today === "Friday" ? "Yes" : "Nope";
});

Then('I should be told {string}', function (expectedAnswer) {
  assert.equal(actualAnswer, expectedAnswer);
});

