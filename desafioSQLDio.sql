-- 1 - Buscar o nome e ano dos filmes
SELECT Nome, Ano 
FROM Filmes;

-- 2 - Buscar o nome e ano dos filmes, ordenados por ordem crescente pelo ano (No resultado do desafio mostra duração e não foi solicitada)
SELECT Nome, Ano 
FROM Filmes 
ORDER BY ANO ASC;

-- 3 - Buscar pelo filme de volta para o futuro, trazendo o nome, ano e a duração
SELECT Nome, Ano, Duracao 
FROM Filmes 
WHERE Nome = 'De volta para o futuro';

-- 4 - Buscar os filmes lançados em 1997
SELECT * 
FROM Filmes 
WHERE Ano = 1997;

-- 5 - Buscar os filmes lançados APÓS o ano 2000
SELECT * 
FROM Filmes 
WHERE Ano > 2000;

-- 6 - Buscar os filmes com a duracao maior que 100 e menor que 150, ordenando pela duracao em ordem crescente
SELECT * 
FROM Filmes 
WHERE Duracao > 100 AND Duracao < 150 
ORDER BY Duracao ASC;

-- 7 - Buscar a quantidade de filmes lançadas no ano, agrupando por ano, ordenando pela duracao em ordem decrescente (ACHO QUE ESCREVERAM ERRADO, DEVERIA SER ORDENADO PELA QUANTIDADE DESC)
-- Se o ORDER BY for pela QUANTIDADE
SELECT  Ano, COUNT(*) AS QUANTIDADE
FROM Filmes 
GROUP BY Ano 
ORDER BY QUANTIDADE DESC;

-- 8 - Buscar os Atores do gênero masculino, retornando o PrimeiroNome, UltimoNome (Pediram uma coisa e retornaram todos os campos no exemplo, Ñ entendi)
SELECT PrimeiroNome, UltimoNome
FROM Atores
WHERE Genero = 'M';

-- 9 - Buscar os Atores do gênero feminino, retornando o PrimeiroNome, UltimoNome, e ordenando pelo PrimeiroNome (Pediram uma coisa e retornaram todos os campos no exemplo , Ñ entendi)
SELECT PrimeiroNome, UltimoNome
FROM Atores
WHERE Genero = 'F'
ORDER BY PrimeiroNome ASC;

-- 10 - Buscar o nome do filme e o gênero
SELECT f.Nome, g.Genero
FROM Filmes f
INNER JOIN FilmesGenero fg ON f.id = fg.idFilme 
INNER JOIN Generos g ON g.Id = fg.idGenero;

-- 11 - Buscar o nome do filme e o gênero do tipo "Mistério"
SELECT f.Nome, g.Genero
FROM Filmes f
INNER JOIN FilmesGenero fg ON f.id = fg.idFilme 
INNER JOIN Generos g ON g.Id = fg.idGenero
WHERE g.Genero = 'Mistério';

-- 12 - Buscar o nome do filme e os atores, trazendo o PrimeiroNome, UltimoNome e seu Papel
SELECT f.Nome, a.PrimeiroNome, a.UltimoNome, ef.Papel 
FROM Filmes f 
INNER JOIN ElencoFilme ef ON f.Id = ef.IdFilme 
INNER JOIN Atores a ON ef.IdAtor = a.Id;
