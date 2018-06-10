const AssistantV1 = require('watson-developer-cloud/assistant/v1');
const express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');

const assistant = new AssistantV1({
  username: '066390d4-3cba-4a68-b01e-79669720a052',
  password: 'q4cKnjfNhsYm',
  url: 'https://gateway.watsonplatform.net/assistant/api',
  version: '2018-02-16',
});

router.post('/conversation/', (req, res) => {
  const { text, context = {} } = req.body;

  const params = {
    input: { text },
    workspace_id: '0f5855c9-dc6b-49bd-8773-d9d561d6ca80',
    context
  };

  assistant.message(params, (err, response) => {
    if (err) res.status(500).json(err);

    res.json(response);
  });
});

//app.listen(port, () => console.log(`Running on port ${port}`));
module.exports = router;