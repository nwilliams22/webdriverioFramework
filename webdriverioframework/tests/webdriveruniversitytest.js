describe("Verify webdriveruniversity links on homepage", function(){
  it("check that contact us button opens correct page", function(done){
    return browser
      setViewportSize({
        width: 1200,
        height: 800
      })
      url('http://www.webdriveruniversity.com/')
      getTitle().then(function(title) {
        console.log('Title is: ' + title);
      })
      click("#contact-us")
      pause(3000)

  });
  
  it("login button opens login portal", function(done){
    return browser
      url('http://www.webdriveruniversity.com/')
      click('#login-portal')
      getTitle().then(function(title) {
        console.log('Title is: ' + title);
      })
  });
});
