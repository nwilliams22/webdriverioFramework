describe("Verify webdriveruniversity links on homepage", function(){
  it("check that contact us button opens correct page", function(done){
      browser.setViewportSize({
        width: 1200,
        height: 800
      })
      browser.url('http://www.webdriveruniversity.com/')
      var title = browser.getTitle()
      console.log('Title is: ' + title);
      browser.click("#contact-us")
      browser.pause(3000)
  });

  it("login button opens login portal", function(done){
      browser.url('http://www.webdriveruniversity.com/')
      browser.click('#login-portal')
      var title = browser.getTitle()
      console.log('Title is: ' + title);
      browser.pause(3000)
  });
});
