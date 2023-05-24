/* eslint-disable no-undef */
const assert = require('assert');

Feature('Test for Unlike Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('try to unliking restaurant', async ({ I }) => {
  I.amOnPage('/');

  I.waitForElement('.card a', 10);

  I.seeElement('.card a');
  const firstResto = locate('.card a').first();
  const firstRestoName = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.waitForElement('#likeButton', 5);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.waitForElement('.card', 20);
  I.seeElement('.card');
  const likedRestoName = await I.grabTextFrom('.card a');

  assert.strictEqual(firstRestoName, likedRestoName);

  I.click(firstResto);
  I.waitForElement('#likeButton', 10);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.wait(5);
  I.dontSeeElement('.card');
});
