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
- ESLint + Prettier

## Como instalar o projeto na sua máquina

### Clone o repositório

```bash
git clone https://github.com/PedritoFerrrari/api-pet-adoption-center.git
cd api-pet-adoption-center
npm install
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

## Documentação das Rotas

### Rotas Públicas

| Método | Endpoint          |
| ------ | ----------------- |
| `GET`  | `/pets/available` |
| `POST` | `/users`          |
| `POST` | `/login`          |

### Rotas Protegidas

#### - Usuários

| Método   | Endpoint               | Acesso                    |
| -------- | ---------------------- | ------------------------- |
| `GET`    | `/protected/users`     | `admin`                   |
| `GET`    | `/protected/users/:id` | `admin`, `adopter (dono)` |
| `PUT`    | `/protected/users/:id` | `admin`, `adopter (dono)` |
| `DELETE` | `/protected/users/:id` | `admin`                   |

#### - Pets

| Método   | Endpoint              | Acesso  |
| -------- | --------------------- | ------- |
| `GET`    | `/protected/pets/:id` | `admin` |
| `POST`   | `/protected/pets/`    | `admin` |
| `PUT`    | `/protected/pets/:id` | `admin` |
| `DELETE` | `/protected/pets/:id` | `admin` |

#### - Adoções

| Método | Endpoint               | Acesso    |
| ------ | ---------------------- | --------- |
| `GET`  | `/protected/adoptions` | `admin`   |
| `POST` | `/protected/adoptions` | `adopter` |
