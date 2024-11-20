-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `mydb` ;

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`Products`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Products` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Products` (
  `idProducts` INT NOT NULL AUTO_INCREMENT,
  `desc` VARCHAR(3000) NULL,
  `name` VARCHAR(200) NULL,
  `price` DECIMAL(3,2) NULL,
  `quantity` INT NULL,
  PRIMARY KEY (`idProducts`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Accounts`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Accounts` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Accounts` (
  `idAccounts` INT NOT NULL AUTO_INCREMENT,
  `type` VARCHAR(45) NULL,
  `email_address` VARCHAR(45) NULL,
  `first_name` VARCHAR(45) NULL,
  `last_name` VARCHAR(45) NULL,
  `password` VARCHAR(35) NULL,
  PRIMARY KEY (`idAccounts`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Reviews`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Reviews` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Reviews` (
  `idReviews` INT NOT NULL AUTO_INCREMENT,
  `desc` VARCHAR(45) NULL,
  `date` VARCHAR(25) NULL,
  `Points_idPoints` INT NOT NULL,
  `point_quantity` VARCHAR(45) NULL,
  `points_date` VARCHAR(45) NULL,
  `Accounts_idAccounts` INT NOT NULL,
  `Products_idProducts` INT NOT NULL,
  PRIMARY KEY (`idReviews`),
  INDEX `fk_Reviews_Accounts1_idx` (`Accounts_idAccounts` ASC) VISIBLE,
  INDEX `fk_Reviews_Products1_idx` (`Products_idProducts` ASC) VISIBLE,
  CONSTRAINT `fk_Reviews_Accounts1`
    FOREIGN KEY (`Accounts_idAccounts`)
    REFERENCES `mydb`.`Accounts` (`idAccounts`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Reviews_Products1`
    FOREIGN KEY (`Products_idProducts`)
    REFERENCES `mydb`.`Products` (`idProducts`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Orders`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Orders` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Orders` (
  `idOrders` INT NOT NULL AUTO_INCREMENT,
  `product` VARCHAR(45) NULL,
  `quantity` INT NULL,
  `pay_method` VARCHAR(55) NULL,
  PRIMARY KEY (`idOrders`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Address`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Address` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Address` (
  `idAddress` INT NOT NULL AUTO_INCREMENT,
  `street_address` VARCHAR(80) NULL,
  `city` VARCHAR(45) NULL,
  `state` VARCHAR(2) NULL,
  `postal_code` VARCHAR(5) NULL,
  `type` VARCHAR(10) NULL,
  `Accounts_idAccounts` INT NOT NULL,
  `Orders_idOrders` INT NOT NULL,
  PRIMARY KEY (`idAddress`),
  INDEX `fk_Address_Accounts_idx` (`Accounts_idAccounts` ASC) VISIBLE,
  INDEX `fk_Address_Orders1_idx` (`Orders_idOrders` ASC) VISIBLE,
  CONSTRAINT `fk_Address_Accounts`
    FOREIGN KEY (`Accounts_idAccounts`)
    REFERENCES `mydb`.`Accounts` (`idAccounts`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Address_Orders1`
    FOREIGN KEY (`Orders_idOrders`)
    REFERENCES `mydb`.`Orders` (`idOrders`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Order_items`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Order_items` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Order_items` (
  `idOrder_items` INT NOT NULL AUTO_INCREMENT,
  `item_price` VARCHAR(45) NULL,
  `Orders_idOrders` INT NOT NULL,
  `Products_idProducts` INT NOT NULL,
  PRIMARY KEY (`idOrder_items`),
  INDEX `fk_Order_items_Orders1_idx` (`Orders_idOrders` ASC) VISIBLE,
  INDEX `fk_Order_items_Products1_idx` (`Products_idProducts` ASC) VISIBLE,
  CONSTRAINT `fk_Order_items_Orders1`
    FOREIGN KEY (`Orders_idOrders`)
    REFERENCES `mydb`.`Orders` (`idOrders`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Order_items_Products1`
    FOREIGN KEY (`Products_idProducts`)
    REFERENCES `mydb`.`Products` (`idProducts`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
