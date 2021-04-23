-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 23, 2021 at 11:14 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 7.4.13

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
(19, 'Udoka Okoye', 'leviokoye@gmail.com', 'Hello World');

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
(22, '607d3b43b49d8', 'All Saints AHQ Cathedral', 'react js', 'React Js / PHP', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.', 'Web', 'http://localhost/Portfolio%20Backend/Images/church1.PNG', 'http://localhost/Portfolio%20Backend/Images/church2.PNG', 'http://localhost/Portfolio%20Backend/Images/church3.PNG', 'http://localhost/Portfolio%20Backend/Images/church4.PNG', '', 'http://allsaintsahqcathedral.loreadeogun.com.ng/'),
(23, '607d3badf3e87', 'School Managment System', 'php', 'PHP', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.', 'Web', 'http://localhost/Portfolio%20Backend/Images/school.PNG', 'http://localhost/Portfolio%20Backend/Images/school 2.PNG', 'http://localhost/Portfolio%20Backend/Images/school 3.PNG', '', '', 'http://okoyeudoka1.000webhostapp.com/'),
(26, '607de6dbc929d', 'Naija Daily', 'react js', 'React Js / PHP', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.', 'Web', 'http://localhost/Portfolio%20Backend/Images/naijadaily.PNG', 'http://localhost/Portfolio%20Backend/Images/naija daily 2.PNG', 'http://localhost/Portfolio%20Backend/Images/nd5.png', 'http://localhost/Portfolio%20Backend/Images/nd6.png', '', 'https://naija-daily.netlify.app/'),
(28, '607de7654c8e1', 'Naija Daily - Mobile', 'react native', 'React Native / PHP', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.', 'Mobile', 'http://localhost/Portfolio%20Backend/Images/nd1.png', 'http://localhost/Portfolio%20Backend/Images/nd2.png', 'http://localhost/Portfolio%20Backend/Images/nd5.png', 'http://localhost/Portfolio%20Backend/Images/nd6.png', '', 'https://github.com/udokaokoye/NAIJA-DAILY-MOBILE-APP'),
(29, '607de793ea935', 'Tesla Mobile App', 'react native', 'React Native', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.', 'Mobile', 'http://localhost/Portfolio%20Backend/Images/tesla1.png', 'http://localhost/Portfolio%20Backend/Images/tesla2.png', 'http://localhost/Portfolio%20Backend/Images/tesla3.png', '', '', 'https://github.com/udokaokoye/Tesla-Mobile-App-Clone'),
(30, '607de7dc64044', 'Covid-19 Tracker', 'react native', 'React Native', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.', 'Mobile', 'http://localhost/Portfolio%20Backend/Images/covid1.png', 'http://localhost/Portfolio%20Backend/Images/covid2.png', 'http://localhost/Portfolio%20Backend/Images/covid3.png', '', '', 'https://github.com/udokaokoye/'),
(31, '607de8250fdad', 'Crypto Lion', 'php', 'PHP', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.', 'Web', 'http://localhost/Portfolio%20Backend/Images/cryptolion.PNG', 'http://localhost/Portfolio%20Backend/Images/cryptolion 4.PNG', 'http://localhost/Portfolio%20Backend/Images/cryptolion 3.PNG', '', '', 'http://cryptolionx2.000webhostapp.com/'),
(32, '607de86418175', 'Employee Managment System', 'python', 'Python', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.', 'Mobile', 'http://localhost/Portfolio%20Backend/Images/employeeloginsystem.PNG', '', '', '', '', 'https://github.com/udokaokoye'),
(33, '607de8c715cd6', 'Anonymous Messenger - Mobile', 'react native', 'React Native / PHP', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.', 'Mobile', 'http://localhost/Portfolio%20Backend/Images/ann1.png', 'http://localhost/Portfolio%20Backend/Images/ann2.png', '', '', '', 'https://github.com/'),
(34, '607de9030c760', 'Weather System', 'python', 'Python', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.', 'Web', 'http://localhost/Portfolio%20Backend/Images/Weather.PNG', 'http://localhost/Portfolio%20Backend/Images/Weather 2.PNG', '', '', '', 'https://github.com/'),
(35, '607de9487343f', 'Mp3 Waves', 'react js', 'React Js', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.', 'Web', 'http://localhost/Portfolio%20Backend/Images/mp3waves1.PNG', 'http://localhost/Portfolio%20Backend/Images/mp3 waves 2.PNG', '', '', '', 'http://mp3waves.netlify.app/'),
(36, '607dea07f1007', 'Face Tracking System', 'python', 'Python', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.', 'Web', 'http://localhost/Portfolio%20Backend/Images/facedetector.PNG', '', '', '', '', 'https://github.com/udokaokoye/');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `experience`
--
ALTER TABLE `experience`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `projects`
--
ALTER TABLE `projects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

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
