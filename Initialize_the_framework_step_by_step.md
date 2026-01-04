# Springboot + angular + mariaDB
## install the DB
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
#Create database and user (Spring Boot ready)
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

## init sprint boot
## init angular