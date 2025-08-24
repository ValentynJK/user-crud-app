resource "postgresql_database" "pet_db" {
  name     = var.database_name
  owner    = var.database_user
}

resource "postgresql_role" "pet_user" {
  name     = var.database_user
  password = var.database_password
  login    = true
}

resource "postgresql_grant" "pet_db_grant" {
  database = postgresql_database.pet_db.name
  role     = postgresql_role.pet_user.name
  privileges = [
    "CONNECT",
    "CREATE",
    "TEMPORARY",
  ]
}

output "db_connection_string" {
  value = "postgres://${var.database_user}:${var.database_password}@${var.db_host}:${var.db_port}/${var.database_name}"
}