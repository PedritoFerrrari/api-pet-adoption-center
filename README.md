# API Pet Adoption Center

API RESTful para gerenciar um sistema de adoção de pets, com autenticação de usuários e controle de animais disponíveis para adoção.

---

## Tecnologias utilizadas

- Node.js
- Express
- MySQL
- JWT
- BcryptJS
- Dotenv
- Helmet & CORS
- ESLint + Prettier


## 🛠️ Como instalar o projeto na sua máquina

### Clone o repositório

```bash
git clone https://github.com/PedritoFerrrari/api-pet-adoption-center.git
cd api-pet-adoption-center
npm install express mysql2 jsonwebtoken bcryptjs dotenv cors helmet
npm install --save-dev nodemon eslint prettier @eslint/js eslint-plugin-prettier eslint-config-prettier globals
```

### Configure as variaveis de ambiente

Crie um novo arquivo .env com base no arquivo de exemplo .env.example já incluído no projeto:

```bash
cp .env.example .env
```

Após isso, altere os valores para que eles reflitam seu ambiente de desenvolvimento.

### Inicialize o projeto em modo desenvolvimento
```bash
npm run dev
```