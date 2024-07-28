INSERT INTO tbroles ("PK_role", "role")
VALUES 
  (67483231, 'Cliente'),
  (71701748, 'Financiero'),
  (66516654, 'Gestor de pedidos'),
  (56455664, 'Gestor de Productos'),
  (65465435, 'Administrador');


INSERT INTO tbusers ("firstName", "lastName", "email", "password", "FK_role", "profileImage", "status", "createdAt", "updatedAt")
VALUES 
  ('Zoyla', 'Vaca Lola', 'zoyla.vaca.lola@gmail.com', 'password123', 67483231, NULL, true, CURRENT_TIMESTAMP, NULL),
  ('Elsa', 'Capunta Fina', 'elsa.capunta.fina@gmail.com', 'password123', 67483231, NULL, true, CURRENT_TIMESTAMP, NULL),
  ('Susana', 'Oria Naranja', 'susana.oria.naranja@gmail.com', 'password123', 67483231, NULL, true, CURRENT_TIMESTAMP, NULL),
  ('Aitor', 'Menta FDDuerte', 'aitor.menta.fuerte@gmail.com', 'password123', 67483231, NULL, true, CURRENT_TIMESTAMP, NULL),
  ('Aquiles', 'Pinto Paredes', 'aquiles.pinto.paredes@gmail.com', 'password123', 67483231, NULL, true, CURRENT_TIMESTAMP, NULL),
  ('Zoyla', 'Becerra Vaca', 'zoyla.becerra.vaca@gmail.com', 'password123', 67483231, NULL, true, CURRENT_TIMESTAMP, NULL),
  ('Cindy', 'Entes Blanco', 'cindy.entes.blanco@gmail.com', 'password123', 67483231, NULL, true, CURRENT_TIMESTAMP, NULL);


INSERT INTO "tbgames" ("FK_user", "totalScore", "level")
VALUES
    (2, 850, 1);
