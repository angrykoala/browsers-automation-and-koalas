# Wendigo And Other Monsters
_@angrykoala_


## What is Browser Automation?

Controlling a web browser automatically with a script to emulate the actions of an user.

```js
browser.click("my-element")
browser.type("my-input", "My Text")
```

> **Philosophy** Instead of trying to talk to a system making it believe we are a browser, use a whole browser.

### Why?

* **Web Scrapping**: When there is no public API and parsing HTML is not enough.
* **Automation**: To automatically use services that do not provide API.
* **Testing**
    * Agnostic and "reliable" way of testing front-end (html+css+js).
    * End2End Testing.

## Challenges

Web Browsers are one of the most complex pieces of software use widely by people.

Trying to control a browser may prove a challenge in several ways:

* Performance.
* Unreliability (race conditions, bugs, complexity, ...).
* APIs out of our control.

## How To
There are several ways of controlling a browser:

**Create a Fake Browser**  
Implementing the same APIs that a browser would (html rendering, css parsing and js engine) but fully controlled through an API.

_Examples_: Phantom

**Use Webdriver**
Standard to control browsers. Implemented in several major browser

https://www.w3.org/TR/webdriver1/

**Use Browser-specific tools**

* Nightmarejs (uses electron)
* Puppeteer (uses chrome devtools)

### Tools
Usually, we will use more accessible tools

* [Puppeteer](https://github.com/GoogleChrome/puppeteer)
* [Cypress.io](https://www.cypress.io)
* [Nightwatch](https://nightwatchjs.org)
* [Nightmare](http://www.nightmarejs.org)
* [Wendigo](https://github.com/angrykoala/wendigo)


To Check: webdriverIO, PhantomJS, Selenium

## Workshop

Test desatranques jaen shop


## Examples




## Resources

https://github.com/angrykoala/wendigo
https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md
https://realpython.com/modern-web-automation-with-python-and-selenium
https://dev.to/angrykoala/i-needed-browser-automation-for-testing-so-i-obviously-wrote-my-own-tool-1939
