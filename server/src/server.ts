import express from 'express';

import { routes } from './routes';

// Get mostrar
// Post Cadastrar
// Pust atualizar de um cadastro
// Patch atualizar uma informação unica de um cadastro
// Delete para deletar

const app = express();

app.use(express.json()); // Começa entender json
app.use(routes);

app.listen(3333, () => {
  console.log('HTTP server running!');
  console.log('http://localhost:3333/');
});
