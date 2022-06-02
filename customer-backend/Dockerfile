FROM openjdk:17
WORKDIR /app
ADD target/customer-0.0.1-SNAPSHOT.jar customer-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","-Dspring.profiles.active=docker","customer-0.0.1-SNAPSHOT.jar"]

