import { database } from "./db";

class DbCreate {
  async dbGenerate() {
    if (!database.clientInstance) {
      throw new Error("Database not connected");
    }

    await database.clientInstance?.query(`
      CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
      `);

    await database.clientInstance?.query(`
      BEGIN;

      CREATE TABLE IF NOT EXISTS "user" (
      id SERIAL primary key,
      username VARCHAR(255) NOT NULL,
      password VARCHAR(255) NOT NULL
      );

      COMMIT;
      `);

    await database.clientInstance?.query(`
      BEGIN;

        CREATE TABLE IF NOT EXISTS teacher (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        school_subject VARCHAR(255) NOT NULL,
        user_id INT UNIQUE,
        foreign key (user_id) references "user"(id)
        );

      COMMIT;
      `);

    await database.clientInstance?.query(`
        BEGIN;

          CREATE TABLE IF NOT EXISTS post(
          id UUID primary key default uuid_generate_v4(),
          title VARCHAR(255) NOT NULL,
          content TEXT NOT NULL,
          urlImage TEXT NOT NULL,
          createdAt TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL,
          teacher_id INT NOT NULL,
          foreign key (teacher_id) references teacher(id)
          );

        COMMIT;

        `);

    await database.clientInstance?.query(`
      INSERT INTO "user" (username, password) VALUES 
        ('john_doe', 'senha123'),
        ('jane_doe', 'senha123'),
        ('emily_davis', 'senha123'),
        ('michael_brown', 'senha123'),
        ('sarah_white', 'senha123');
      `);

      await database.clientInstance?.query(`
        INSERT INTO teacher (name, school_subject, user_id) VALUES 
          ('John Smith', 'Matemática', (SELECT id FROM "user" WHERE username = 'john_doe')),
          ('Jane Doe', 'Física', (SELECT id FROM "user" WHERE username = 'jane_doe')),
          ('Emily Davis', 'História', (SELECT id FROM "user" WHERE username = 'emily_davis')),
          ('Michael Brown', 'Literatura', (SELECT id FROM "user" WHERE username = 'michael_brown')),
          ('Sarah White', 'Biologia', (SELECT id FROM "user" WHERE username = 'sarah_white'));
        `);

    await database.clientInstance?.query(`
          INSERT INTO post (title, content, urlImage, createdAt, teacher_id) VALUES 
          ('Introdução à Programação em Java', 
          'Java é uma das linguagens de programação mais populares e amplamente utilizadas no mundo...', 
          'https://storage.cloud.google.com/devlog-projeto-postech/image-01.jpg', 
          NOW(), 
          (SELECT id FROM teacher WHERE name = 'John Smith'));
        
          INSERT INTO post (title, content, urlImage, createdAt, teacher_id) VALUES 
          ('Desenvolvimento Web com HTML, CSS e JavaScript', 
          'Se você já navegou pela internet, com certeza já interagiu com HTML, CSS e JavaScript...', 
          'https://storage.cloud.google.com/devlog-projeto-postech/image-02.jpg', 
          NOW(), 
          (SELECT id FROM teacher WHERE name = 'Jane Doe'));
        
          INSERT INTO post (title, content, urlImage, createdAt, teacher_id) VALUES 
          ('Programação com Python: Fundamentos', 
          'Python é uma linguagem de programação poderosa e fácil de aprender...', 
          'https://storage.cloud.google.com/devlog-projeto-postech/image-03.png', 
          NOW(), 
          (SELECT id FROM teacher WHERE name = 'Emily Davis'));
        
          INSERT INTO post (title, content, urlImage, createdAt, teacher_id) VALUES 
          ('Programação Orientada a Objetos com C++', 
          'A programação orientada a objetos (POO) é um paradigma que organiza o código em torno de objetos...', 
          'https://storage.cloud.google.com/devlog-projeto-postech/image-04.png', 
          NOW(), 
          (SELECT id FROM teacher WHERE name = 'Michael Brown'));
        
          INSERT INTO post (title, content, urlImage, createdAt, teacher_id) VALUES 
          ('Desenvolvimento de Aplicativos Mobile com Flutter', 
          'Flutter é um framework de código aberto criado pelo Google...', 
          'https://storage.cloud.google.com/devlog-projeto-postech/image-01.jpg', 
          NOW(), 
          (SELECT id FROM teacher WHERE name = 'Sarah White'));
        
          INSERT INTO post (title, content, urlImage, createdAt, teacher_id) VALUES 
          ('Desenvolvimento Backend com Node.js', 
          'Node.js é uma plataforma de desenvolvimento backend...', 
          'https://storage.cloud.google.com/devlog-projeto-postech/image-02.jpg', 
          NOW(), 
          (SELECT id FROM teacher WHERE name = 'John Smith'));
        
          INSERT INTO post (title, content, urlImage, createdAt, teacher_id) VALUES 
          ('JavaScript Avançado: Promises, Async e Await', 
          'JavaScript é a linguagem principal para desenvolvimento web...', 
          'https://storage.cloud.google.com/devlog-projeto-postech/image-03.png', 
          NOW(), 
          (SELECT id FROM teacher WHERE name = 'Jane Doe'));
        
          INSERT INTO post (title, content, urlImage, createdAt, teacher_id) VALUES 
          ('Introdução à Data Science com Python', 
          'A ciência de dados (Data Science) é uma área em rápido crescimento...', 
          'https://storage.cloud.google.com/devlog-projeto-postech/image-04.png', 
          NOW(), 
          (SELECT id FROM teacher WHERE name = 'Emily Davis'));
        
          INSERT INTO post (title, content, urlImage, createdAt, teacher_id) VALUES 
          ('Inteligência Artificial com Python: Fundamentos', 
          'A inteligência artificial (IA) está revolucionando muitas indústrias...', 
          'https://storage.cloud.google.com/devlog-projeto-postech/image-01.jpg', 
          NOW(), 
          (SELECT id FROM teacher WHERE name = 'Michael Brown'));
        
          INSERT INTO post (title, content, urlImage, createdAt, teacher_id) VALUES 
          ('DevOps: Integração e Entrega Contínua', 
          'O DevOps é um conjunto de práticas que visa integrar desenvolvimento e operações...', 
          'https://storage.cloud.google.com/devlog-projeto-postech/image-02.jpg', 
          NOW(), 
          (SELECT id FROM teacher WHERE name = 'Sarah White'));
        `);
  }
}

export const dbCreate = new DbCreate();
