# REST API for Book Seller
Restful API use Spring Boot and the details are Spring Web, Spring Data, Spring Security, PostgrSQL, JPA, Lombok, JJWT.

## Database Configuration
Database configuration on docker
```bash 
## Make container docker
$ docker run --name postgresql -e POSTGRES_PASSWORD=gusrylmubarok -p 5432:5432 -d postgres:14 

## Make User and Database 
$ docker exec -it postgresql bash
> psql -U postgres 
> CREATE USER admin WITH PASSWORD 'yG@AzRf8k[]!=Fy*'; 
> CREATE DATABASE db_book;
> GRANT ALL PRIVILEGES ON DATABASE db_book to admin;

```

## Step in Development
1. Create Spring Project
2. Setup application.properties
3. Make Model
    - User,
    - Role,
    - Book,
    - PurchaseHistory.
4. Make Repository
    - IUserRepository,
    - IBookRepository,
    - IPurchaseItem,
    - IPurchaseHistoryRepository.
5. Make Service
    - IUserService,
    - UserService,
    - IBookService,
    - BookService,
    - IPurchaseHistoryService,
    - PurchaseHistoryService.
6. Make Security
    - CustomUserDetailsService,
    - SecurityUtils,
    - UserPrincipal,
    - SecurityConfig
7. Make JWT
    - IJwtProvider,
    - JwtProvider,
    - SecurityUtils,
    - JwtAuthorizationFilter
8. Make Login and Sign Up
    - IAuthenticationService,
    - AuthenticationService
9. Rest Controller
    - AuthenticationController,
    - Internal API,
    - BookController,
    - PurchaseController
10. Test Application
    - BookSellerAPITest
11. Development, Production Configuration
    - Setting Spring Profiles
12. Deployment
```bash
   app.json => gradle build
   Procfile => java --jar path
   system.properties => version system
```
## Endpoints

### Sign-Up
```
POST /api/authentication/sign-up HTTP/1.1
Host: localhost:8080
Content-Type: application/json

{
    "name": "user",
    "username": "user",
    "password": "user"
}
```

### Sign-In
```
POST /api/authentication/sign-in HTTP/1.1
Host: localhost:8080
Content-Type: application/json

{
    "username": "user",
    "password": "user"
}
```

### Make-admin
```
PUT /api/internal/make-admin/admin HTTP/1.1
Host: localhost:8080
Authorization: Bearer InternalApiKey1234!
```

### Save Book
```
POST /api/book HTTP/1.1
Host: localhost:8080
Authorization: Bearer ...admin
Content-Type: application/json
Content-Length: 119

{
    "title": "Test Book 2",
    "price": 10,
    "description": "Test description 2",
    "author": "Test author 2"
}
```

### Delete Book
```
DELETE /api/book/2 HTTP/1.1
Host: localhost:8080
Authorization: Bearer ...admin
```

### Get All Books
```
GET /api/book HTTP/1.1
Host: localhost:8080
```

### Save Purchase
```
POST /api/purchase-history HTTP/1.1
Host: localhost:8080
Authorization: Bearer ...user or admin
Content-Type: application/json
Content-Length: 53

{
    "userId": 3,
    "bookId": 1,
    "price": 10
}
```

### Get User Purchases
```
GET /api/purchase-history HTTP/1.1
Host: localhost:8080
Authorization: Bearer ...user or admin
```
