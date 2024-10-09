/* L�gico_1: */

CREATE TABLE Relatos (
    RelatoId int,
    Tipo string,
    LocalRelato string,
    Likes int,
    Dislikes int,
    Descricao string,
    DataCriacao DATE,
    UrlMedia string,
    UsuarioId int,
    fk_Usuario_UsuarioId int,
    PRIMARY KEY (RelatoId, UsuarioId)
);

CREATE TABLE Usuario (
    UsuarioId int PRIMARY KEY
);

CREATE TABLE Comentarios (
    ComentarioId int,
    RelatoId int,
    UsuarioId int,
    TextoComentario string,
    DataComentario DATE,
    fk_Relatos_RelatoId int,
    fk_Relatos_UsuarioId int,
    PRIMARY KEY (ComentarioId, RelatoId, UsuarioId)
);

CREATE TABLE Faz (
    fk_Usuario_UsuarioId int,
    fk_Comentarios_ComentarioId int,
    fk_Comentarios_RelatoId int,
    fk_Comentarios_UsuarioId int
);
 
ALTER TABLE Relatos ADD CONSTRAINT FK_Relatos_2
    FOREIGN KEY (fk_Usuario_UsuarioId)
    REFERENCES Usuario (UsuarioId)
    ON DELETE CASCADE;
 
ALTER TABLE Comentarios ADD CONSTRAINT FK_Comentarios_2
    FOREIGN KEY (fk_Relatos_RelatoId, fk_Relatos_UsuarioId)
    REFERENCES Relatos (RelatoId, UsuarioId)
    ON DELETE CASCADE;
 
ALTER TABLE Faz ADD CONSTRAINT FK_Faz_1
    FOREIGN KEY (fk_Usuario_UsuarioId)
    REFERENCES Usuario (UsuarioId)
    ON DELETE RESTRICT;
 
ALTER TABLE Faz ADD CONSTRAINT FK_Faz_2
    FOREIGN KEY (fk_Comentarios_ComentarioId, fk_Comentarios_RelatoId, fk_Comentarios_UsuarioId)
    REFERENCES Comentarios (ComentarioId, RelatoId, UsuarioId)
    ON DELETE SET NULL;
