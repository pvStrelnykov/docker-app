<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>

  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Konfiguracja projektu

```bash
yarn
```

```bash
yarn build
```

```bash
docker-compose up
```

Aplikacja będzie dostępna pod adresem:
http://localhost:5300

Dokumentacja Swagger:
http://localhost:5300/api/docs

## Opis projektu
### Temat projektu:
Aplikacja internetowa do zarządzania użytkownikami, rolami oraz autoryzacją.


### Stos technologiczny:
- Node.js, 
- NestJS, 
- PostgreSQL, 
- Docker, 
- Docker Compose, 
- TypeScript, 
- Yarn


## Funkcjonalności:
 
### Zarządzanie użytkownikami (Users)
- POST /users - Tworzenie nowego użytkownika 
- GET /users - Pobieranie listy wszystkich użytkowników
- POST /users/role - Przypisywanie ról użytkownikom
- POST /users/ban - Blokowanie użytkownika

> POST /users/role - Przypisywanie ról użytkownikom nie jest możliwe, jeśli rola nie została utworzona.

> POST /users - Podczas tworzenia użytkownika może pojawić się błąd informujący, że rola ADMIN nie istnieje. 
> W porządku, użytkownik został utworzony, tylko tutaj POST /roles musisz utworzyć rolę ADMIN

### Roles - Zarządzanie rolami
- POST /roles - Tworzenie nowej roli
- GET /roles/{value} - Pobieranie roli na podstawie jej wartości.

### Autoryzacja (Auth)
- POST /auth/registration - Rejestracja nowego użytkownika.
- POST /auth/login - Logowanie użytkownika. 


