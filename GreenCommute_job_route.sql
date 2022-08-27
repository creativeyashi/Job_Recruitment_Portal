-- MySQL dump 10.13  Distrib 8.0.30, for Linux (x86_64)
--
-- Host: 3.134.81.172    Database: GreenCommute
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `job_route`
--

DROP TABLE IF EXISTS `job_route`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `job_route` (
  `route_id` varchar(30) NOT NULL,
  `job_id` varchar(30) NOT NULL,
  KEY `route_id` (`route_id`),
  KEY `job_id` (`job_id`),
  CONSTRAINT `job_route_ibfk_1` FOREIGN KEY (`route_id`) REFERENCES `routes` (`id`),
  CONSTRAINT `job_route_ibfk_2` FOREIGN KEY (`job_id`) REFERENCES `job` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `job_route`
--

LOCK TABLES `job_route` WRITE;
/*!40000 ALTER TABLE `job_route` DISABLE KEYS */;
INSERT INTO `job_route` VALUES ('1','5'),('2','5'),('3','5'),('4','5'),('1','8'),('3','8'),('1','7'),('2','7'),('3','7'),('1','3'),('3','3'),('1','4'),('2','4'),('4','4'),('1','6'),('2','6'),('3','6'),('4','6'),('1','2'),('2','2'),('3','2'),('4','2');
/*!40000 ALTER TABLE `job_route` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-08-28  1:00:33
