<h1 align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=600&size=24&pause=100&color=00FFFF&center=true&vCenter=true&width=400&lines=Media-DB;BY+INDIUZIN" alt="Typing SVG" />
</h1>

![53f53f43915ec28afa1346d9bb79e827](https://github.com/user-attachments/assets/8dc7183e-f8a8-4799-86d7-b210ef783e75)


<p align="center">
  🔹 Um banco de dados de mídia simples e eficaz, feito para servir imagens, vídeos e mais via API.
</p>

---

## 📦 Sobre o projeto

O **Media DB** é um repositório com arquivos de mídia (como imagens, vídeos, sons, etc) hospedados diretamente no GitHub. Ele serve como base para APIs ou sites que precisem acessar essas mídias facilmente por meio de um link direto ou rota aleatória.

---

## 🚀 Como funciona?

1. As mídias ficam organizadas em pastas como `imagens/`, `videos/`, etc.
2. A API desenvolvida com Express.js lê essas mídias e retorna links diretos.
3. O usuário pode consumir a rota `/media/imagem` ou `/media/video` para receber uma mídia aleatória.

---

## 📁 Estrutura de Pastas

📁 media-db/ ┣ 📁 imagens/ ┃ ┣ 📄 foto1.jpg ┃ ┗ 📄 foto2.jpg ┣ 📁 videos/ ┃ ┗ 📄 video1.mp4

---

## 🔗 Exemplos de uso

### ➤ Obter uma imagem aleatória:

GET /media/imagem

Resposta:
```json
{
  "url": "https://raw.githubusercontent.com/SEU-USUARIO/media-db/main/imagens/foto1.jpg"
}
```

---

🛠 Tecnologias utilizadas

Node.js + Express

GitHub como CDN de mídia

readme-typing-svg (para estilização do README)

JavaScript puro



---

✨ Autor

> Feito com 💙 por Indiuzin (zPlinyoX)
GitHub: @indiuzin




---

📜 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

---

### ✅ Pronto para colar no GitHub
