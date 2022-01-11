-- 2022-01-10

USE `movies_db`;

--
-- Ya casi culminamos todos los desafíos. Utilizando el Between y Like, hagamos las siguientes consultas:
--

--
--   1. Mostrar el título y rating de todas las películas cuyo título sea Harry Potter.
--

SELECT 
    `title` AS `título`,
    `rating`
  FROM `movies`
 WHERE `title` LIKE '%Harry Potter%';

--
--   2. Mostrar a todos los actores cuyos nombres empiecen con Sam.
--

SELECT *
  FROM `actors`
 WHERE `first_name` LIKE 'Sam%';

--
--   3. Mostrar el título de las películas que salieron entre el 2004 y 2008.
--

SELECT 
    `title` AS `título`
  FROM `movies`
 WHERE `release_date` BETWEEN '2004-01-01 00:00:00' AND '2008-12-31 23:59:59';
