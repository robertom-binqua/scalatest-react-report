import lunr from "lunr"

test.skip('play with lunr ... url and title', () => {

    let documents = [{
        "ref": "1",
        "url": "http://this/that/main",
        "title": "Login page welcome",
        "body": ""
    }, {
        "ref": "2",
        "url": "http://bli/blo/blue",
        "title": "main content",
        "body": "<html lang=\"en\"><head>\n        <meta charset=\"UTF-8\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n        <title>Home</title>\n        <link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css\" rel=\"stylesheet\">\n    </head>\n    <body>\n        <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n            <div class=\"container-fluid\">\n                <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n                    <ul class=\"navbar-nav\">\n                        \n                            <li class=\"nav-item\">\n                                <a class=\"nav-link active disabled\" href=\"home.html\">Home</a>\n                            </li>\n                        \n                            <li class=\"nav-item\">\n                                <a class=\"nav-link \" href=\"page1.html\">Page1</a>\n                            </li>\n                        \n                            <li class=\"nav-item\">\n                                <a class=\"nav-link \" href=\"page2.html\">Page2</a>\n                            </li>\n                        \n                            <li class=\"nav-item\">\n                                <a class=\"nav-link \" href=\"page3.html\">Page3</a>\n                            </li>\n                        \n                            <li class=\"nav-item\">\n                                <a class=\"nav-link \" href=\"page4.html\">Page4</a>\n                            </li>\n                        \n                    </ul>\n                </div>\n            </div>\n        </nav>\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <main class=\"col-12\">\n                    <h1 class=\"h2\">this is the home body. Just for fun</h1>\n                </main>\n            </div>\n        </div>\n    \n</body></html>"
    }, {
        "ref": "3",
        "url": "http://localhost:8081/login.html?a=1g",
        "title": "User login here please pluto",
        "body": "Page 4\nHome\nPage1\nPage2\nPage3\nPage4\nthis is the body of page 4. Roberto is strong"
    }]

    let idx = lunr(function () {
        this.ref('ref')
        this.field('url')
        this.field('title')
        this.field('body')

        documents.forEach(function (doc) {
            this.add(doc)
        }, this)
    })

    let actualResult = idx.search("*Roberto*");
    console.log(actualResult)

    expect(JSON.stringify(actualResult)).toEqual([{"matchData": {"metadata": {"love": {"body": {}}}}, "ref": "1", "score": 0.288}]);
});


test.skip('play with lunr ... feature and scenario', () => {

    let documents = [{
        "ref": "1",
        "url": "http://this/that/main",
        "title": "Login page welcome",
    }, {
        "ref": "2",
        "url": "http://bli/blo/blue",
        "title": "main content",
    }]

    let idx = lunr(function () {
        this.ref('ref')
        this.field('url')
        this.field('title')

        documents.forEach(function (doc) {
            this.add(doc)
        }, this)
    })

    let actualResult = idx.search("*blo*");
    console.log(actualResult)

    expect(JSON.stringify(actualResult)).toEqual([{"matchData": {"metadata": {"love": {"body": {}}}}, "ref": "1", "score": 0.288}]);
});