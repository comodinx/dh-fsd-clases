-- 2022-01-10

USE `movies_db`;

--
-- Utilizando el Where y Order by, ejecutemos las siguientes consultas (ten en cuenta el uso de los operadores lógicos y relacionales).
--

--
--   1. Mostrar el nombre y apellido de los actores cuyo rating sea mayor a 7.5.
--

SELECT
    `first_name` AS `nombre`,
    `last_name` AS `apellido`
  FROM `actors`
 WHERE `rating` > 7.5;

--
--   2. Mostrar el título de las películas, el rating y los premios de las películas con un rating mayor a 7.5 y con más de dos premios.
--

SELECT 
    `title` AS `título`,
    `rating`,
    `awards` AS `premios`
  FROM `movies`
 WHERE `rating` > 7.5
   AND `awards` > 2;

--
--   3. Mostrar el título de las películas y el rating ordenadas por rating en forma ascendente.
--

SELECT 
    `title` AS `título`,
    `rating`
  FROM `movies`
ORDER BY `rating`;
