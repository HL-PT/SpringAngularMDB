# Springboot + Angular + MariaDB
## This is a simple demo integrating Spring Boot and Angular; it implements Create Read Delete operations on the user table.
It was originally for a test arranged by a company, but unfortunately, one of the prerequisites I received was that the applicant needed to have fluent Portuguese.

## Steps to run the application:
### Please read and follow the steps in Initialize_the_framework_step_by_step.md, which will help you initialize your infrastructure. Afterward, clone the code and start Spring Boot and Angular sequentially. A whole new world is about to open up for you.

Start the Spring Boot application in the demo directory to make the REST API available:
```bash
./gradlew bootRun
```
Start the Angular application in the angular directory using the configuration file to avoid CORS issues:
```bash
ng serve --proxy-config proxy.conf.json
```
