const app = require('./src/app');
const { port, host } = require('./config/serverConfig');
app.listen(port, host, () => console.log(`Server started http://${host}:${port}`));
