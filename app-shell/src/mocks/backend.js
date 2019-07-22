const request = require('request');
const loadPilets = true;
const piletsUrl = 'http://localhost:9000/api/v1/pilet';

module.exports = function(ctx, req, res) {
  if (req.method === 'POST' && !req.url) {
    if (loadPilets) {
      return new Promise(resolve => {
        request(
          {
            url: piletsUrl,
            json: true,
          },
          (err, _, body) => {
            const pilets = err ? [] : body.items;
            resolve(
              res({
                content: JSON.stringify({
                  data: {
                    pilets,
                  },
                }),
              }),
            );
          },
        );
      });
    } else {
      return res({
        content: JSON.stringify({
          data: {
            pilets: [],
          },
        }),
      });
    }
  }
};
