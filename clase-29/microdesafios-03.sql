-- 2022-01-10

USE `movies_db`;

--
-- Vamos muy bien, no nos desanimemos ni por un minuto. Ahora, para la realización de las consultas debemos valernos del Limit y Offset.
--

--
--   1. Mostrar los títulos de las primeras tres películas en la base de datos.
--

SELECT 
    `title` AS `título`
  FROM `movies`
 LIMIT 3;

--
--   2. Mostrar el top 5 de las películas con mayor rating.
--

SELECT *
  FROM `movies`
ORDER BY `rating` DESC
 LIMIT 5;

--
--   3. Mostrar las top 5 a 10 de las películas con mayor rating.
--

SELECT *
  FROM `movies`
ORDER BY `rating` DESC
 LIMIT 5
OFFSET 5;

--
--   4. Listar los primeros 10 actores (sería la página 1). a. Luego, usar offset para traer la página 3.
--

-- Página 1
SELECT *
  FROM `actors`
 LIMIT 10;

-- Página 3
SELECT *
  FROM `actors`
 LIMIT 10
OFFSET 20;
