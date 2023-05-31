Steps 1: Open the postgres container in interactive mode.

```bash
docker exec -it <name of postgress container> bash
```
Steps 2: connect to postgres

```bash
psql -h localhost -U postgres
```

Steps 3: Configure postgresql 

```sql
    CREATE USER <username>  WITH PASSWORD '<password>';
    CREATE DATABASE DB;
    GRANT ALL ON SCHEMA public TO <username> ;
    ALTER DATABASE db OWNER TO <username>;

```

Steps 4: Congratulations! 🎉 You did it.