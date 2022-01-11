-- 2022-01-10

USE `movies_db`;

--
-- Haciendo uso del Select, debemos afrontar las siguientes consultas:
--

--
--   4. Mostrar todos los registros de la tabla “movies”.
--

SELECT * FROM `movies`;

--
--   5. Mostrar el nombre, apellido y rating de todos los actores.
--

SELECT `first_name` AS `nombre`, `last_name` AS `apellido`, `rating` FROM `actors`;

--
--   6. Mostrar el título de todas las series. Tomar en cuenta que tanto el nombre de la tabla como el campo estén en español.
--

SELECT `title` AS `título` FROM `series`;
