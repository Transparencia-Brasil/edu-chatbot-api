SET datestyle TO ISO, DMY;
\COPY escolas FROM '/app/data/escolas_filtradas.csv' WITH NULL AS 'NA' DELIMITER ';' CSV HEADER;
SET datestyle TO ISO, MDY;