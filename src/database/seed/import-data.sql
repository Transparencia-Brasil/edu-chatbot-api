\COPY ufs FROM '/app/data/estados.csv' WITH NULL AS 'NA' DELIMITER ',' CSV HEADER;
\COPY municipios FROM '/app/data/municipios.csv' WITH NULL AS 'NA' DELIMITER ',' CSV HEADER;
SET datestyle TO ISO, DMY;
\COPY escolas FROM '/app/data/escolas_filtradas.csv' WITH NULL AS 'NA' DELIMITER ',' CSV HEADER;
SET datestyle TO ISO, MDY;
\COPY emails(escola_id, email_gestao) FROM '/app/data/emails_gestao.csv' WITH NULL AS 'NA' DELIMITER ',' CSV HEADER;