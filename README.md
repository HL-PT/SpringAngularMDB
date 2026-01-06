# Springboot + Angular + MariaDB
## This is a simple demo integrating Spring Boot and Angular; it implements Create Read Delete operations on the user table.
It was originally for a test arranged by a company, but unfortunately, one of the prerequisites I received was that the applicant needed to have fluent Portuguese.

## Steps to run the application:
Start the Spring Boot application in the demo directory to make the REST API available:
```bash
./gradlew bootRun
```
Start the Angular application in the angular directory using the configuration file to avoid CORS issues:
```bash
ng serve --proxy-config proxy.conf.json
```
