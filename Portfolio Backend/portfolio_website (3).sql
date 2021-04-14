-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 14, 2021 at 01:19 AM
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
(12, 'Senior Web Developer', 'Frontend Development\nMongo DB Database / MySQL Database – Node Js / PHP\nManagement and Updating of web contents either via CMS (Content Management System – WordPress) or server-side (cPanel).', 'Skello Technologies', '3 months November 2020 to February 2021 Lagos, Nigeria');

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE `projects` (
  `id` int(11) NOT NULL,
  `project_id` text NOT NULL,
  `project_name` text NOT NULL,
  `project_tech` text NOT NULL,
  `project_description` text NOT NULL,
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

INSERT INTO `projects` (`id`, `project_id`, `project_name`, `project_tech`, `project_description`, `prj_img1`, `prj_img2`, `prj_img3`, `prj_img4`, `prj_img5`, `project_link`) VALUES
(17, '6073ccd7c9844', 'School Managment System', 'React Js / PHP', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit reprehenderit, velit soluta eos quam nisi adipisci repellendus veritatis recusandae aliquid libero ipsa, eaque possimus odio ut accusantium accusamus voluptatum, temporibus aspernatur ducimus. Dolorum nihil cum facere laboriosam fuga, laudantium nam saepe consequuntur et in harum, voluptatem aliquid accusamus delectus natus?', 'http://localhost/Portfolio%20Backend/Images/school.PNG', 'http://localhost/Portfolio%20Backend/Images/school 2.PNG', 'http://localhost/Portfolio%20Backend/Images/school 3.PNG', 'http://localhost/Portfolio%20Backend/Images/school.PNG', 'http://localhost/Portfolio%20Backend/Images/school 2.PNG', 'https://www.linkedin.com/notifications');

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
-- AUTO_INCREMENT for table `experience`
--
ALTER TABLE `experience`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `projects`
--
ALTER TABLE `projects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

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
