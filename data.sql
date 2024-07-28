INSERT INTO tbroles ("PK_role", "role")
VALUES 
  (67483231, 'Cliente'),
  (71701748, 'Financiero'),
  (66516654, 'Gestor de pedidos'),
  (56455664, 'Gestor de Productos'),
  (65465435, 'Administrador');




INSERT INTO tbusers ("firstName", "lastName", "email", "password")
VALUES 
  ('Alan', 'Brito Delgado', 'alan.brito.delgado@example.com', 'password123'),
  ('Alan', 'Brito Grueso', 'alan.brito.grueso@example.com', 'password123'),
  ('Zoyla', 'Vaca Lola', 'zoyla.vaca.lola@example.com', 'password123'),
  ('Elsa', 'Capunta Fina', 'elsa.capunta.fina@example.com', 'password123'),
  ('Susana', 'Oria Naranja', 'susana.oria.naranja@example.com', 'password123'),
  ('Aitor', 'Menta Fuerte', 'aitor.menta.fuerte@example.com', 'password123'),
  ('Aquiles', 'Pinto Paredes', 'aquiles.pinto.paredes@example.com', 'password123'),
  ('Zoyla', 'Becerra Vaca', 'zoyla.becerra.vaca@example.com', 'password123'),
  ('Cindy', 'Entes Blanco', 'cindy.entes.blanco@example.com', 'password123');

-- Insertar 10 registros en la tabla tbgames
INSERT INTO tbgames ("FK_user", "totalScore", "level")
VALUES
  (1, 1200, 10),
  (2, 1500, 15),
  (3, 900, 9),
  (4, 1100, 12),
  (5, 1300, 13),
  (6, 1400, 14),
  (7, 800, 8),
  (8, 1250, 11),
  (9, 1000, 10);

-- Insertar 10 registros en la tabla tbscores
INSERT INTO tbscores ("FK_game", "partialScore", "typeScore")
VALUES
  (31, 300, 'Finalización de Nivel'),
  (31, 200, 'Bonificación'),
  (32, 400, 'Finalización de Nivel'),
  (32, 300, 'Bonificación'),
  (33, 450, 'Finalización de Nivel'),
  (33, 350, 'Bonificación'),
  (34, 500, 'Finalización de Nivel'),
  (34, 600, 'Bonificación'),
  (35, 550, 'Finalización de Nivel'),
  (35, 750, 'Bonificación'),
  (36, 600, 'Finalización de Nivel'),
  (36, 800, 'Bonificación'),
  (37, 650, 'Finalización de Nivel'),
  (37, 850, 'Bonificación'),
  (38, 700, 'Finalización de Nivel'),
  (38, 900, 'Bonificación'),
  (39, 750, 'Finalización de Nivel'),
  (39, 950, 'Bonificación');
