-- 2022-01-12

USE `movies_db`;

--
-- Para nuestro próximo desafío necesitamos obtener a todos los actores o actrices (mostrar
-- nombre y apellido) que han trabajado en cualquier película de la saga de la Guerra de las
-- galaxias, pero ¡cuidado!: debemos asegurarnos de que solo se muestre una sola vez cada
-- actor/actriz.
--

SELECT
  DISTINCT a.`first_name` AS `nombre`,
  a.`last_name` AS `apellido`
  FROM `actors` a
  JOIN `actor_movie` ae
    ON a.`id` = ae.`actor_id`
  JOIN `movies` m
    ON ae.`movie_id` = m.`id`
 WHERE m.`title` LIKE '%Guerra de las galaxias%';
