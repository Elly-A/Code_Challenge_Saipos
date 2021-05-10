const app = require('./Server');
const logger = require('./util/Logger');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => logger.log('info', `Acesse o endereço localhost:${PORT} para visualizar...`));
