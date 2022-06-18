const pako = require('pako');

module.exports = function (app, addon) {

    // Root route. This route will serve the `atlassian-connect.json` unless the
    // documentation url inside `atlassian-connect.json` is set
    app.get('/', function (req, res) {
        res.format({
            // If the request content-type is text-html, it will decide which to serve up
            'text/html': function () {
                res.redirect('/atlassian-connect.json');
            },
            // This logic is here to make sure that the `atlassian-connect.json` is always
            // served up when requested by the host
            'application/json': function () {
                res.redirect('/atlassian-connect.json');
            }
        });
    });

  app.get('/view', addon.authenticate(), function (req, res) {
      res.render('workflow/view', {
        id: req.param('id')
      });
    }
  );

  app.get('/edit', addon.authenticate(), function (req, res) {
      res.render('workflow/edit', {
        id: req.param('id')
      });
    }
  );

  app.get('/create', function (req, res) {
      res.render('workflow/create', {
        
      });
    }
  );

  app.post('/compress',
    function (req, res) {
      console.log(req.url);
      console.log(req.body);

      var compressed = pako.deflate(req.body.functionConfig);
      var config = {
        "compressed": Array.from(compressed)
      }
      
      var encodedString = Buffer.from(JSON.stringify(config)).toString('base64');
      console.log(encodedString);

      res.status(200).json({
        data: encodedString
      });
    }
  );
           
  app.post('/triggered',
    function (req, res) {
      console.log(req.url);
      console.log(req.body);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.write('{"result":"whatever"}');
      res.end();
    }
  );

};
