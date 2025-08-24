variable "db_name" {
  description = "The name of the PostgreSQL database"
  type        = string
}

variable "db_user" {
  description = "The username for the PostgreSQL database"
  type        = string
}

variable "db_password" {
  description = "The password for the PostgreSQL database"
  type        = string
}

variable "db_host" {
  description = "The host of the PostgreSQL database"
  type        = string
  default     = "localhost"
}

variable "db_port" {
  description = "The port for the PostgreSQL database"
  type        = number
  default     = 5432
}