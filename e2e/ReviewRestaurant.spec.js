/* eslint-disable no-undef */
const assert = require('assert');

Feature('Test for Review Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('Try to enter restaurant review', async ({ I }) => {
  const reviewText = 'e2e make an example';
  I.amOnPage('/');
  I.waitForElement('.card a', 10);
  I.seeElement('.card a');

  const firstResto = locate('.card a').first();
  I.click(firstResto);

  I.waitForElement('.form-review', 10);
  I.seeElement('.form-review');
  I.fillField('#inputName', 'i am e2e tester');
  I.fillField('#inputReview', reviewText);
  I.click('.submitReview');

  I.waitForElement('.review', 10);

  const lastReview = locate('.review p').last();
  const lastReviewText = await I.grabTextFrom(lastReview);

  assert.strictEqual(reviewText, lastReviewText);
});
