-- 2022-01-12

USE `movies_db`;

--
-- Utilizando la base de datos de películas queremos conocer, por un lado, los títulos y el
-- nombre del género de todas las series de la base de datos.
--

SELECT
  s.`title` AS `titulo`,
  g.`name` AS `genero`
  FROM `series` s
  JOIN `genres` g
    ON g.`id` = s.`genre_id`;

--
-- Por otro, necesitamos listar los títulos de los episodios junto con el nombre y apellido de 
-- los actores que trabajan en cada uno de ellos.
--

SELECT
  e.`title` AS `titulo`,
  a.`first_name` AS `nombre`,
  a.`last_name` AS `apellido`
  FROM `episodes` e
  JOIN `actor_episode` ae
    ON e.`id` = ae.`episode_id`
  JOIN `actors` a
    ON a.`id` = ae.`actor_id`;
