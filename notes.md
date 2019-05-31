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
* **Automation**: To use services that does not provide API automatically.
* **Testing**
    * Agnostic and reliable way of testing front-end (HTML+CSS+JS).
    * End2End Testing.


## Challenges

Web Browsers are one of the most complex pieces of software use widely by the people (maybe second only to operating systems).

Trying to harness and control a browser may prove a challenge in several ways:

* Performance
* Unreliability
* APIs out of our control


## How To
There are several ways of controlling a browser:

**Create a Fake Browser**  
Using a fake browser, implementing the same APIs that a browser would (html rendering, css parsing and js engine) but fully controlled through an API.

Examples: Phantom

**Use Webdriver**
Standard to control browsers. Implemented in several major browser

https://www.w3.org/TR/webdriver1/


**Use Browser-specific tools**

* Nightmarejs (uses electron)
* Puppeteer (uses chrome devtools)

### Tools

* [Puppeteer](https://github.com/GoogleChrome/puppeteer)
* [Wendigo](https://github.com/angrykoala/wendigo)
* [Cypress.io](https://www.cypress.io)
* [Nightwatch](https://nightwatchjs.org)
* [Nightmare](http://www.nightmarejs.org)


To Check: webdriverIO, PhantomJS, Selenium

## Workshop



## Examples




## Resources
