const express = require('express');
const multer = require('multer');
const axios = require('axios');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const app = express();
const upload = multer({ dest: 'uploads/' });
const PORT = process.env.PORT || 3000;

// Serve arquivos estáticos da pasta public/
app.use(express.static(path.join(__dirname, 'public')));

// Rota para a página HTML
app.get('/pagina', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Upload e envio para GitHub
app.post('/upload', upload.single('arquivo'), async (req, res) => {
  const file = req.file;
  if (!file) return res.send('Nenhum arquivo enviado.');

  const content = fs.readFileSync(file.path, { encoding: 'base64' });
  const fileName = file.originalname;
  const filePathGitHub = `uploads/${Date.now()}_${fileName}`;

  try {
    await axios.put(
      `https://api.github.com/repos/${process.env.GITHUB_USER}/${process.env.GITHUB_REPO}/contents/${filePathGitHub}`,
      {
        message: `upload: ${fileName}`,
        content: content
      },
      {
        headers: {
          Authorization: `token ${process.env.GITHUB_TOKEN}`,
          'User-Agent': 'Uploader'
        }
      }
    );

    const link = `https://raw.githubusercontent.com/${process.env.GITHUB_USER}/${process.env.GITHUB_REPO}/main/${filePathGitHub}`;
    res.send(`
      <p>✅ Enviado com sucesso!</p>
      <p><a href="${link}" target="_blank">Clique aqui para ver a mídia</a></p>
      <img src="${link}" width="300" onerror="this.style.display='none'">
    `);
  } catch (err) {
    console.error(err.response?.data || err);
    res.send('Erro ao enviar para o GitHub.');
  } finally {
    fs.unlinkSync(file.path); // remove temporário
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}/pagina`);
});
