# Primeros pasos con MongoDB.

En este proyecto se consulta y se introducen datos en una base de datos _MongoDB_. Para ello, previamente se ha montado una imagen docker con mongoDB instalado:
```sudo docker run -d -p 27017:27017 -v ~/Escritorio/mongo-data:/data/db mongo```
Se ha entrado a _mongo_ (`$ mongo 27017`), creado la base de datos _moviesDB_ (`use moviesDB`) y se ha añadido la colección _movie_ (`db.createCollection('movies')`).