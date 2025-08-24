output "database_connection_string" {
  value = "postgres://${var.db_username}:${var.db_password}@${var.db_host}:${var.db_port}/${var.db_name}"
}