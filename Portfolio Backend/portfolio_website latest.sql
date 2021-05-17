-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 17, 2021 at 08:04 PM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `portfolio_website`
--

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `email` text NOT NULL,
  `message` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`id`, `name`, `email`, `message`) VALUES
(13, 'Udoka Okoye', 'leviokoye@gmail.com', 'Hello World'),
(14, 'Udoka Okoye', 'leviokoye@gmail.com', 'asdfg'),
(15, 'Udoka Okoye', 'leviokoye@gmail.com', 'hello'),
(16, 'Udoka Okoye', 'leviokoye@gmail.com', 'hello'),
(17, 'Udoka Okoye', 'leviokoye@gmail.com', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.'),
(18, 'Udoka Okoye', 'leviokoye@gmail.com', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.'),
(19, 'Udoka Okoye', 'leviokoye@gmail.com', 'Hello World'),
(20, 'Chukwukma Okoye', 'chumaokoye2006@gmail.com', 'Hello akpamu'),
(21, 'Chinenye Okoye', 'chinenyeokoye772@gmail.com', 'Hello udoka \r\nI will like to team up with a front end developer work with you\r\nWhat’s your schedule let’s have a 5 mins zoom meeting\r\n\r\nThanks,\r\nChinenye Okoye');

-- --------------------------------------------------------

--
-- Table structure for table `experience`
--

CREATE TABLE `experience` (
  `id` int(11) NOT NULL,
  `job_title` text NOT NULL,
  `job_description` text NOT NULL,
  `company` text NOT NULL,
  `duration` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `experience`
--

INSERT INTO `experience` (`id`, `job_title`, `job_description`, `company`, `duration`) VALUES
(10, 'Senior Web Developer', 'Frontend Development\nMongo DB Database / MySQL Database – Node Js / PHP\nManagement and Updating of web contents either via CMS (Content Management System – WordPress) or server-side (cPanel).', 'Skello Technologies', '3 months November 2020 to February 2021 Lagos, Nigeria'),
(11, 'Senior Web Developer', 'Frontend Development\nMongo DB Database / MySQL Database – Node Js / PHP\nManagement and Updating of web contents either via CMS (Content Management System – WordPress) or server-side (cPanel).', 'Skello Technologies', '3 months November 2020 to February 2021 Lagos, Nigeria'),
(12, 'Senior Web Developer', 'Frontend Development\nMongo DB Database / MySQL Database – Node Js / PHP\nManagement and Updating of web contents either via CMS (Content Management System – WordPress) or server-side (cPanel).', 'Skello Technologies', '3 months November 2020 to February 2021 Lagos, Nigeria'),
(13, 'Web Developer', 'Frontend Development Mongo DB Database / MySQL Database – Node Js / PHP Management and Updating of web contents either via CMS (Content Management System – WordPress) or server-side (cPanel).', 'Ud Soft', '3 months November 2020 to February 2021 Lagos, Nigeria');

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE `projects` (
  `id` int(11) NOT NULL,
  `project_id` text NOT NULL,
  `project_name` text NOT NULL,
  `project_filter_key` text NOT NULL,
  `project_tech` text NOT NULL,
  `project_description` text NOT NULL,
  `project_platform` text NOT NULL,
  `prj_img1` text NOT NULL,
  `prj_img2` text NOT NULL,
  `prj_img3` text NOT NULL,
  `prj_img4` text NOT NULL,
  `prj_img5` text NOT NULL,
  `project_link` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `projects`
--

INSERT INTO `projects` (`id`, `project_id`, `project_name`, `project_filter_key`, `project_tech`, `project_description`, `project_platform`, `prj_img1`, `prj_img2`, `prj_img3`, `prj_img4`, `prj_img5`, `project_link`) VALUES
(74, '60a16aa2d9ca8', 'Tesla Clone', 'react native', 'React Native ', 'This is the clone of the Tesla website in a mobile application.', 'Mobile', 'http://192.168.200.146/Portfolio%20Backend/Images/ts1.png', 'http://192.168.200.146/Portfolio%20Backend/Images/ts2.png', '', '', '', '#'),
(75, '60a16ae6180bc', 'Anonymous Messenger', 'react native', 'React Native / PHP', 'Anonymous Messenger is an interactive anonymous messaging web application with a dare game. Create your Profile Link and Send it to all your contacts to check what do your friends think about you. With the help of Anonymous Messenger, you can send and receive anonymous compliments easily for free!', 'Mobile', 'http://192.168.200.146/Portfolio%20Backend/Images/an1.png', 'http://192.168.200.146/Portfolio%20Backend/Images/an2.png', 'http://192.168.200.146/Portfolio%20Backend/Images/an3.png', '', '', 'https://annonymousmessenger.000webhostapp.com/'),
(76, '60a16b1bbbd14', 'Covid-19 Tracker', 'react native', 'React Native / Node Js', 'Covid-19 Tracker is a Mobile Application which Trace and monitor contacts of infected people in each country. It gives the total number of infected patients, recovering patients, and dead patients.', 'Mobile', 'http://192.168.200.146/Portfolio%20Backend/Images/covid1.png', 'http://192.168.200.146/Portfolio%20Backend/Images/covid2.png', 'http://192.168.200.146/Portfolio%20Backend/Images/covid3.png', '', '', '#'),
(77, '60a16b63d5585', 'Naija Daily', 'react native', 'React Native / PHP', 'Naija Daily is a news blog focused on bringing 24/7 news updates mainly on the things happening in Nigeria.', 'Mobile', 'http://192.168.200.146/Portfolio%20Backend/Images/nd1.png', 'http://192.168.200.146/Portfolio%20Backend/Images/nd2.png', 'http://192.168.200.146/Portfolio%20Backend/Images/nd3.png', 'http://192.168.200.146/Portfolio%20Backend/Images/nd6.png', '', 'https://naija-daily.netlify.app/'),
(78, '60a16d3c829eb', 'Crypto Lion', 'php', 'PHP', 'Crypto lion is a cryptocurrency website used to double deposited cryptocurrency after a specific period of time.\n\nit accepts different types of currencies.', 'Web', 'http://192.168.200.146/Portfolio%20Backend/Images/smartmockups_komxwi1i.jpg', 'http://192.168.200.146/Portfolio%20Backend/Images/crypto 2.PNG', '', '', '', 'http://cryptolionx2.000webhostapp.com/'),
(79, '60a170645ea1c', 'School Management System', 'php', 'PHP', 'School Management System built from scratch with PHP\n\nIt efficiently performs profile management. It is one module of the system which is used to manage students, parents, staff, and teachers. It captures information such as the name and contact information of the users. Every user has unique login credentials to access. It also used to mark attendance, give assignments, give notes, submit assignments, take tests, e.t.c', 'Web', 'http://192.168.200.146/Portfolio%20Backend/Images/smartmockups_komyo9mm.jpg', 'http://192.168.200.146/Portfolio%20Backend/Images/Capture2.PNG', 'http://192.168.200.146/Portfolio%20Backend/Images/capture 3.PNG', 'http://192.168.200.146/Portfolio%20Backend/Images/Capture 4.PNG', '', 'http://okoyeudoka1.000webhostapp.com/'),
(81, '60a1740133b55', 'POS System', 'python', 'Python/Kiviy', 'POS System allows your business to accept payments from customers and keep track of sales. It sounds simple enough, but the setup can work in different ways, depending on whether you sell online, have a physical storefront, or both. A point-of-sale system used to refer to the cash register at a store', 'Web', 'http://192.168.200.146/Portfolio%20Backend/Images/smartmockups_komyekj2.jpg', 'http://192.168.200.146/Portfolio%20Backend/Images/operator_signing.PNG', 'http://192.168.200.146/Portfolio%20Backend/Images/operator_kivy.PNG', '', '', '#'),
(84, '60a176e4dd5da', 'Employee Login System', 'python', 'Python', 'The employee management system is a useful tool for running a smooth organization, especially organizations of scale. It assists HR personnel to keep track of employee information such as salary details, medical information, attendance/leave records, overall performance.', 'Mobile', 'http://192.168.200.146/Portfolio%20Backend/Images/employeeloginsystem.PNG', '', '', '', '', '#'),
(85, '60a1778ddcd48', 'Face Detector', 'python', 'Python/Open CV', 'Face Detector built with Python and  Open CV  framework', 'Web', 'http://192.168.200.146/Portfolio%20Backend/Images/faceDetector.PNG', '', '', '', '', '#'),
(86, '60a17a76f3892', 'All Saints (AHQ) Cathedral', 'react js', 'React Js/PHP', 'All Saints AHQ Cathedral website was built for a church with implements features like live stream channels, payment portals,  Event tracking, e.t.c\n\n', 'Web', 'http://192.168.200.146/Portfolio%20Backend/Images/smartmockups_komxl50h.jpg', 'http://192.168.200.146/Portfolio%20Backend/Images/church1.PNG', 'http://192.168.200.146/Portfolio%20Backend/Images/church4.PNG', 'http://192.168.200.146/Portfolio%20Backend/Images/church3.PNG', '', 'http://allsaintsahqcathedral.loreadeogun.com.ng/'),
(87, '60a185aea5190', 'MP3 Waves', 'react js', 'React Js/Node Js', '\nMP3 Waves is a digital music streaming service that gives you access to hundreds of songs from artists all over the world, like Apple Music. ', 'Web', 'http://192.168.200.146/Portfolio%20Backend/Images/smartmockups_komxtm5v.jpg', 'http://192.168.200.146/Portfolio%20Backend/Images/mp3waves1.PNG', 'http://192.168.200.146/Portfolio%20Backend/Images/mp3waves2.PNG', 'http://192.168.200.146/Portfolio%20Backend/Images/church3.PNG', '', 'https://mp3waves.netlify.app/');

-- --------------------------------------------------------

--
-- Table structure for table `skills`
--

CREATE TABLE `skills` (
  `id` int(11) NOT NULL,
  `skill` text NOT NULL,
  `percent` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `skills`
--

INSERT INTO `skills` (`id`, `skill`, `percent`) VALUES
(21, 'XD', '50'),
(22, 'UI/UX', '60'),
(23, 'PHP', '80'),
(24, 'Node.js', '60'),
(25, 'Angular Js', '20'),
(26, 'React Js', '80'),
(27, 'CSS', '70'),
(28, 'HTML', '90');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `email` text NOT NULL,
  `password` text NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `created_at`) VALUES
(1, 'Okoye Levi Udoka', 'leviokoye@gmail.com', '$2y$10$4H4Mw.1QVOr8iRQqjKL/L.wTLljvZAW94S3i9.wJGqKFDziDS9R0O', '2021-04-07 21:26:34');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `experience`
--
ALTER TABLE `experience`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `skills`
--
ALTER TABLE `skills`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `experience`
--
ALTER TABLE `experience`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `projects`
--
ALTER TABLE `projects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=88;

--
-- AUTO_INCREMENT for table `skills`
--
ALTER TABLE `skills`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
