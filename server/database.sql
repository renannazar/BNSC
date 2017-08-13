-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 13 Agu 2017 pada 17.16
-- Versi Server: 10.1.13-MariaDB
-- PHP Version: 5.6.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_igp`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `endlesses`
--

CREATE TABLE `endlesses` (
  `id` int(10) UNSIGNED NOT NULL,
  `username` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `score` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `endlesses`
--

INSERT INTO `endlesses` (`id`, `username`, `score`, `created_at`, `updated_at`) VALUES
(1, 'jhondoe', 25, NULL, NULL),
(2, 'iliana', 35, NULL, NULL),
(3, 'sumanto', 65, NULL, NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(17, '2014_10_12_000000_create_users_table', 1),
(18, '2014_10_12_100000_create_password_resets_table', 1),
(19, '2017_08_13_034414_create_tetris_table', 1),
(20, '2017_08_13_034602_create_endlesses_table', 1);

-- --------------------------------------------------------

--
-- Struktur dari tabel `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `tetris`
--

CREATE TABLE `tetris` (
  `id` int(10) UNSIGNED NOT NULL,
  `username` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `score` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `tetris`
--

INSERT INTO `tetris` (`id`, `username`, `score`, `created_at`, `updated_at`) VALUES
(1, 'jhondoe', 20, NULL, NULL),
(2, 'iliana', 30, NULL, NULL),
(3, 'sumanto', 25, NULL, NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` date NOT NULL,
  `phone` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `picture` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `api_token` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `name`, `username`, `email`, `password`, `date`, `phone`, `picture`, `api_token`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Jhon Doe', 'jhondoe', 'jhon@gmail.com', '$2y$10$QYLqT8hQdybiaPm1BDBznO072yUG2TbbOx/C3XN3B0x8EF8.edOTy', '1992-01-01', '0897923420', 'jhon.jpg', '4LK8lInKXG4Itx82LPd99wqymcAJl1PL3vafXjpswS7FdhZ20zqwCZ2ZeEpD', NULL, NULL, NULL),
(2, 'Iliana', 'iliana', 'iliana@gmail.com', '$2y$10$JHG1irpkven1tPtcrpBWBOfnsYLeYVhppI2Ie9pBS6TkYd.att302', '1992-02-01', '0898123420', 'iliana.jpg', 'W6BtgqYa0mG8ZFZouw8aLHpa9DKrBVleSG3nrR3itczZZShBN80kFusb0qtV', NULL, NULL, NULL),
(3, 'Sumanto Inrul', 'sumanto', 'sumanto@gmail.com', '$2y$10$UBMngUk8t/35WnZpnqynaeEGxRety8kp5ldQdVmHSlXZ3AcBdFKf.', '1992-02-02', '0778129909', 'sumanto.jpg', 'jwosWIoRW69pLVzb6pc9J502esjvtUuTTun3kED9esNH9gq2ETQc7QRIJPSL', NULL, NULL, NULL),
(4, 'lorem', 'lipsum', 'dolor@mail.com', '$2y$10$Friu3vgzW0I3BY2ZLjWQF.p9qctksQbiI6SkSBfW2FDNF0DwSEF1C', '2003-01-01', '8127651279', 'null', 'nFfvZwpk1MZMhMBaNDbz3z0eU3zCRN4NXqePhSImXJLBr4XqMtQcKXp4XJ4w', 'thcez2ckj29UgvjzLGEqO9lzAVIuzkPbgQ4kLnTpScJsFqvkvK9uqzh584Tl', '2017-08-13 08:08:34', '2017-08-13 08:08:34'),
(5, 'User test', 'test', 'user@mail.com', '$2y$10$xs9bTmv6bbuObTxURSoVTes6QxLghdP55eGLQaYJ1R8UihNzvlmhe', '2000-01-01', '0987456790', 'null', 'WffOcKjfmoPrOeaq2LyW8hXgymTVPrTdCKg6jVwplA0RczYplGUsaOnhHgl0', 'I0k3SEE5rel6qc5h11GzTuIIFDXve53iCC8OQxMC0CTv9BfAoUX3KriNvlwC', '2017-08-13 08:10:56', '2017-08-13 08:10:56');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `endlesses`
--
ALTER TABLE `endlesses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `tetris`
--
ALTER TABLE `tetris`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`),
  ADD UNIQUE KEY `users_api_token_unique` (`api_token`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `endlesses`
--
ALTER TABLE `endlesses`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
--
-- AUTO_INCREMENT for table `tetris`
--
ALTER TABLE `tetris`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
