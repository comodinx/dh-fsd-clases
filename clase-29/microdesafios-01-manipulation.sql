-- 2022-01-10

USE `movies_db`;

--
-- Utilizando el Insert, Update, Delete, debemos ejecutar lo siguiente:
--

--
--   1. Insertar en la tabla genres un nuevo género con los siguientes datos:
--     ○ name: Investigación
--     ○ ranking: 13
--     ○ active: 1
--

INSERT INTO `genres` VALUES (
  NULL,            -- id
  NOW(),           -- created_at
  NULL,            -- updated_at
  'Investigación', -- name
  13,              -- ranking
  1                -- active
);

--
--   2. Actualizar el nuevo registro “name: Investigación” por “Investigación Científica”.
--

-- UPDATE BY NOT INDEXED COLUMNS
--
-- UPDATE `genres`
--    SET `name` = 'Investigación Científica'
--  WHERE `name` = 'Investigación'
--    AND `ranking` = 13
--    AND `active` = 1;

-- UPDATE BY INDEXED COLUMN "ID"
--
UPDATE `genres`
   SET `name` = 'Investigación Científica'
 WHERE `id` = 13;

--
--   3. Eliminar el registro cuyo name es: “Investigación Científica”. Recordemos verificar cuál es el id de dicho registro.
--

-- DELETE BY NOT INDEXED COLUMNS
--
-- DELETE FROM `genres`
--  WHERE `name` = 'Investigación Científica'
--    AND `ranking` = 13
--    AND `active` = 1;

-- DELETE BY INDEXED COLUMN "ID"
--
DELETE FROM `genres`
 WHERE `id` = 13;
