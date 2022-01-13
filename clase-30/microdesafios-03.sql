-- 2022-01-12

USE `movies_db`;

--
-- Debemos listar los títulos de cada película con su género correspondiente. En el caso de
-- que no tenga género, mostraremos una leyenda que diga "no tiene género". Como ayuda
-- podemos usar la función COALESCE() que retorna el primer valor no nulo de una lista.
--

SELECT
  m.`title` AS `titulo`,
  COALESCE(g.`name`, 'no tiene género') AS `genero`
  FROM `movies` m
  LEFT JOIN `genres` g
    ON g.`id` = m.`genre_id`;
