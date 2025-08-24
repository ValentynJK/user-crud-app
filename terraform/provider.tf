terraform {
  required_providers {
    postgres = {
      source  = "cyrilgdn/postgres"
      version = "~> 1.0"
    }
  }

  required_version = ">= 0.12"
}

provider "postgres" {
  host     = var.db_host
  port     = var.db_port
  username = var.db_username
  password = var.db_password
  database = var.db_name
}