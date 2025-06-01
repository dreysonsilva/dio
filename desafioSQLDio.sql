-- 1 - Buscar o nome e ano dos filmes
SELECT nome, ano FROM Filmes;

-- 2 - Buscar o nome e ano dos filmes, ordenados por ordem crescente pelo ano.
-- Na imagem do git estava com duração de tempo mais se precisar só adicionar o novo campo depois do ano
SELECT nome, ano FROM Filmes 
ORDER BY ano;

--Consulta 03
-- 3 - Buscar pelo filme de volta para o futuro, trazendo o nome, ano e a duração
SELECT * FROM Filmes WHERE nome='De Volta para o Futuro';

--Consulta 04
-- 4 - Buscar os filmes lançados em 1997
SELECT * FROM Filmes WHERE ano = 1997;


--Consulta 05
-- 5 - Buscar os filmes lançados APÓS o ano 2000
SELECT * FROM Filmes WHERE ano > 2000;

--Consulta 06
-- 6 - Buscar os filmes com a duracao maior que 100 e menor que 150, ordenando pela duracao em ordem crescente
SELECT * FROM Filmes WHERE duracao > 100 AND duracao < 150 ORDER BY duracao;

--Consulta 07
 -- 07- Buscar a quantidade de filmes lançadas no ano, agrupando por ano, ordenando pela duracao em ordem decrescente

--Consulta 08
--Consulta 09
--Consulta 10
--Consulta 11
--Consulta 12

