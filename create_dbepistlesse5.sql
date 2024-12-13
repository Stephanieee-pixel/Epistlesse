-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8mb3 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`accounts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`accounts` (
  `idAccounts` INT NOT NULL AUTO_INCREMENT,
  `type` VARCHAR(45) NULL DEFAULT NULL,
  `email_address` VARCHAR(45) NULL DEFAULT NULL,
  `first_name` VARCHAR(45) NULL DEFAULT NULL,
  `last_name` VARCHAR(45) NULL DEFAULT NULL,
  `password` VARCHAR(35) NULL DEFAULT NULL,
  PRIMARY KEY (`idAccounts`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mydb`.`address`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`address` (
  `idAddress` INT NOT NULL AUTO_INCREMENT,
  `street_address` VARCHAR(80) NULL DEFAULT NULL,
  `city` VARCHAR(45) NULL DEFAULT NULL,
  `state` VARCHAR(2) NULL DEFAULT NULL,
  `postal_code` VARCHAR(5) NULL DEFAULT NULL,
  `type` VARCHAR(10) NULL DEFAULT NULL,
  `Accounts_idAccounts` INT NOT NULL,
  PRIMARY KEY (`idAddress`),
  INDEX `fk_Address_Accounts_idx` (`Accounts_idAccounts` ASC) VISIBLE,
  CONSTRAINT `fk_Address_Accounts`
    FOREIGN KEY (`Accounts_idAccounts`)
    REFERENCES `mydb`.`accounts` (`idAccounts`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mydb`.`orders`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`orders` (
  `idOrders` INT NOT NULL AUTO_INCREMENT,
  `pay_method` VARCHAR(55) NULL DEFAULT NULL,
  `Accounts_idAccounts` INT NOT NULL,
  `orderStatus` TINYINT NOT NULL DEFAULT '0',
  `dateOrdered` DATE NULL DEFAULT NULL,
  PRIMARY KEY (`idOrders`),
  INDEX `fk_Orders_Accounts1_idx` (`Accounts_idAccounts` ASC) VISIBLE,
  CONSTRAINT `fk_Orders_Accounts1`
    FOREIGN KEY (`Accounts_idAccounts`)
    REFERENCES `mydb`.`accounts` (`idAccounts`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mydb`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`products` (
  `idProducts` INT NOT NULL AUTO_INCREMENT,
  `proDesc` VARCHAR(3000) NULL DEFAULT NULL,
  `name` VARCHAR(200) NULL DEFAULT NULL,
  `price` DECIMAL(3,2) NULL DEFAULT NULL,
  `quantity` INT NULL DEFAULT NULL,
  PRIMARY KEY (`idProducts`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mydb`.`order_items`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`order_items` (
  `idOrder_items` INT NOT NULL AUTO_INCREMENT,
  `item_price` VARCHAR(45) NULL DEFAULT NULL,
  `Orders_idOrders` INT NOT NULL,
  `Products_idProducts` INT NOT NULL,
  `quantity` INT NOT NULL,
  PRIMARY KEY (`idOrder_items`),
  INDEX `fk_Order_items_Orders1_idx` (`Orders_idOrders` ASC) VISIBLE,
  INDEX `fk_Order_items_Products1_idx` (`Products_idProducts` ASC) VISIBLE,
  CONSTRAINT `fk_Order_items_Orders1`
    FOREIGN KEY (`Orders_idOrders`)
    REFERENCES `mydb`.`orders` (`idOrders`),
  CONSTRAINT `fk_Order_items_Products1`
    FOREIGN KEY (`Products_idProducts`)
    REFERENCES `mydb`.`products` (`idProducts`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mydb`.`reviews`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`reviews` (
  `idReviews` INT NOT NULL AUTO_INCREMENT,
  `desc` VARCHAR(45) NULL DEFAULT NULL,
  `date` VARCHAR(25) NULL DEFAULT NULL,
  `Points_idPoints` INT NOT NULL,
  `point_quantity` VARCHAR(45) NULL DEFAULT NULL,
  `points_date` VARCHAR(45) NULL DEFAULT NULL,
  `Accounts_idAccounts` INT NOT NULL,
  `Products_idProducts` INT NOT NULL,
  PRIMARY KEY (`idReviews`),
  INDEX `fk_Reviews_Accounts1_idx` (`Accounts_idAccounts` ASC) VISIBLE,
  INDEX `fk_Reviews_Products1_idx` (`Products_idProducts` ASC) VISIBLE,
  CONSTRAINT `fk_Reviews_Accounts1`
    FOREIGN KEY (`Accounts_idAccounts`)
    REFERENCES `mydb`.`accounts` (`idAccounts`),
  CONSTRAINT `fk_Reviews_Products1`
    FOREIGN KEY (`Products_idProducts`)
    REFERENCES `mydb`.`products` (`idProducts`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
