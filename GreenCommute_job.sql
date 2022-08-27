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
-- Table structure for table `job`
--

DROP TABLE IF EXISTS `job`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `job` (
  `id` varchar(50) NOT NULL,
  `titles` varchar(70) NOT NULL,
  `company_name` varchar(50) NOT NULL,
  `company_icon` varchar(650) NOT NULL,
  `locations` varchar(50) NOT NULL,
  `time` varchar(50) NOT NULL,
  `distance` varchar(50) NOT NULL,
  `role` varchar(50) NOT NULL,
  `category` varchar(50) NOT NULL,
  `saved` tinyint(1) NOT NULL,
  `description` varchar(750) NOT NULL,
  `about_the_company` varchar(750) NOT NULL,
  `location` varchar(65) DEFAULT NULL,
  `city` varchar(55) DEFAULT NULL,
  `title` varchar(55) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `job_ibfk_1` (`locations`),
  KEY `job_ibfk_2` (`titles`),
  CONSTRAINT `job_ibfk_1` FOREIGN KEY (`locations`) REFERENCES `location` (`id`),
  CONSTRAINT `job_ibfk_2` FOREIGN KEY (`titles`) REFERENCES `skills` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `job`
--

LOCK TABLES `job` WRITE;
/*!40000 ALTER TABLE `job` DISABLE KEYS */;
INSERT INTO `job` VALUES ('1','1','Myntra','https://github.com/creativeyashi/Images/blob/main/myntra.png?raw=true','1','36 min ago','10 - 20 Kms','Full time','UI/UX Designer',1,'Open Text is seeking a talented, personable interaction designer who can assist the User Experience Design team by working with other designers and development teams on a variety of projects. The OpenText User Experience Design group is a distributed multi-disciplinary team of professionals that are responsible for enhancing the UX of the company\'s collective product suites worldwide.','High level of proficiency with leading UX Design software packages, such as Axure, Sketch, InVision, or Experience Design including the core Adobe Creative Suite products.Excellent written and oral communication and presentation skills.','Hitech city, Hyderabad - 500072','Hyderabad','User Experience Designer'),('2','2','BMW','https://github.com/creativeyashi/Images/blob/main/bmw.png?raw=true','2','10 days ago','10 - 20 Kms','Full time','UI/UX Designer',1,'We are seeking a Product Designer with a passion for finding solutions that allow customers to intuitively use our products. The ideal candidate will be skilled at each stage of the design process but always focused on the needs of the customer. You will work with other designers and cross-functional team members and will rely heavily on both qualitative and quantitative data to make informed decisions.','Bayerische Motoren Werke AG, commonly referred to as BMW, is a German multinational corporate manufacturer of luxury vehicles and motorcycles headquartered in Munich, Bavaria, Germany. The corporation was founded in 1916 as a manufacturer of aircraft engines, which it produced from 1917 until 1918 and again from 1933 to 1945.','Hitech city, Mumbai - 410210','Mumbai','Product Designer'),('3','1','Instagram','https://github.com/creativeyashi/Images/blob/main/instagram.png?raw=true','1','36 min ago','10 - 20 Kms','Full time','UI/UX Designer',0,'As a UX designer you are responsible for creating interactive programs that enhance a customer\'s experience with a brand and facilitate an enjoyable experience on the business\'s website. You also need to have a working understanding of coding and transfer the brand\'s strength through the interface of a product.','Instagram is a photo and video sharing social networking service founded in 2010 by Kevin Systrom and Mike Krieger, and later acquired by American company Facebook Inc., now known as Meta Platforms. The app allows users to upload media that can be edited with filters and organized by hashtags and geographical tagging. Posts can be shared publicly or with preapproved followers.','Hitech city, Hyderabad - 50007','Hyderabad','User Experience Designer'),('4','1','Hp','https://github.com/creativeyashi/Images/blob/main/hp.png?raw=true','1','1 week ago','10 - 20 Kms','Full time','UI/UX Designer',0,'We are seeking a Product Designer with a passion for finding solutions that allow customers to intuitively use our products. The ideal candidate will be skilled at each stage of the design process but always focused on the needs of the customer.','We are a technology company born of the belief that companies should do more than just make a profit. They should make the world a better place.Our efforts in climate action, human rights, and digital equity prove that we are doing everything in our power to make it so.','Hitech city, Hyderabad - 50007','Hyderabad','User Experience Designer'),('5','1','Twitter','https://github.com/creativeyashi/Images/blob/main/twitter.png?raw=true','1','1 week ago','10 - 20 Kms','Full time','UI/UX Designer',0,'Collaborate with product management and engineering to define and implement innovative solutions for the product direction, visuals and experience. Execute all visual design stages from concept to final hand-off to engineering. Conceptualize original ideas that bring simplicity and user friendliness to complex design roadblocks. ','Twitter is a microblogging and social networking service on which users post and interact with messages known as tweets, owned by American company Twitter, Inc. Registered users can post, like, and retweet tweets, however, unregistered users have the ability to only read tweets that are publicly available. Users interact with Twitter through browser or mobile frontend software.','Hitech city, Hyderabad - 50007','Hyderabad','User Experience Designer'),('6','1','Wipro','https://github.com/creativeyashi/Images/blob/main/wipro.png?raw=true','1','10 days ago','21 - 30 Kms','Full time','UI/UX Designer',0,'As a UX designer you are responsible for creating interactive programs that enhance a customer\'s experience with a brand and facilitate an enjoyable experience on the business\'s website. You also need to have a working understanding of coding and transfer the brand\'s strength through the interface of a product.','Wipro Limited is a leading technology services and consulting company focused on building innovative solutions that address client\'s most complex digital transformation needs.','Hitech city, Hyderabad - 50007','Hyderabad','User Experience Designer'),('7','3','Ola','https://github.com/creativeyashi/Images/blob/main/ola.png?raw=true','1','20 days ago','0 - 10 Kms','Full time','UI/UX Designer',0,'Use wireframes, storyboards, process flows and sitemaps to illustrate and present design ideas. Collaborate with product managers and engineers to understand the product before presenting solutions to improve the visual and interactive experience.Gather user requirements from product managers to create compelling and original graphic designs (images, sketches, etc).','Ola is Indias largest mobility platform and one of the worlds largest ride-hailing companies, serving 250+ cities across India, Australia, New Zealand, and the UK. The Ola app offers mobility solutions by connecting customers to drivers and a wide range of vehicles across bikes, auto-rickshaws, metered taxis, and cabs, enabling convenience and transparency for hundreds of millions of consumers.','Hitech city, Delhi - 11002','Delhi','Senior Designer'),('8','4','Uber','https://github.com/creativeyashi/Images/blob/main/uber.png?raw=true','1','10 days ago','0 - 10 Kms','Full time','UI/UX Designer',0,'A senior designer is most typically responsible for bringing design solutions to life which adhere to marketing strategies and business goals. They must be comfortable making decisions and managing designers that are producing the graphics and should be able to see graphics development from a holistic perspective.','Uber Technologies, Inc. (Uber) is an American mobility as a service provider, allowing users to book a car and driver to transport them in a way similar to a taxi. It is based in San Francisco with operations in approximately 72 countries and 10,500 cities in 2021.','Hitech city, Hyderabad - 500072','Hyderabad','User Interface Designer');
/*!40000 ALTER TABLE `job` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-08-28  1:00:10
