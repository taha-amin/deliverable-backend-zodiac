const { Router } = require('express');
const { zodiacs } = require('../../data/zodiacs');

module.exports = Router().get('/', (req, res) => {
  const match = zodiacs.map((zodiac) => {
    return { id: zodiac.id, name: zodiac.name };
  });
  res.json(match);
});
