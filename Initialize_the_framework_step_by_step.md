# Springboot + angular + mariaDB
## Install mariaDB
```bash
#Update package index 
sudo apt update
#Install MariaDB server 
sudo apt install mariadb-server mariadb-client
#Start & enable MariaDB
sudo systemctl start mariadb
sudo systemctl enable mariadb
sudo systemctl status mariadb #should see active (running)
#Secure the installation
sudo mysql_secure_installation

#Recommended answers for development:
Switch to unix_socket authentication [Y/n] Y
Change the root password? [Y/n] n
Remove anonymous users? → Y
Disallow root login remotely? → Y
Remove test database? → Y
Reload privilege tables? → Y

#Log in to MariaDB
sudo mysql
```
```sql
#Create database and user
CREATE DATABASE mariadb
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

CREATE USER 'user'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON mariadb.* TO 'user'@'localhost';
FLUSH PRIVILEGES;
```
```bash
#Test:
mysql -u user -p -h localhost mariadb
```
## Init spring boot

### 1.Init jdk21
```bash
# use apt install openjdk21
sudo apt install openjdk-21-jdk

# check if it works
java -version
```

### 2.1.Use [spring initializr](https://start.spring.io/) to get a infrastructure

- Project: Gradle-Kotlin Project
- Language: Java
- Spring Boot: 4.0.1
- Project Metadata:
	- Group: com.example
	- Artifact: demo
	- Name: demo
	- Package name: com.example.demo
	- Packaging: Jar
	- Configuration: YAML
	- Java: 21
- Dependencies:
	- Spring Web
	- Spring Data JPA
	- MariaDB Driver
	- Spring Boot Actuator

Use GENERATE button blow to download the zip file.Then unzip the folder into your project root.

### 2.2.config the [application.yaml file](/demo/src/main/resources/application.yaml)

### 2.3.create *[ENTITY](/demo/src/main/java/com/bliu/demo/entity/User.java)|[RESPOSITORY](/demo/src/main/java/com/bliu/demo/repository/UserRepository.java)|[CONTROLLER](/demo/src/main/java/com/bliu/demo/controller/UserController.java)* files

### 2.4.run the project with gradle
```bash
./gradlew bootRun
```
*Useful Gradle commands*
| Command  | Purpose  |
|----------|----------|
|./gradlew clean 	| Remove build artifacts|
|./gradlew build 	| Compile & package JAR |
|./gradlew bootRun	| Run Spring Boot app in dev mode|
|./gradlew test		| Run tests only|
|./gradlew bootJar	| Build just the runnable JAR|

### 5.check if it works
[Health endpoint](http://localhost:8080/actuator/health)

[Test your rest API](http://localhost:8080/users)

---

## Init angular
### install Node.js and npm
```bash
#check node npm
node -v
npm -v
# install nodejs npm
sudo apt update
sudo apt install nodejs npm
```
### install Angular CLI
```bash
npm install -g @angular/cli
ng version
ng new angular
```
