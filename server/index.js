const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('API is running');
});

if (require.main === module) {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
  });
}

module.exports = app;
