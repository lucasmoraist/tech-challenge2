-- Selecionar toda a tabela
SELECT * FROM "user";
SELECT * FROM teacher;
SELECT * FROM post;

-- Selecionar todos os professores com seus respectivos usuários
SELECT t.id, t.name, t.school_subject, u.username
FROM teacher t
JOIN "user" u ON t.user_id = u.id;

-- Selecionar todos os posts de um professor específico
SELECT p.title, p.content, p.createdAt
FROM post p
WHERE p.teacher_id = (SELECT id FROM teacher WHERE name = 'Marcos Pereira');

-- Contar o número de posts de cada professor
SELECT t.name, COUNT(p.id) AS total_posts
FROM teacher t
LEFT JOIN post p ON t.id = p.teacher_id
GROUP BY t.name;

-- Encontrar todos os professores que ensinam uma disciplina específica
-- school_subject = 'quimica' | 'matematica' | 'fisica' | 'historia' | 'geografia' | 'portugues' | 'ingles' | 'biologia'
SELECT *
FROM teacher
WHERE school_subject = 'quimica';
