<?php
    class Student{
        //DB stuff
        private $conn;
        private $table="students";

        //Student Properties
        public $firstname;
        public $lastname;
        public $rollno;
        
        //Constructor with DB
        public function __construct($db){
            $this->conn=$db;
        }

        //Get Students

        public function read(){
            //Create query
            $query='SELECT firstname,lastname,rollno FROM  ' . $this->table . ' ';
        

        //Prepare statement
        $stmt = $this->conn->prepare($query);

        //Execute query
        $stmt->execute();

        return $stmt;
        }


        // Create Student
        public function create() {
            // Create query
            $query = 'INSERT INTO ' . $this->table . ' SET firstname = :firstname, lastname = :lastname,rollno = :rollno';

            // Prepare statement
            $stmt = $this->conn->prepare($query);


            // Bind data
            $stmt->bindParam(':firstname', $this->firstname);
            $stmt->bindParam(':lastname', $this->lastname);
            $stmt->bindParam(':rollno', $this->rollno);

            // Execute query
            if($stmt->execute()) {
            return true;
        }

        // Print error if something goes wrong
        printf("Error: %s.\n", $stmt->error);

        return false;
    }


        //Update Student
        public function update() {
            // Create query
            $query = 'UPDATE ' . $this->table . ' SET firstname = :firstname, lastname = :lastname,rollno = :rollno
            WHERE  rollno = :id ';

            // Prepare statement
            $stmt = $this->conn->prepare($query);


            // Bind data
            $stmt->bindParam(':firstname', $this->firstname);
            $stmt->bindParam(':lastname', $this->lastname);
            $stmt->bindParam(':rollno', $this->rollno);
            $stmt->bindParam(':id', $this->id);

            // Execute query
            if($stmt->execute()) {
            return true;
        }

        // Print error if something goes wrong
        printf("Error: %s.\n", $stmt->error);

        return false;
    }

         // Delete Student
        public function delete() {
            // Create query
            $query = 'DELETE FROM ' . $this->table . ' WHERE rollno = :id';

            // Prepare statement
            $stmt = $this->conn->prepare($query);

            // Bind data
            $stmt->bindParam(':id', $this->id);

            // Execute query
            if($stmt->execute()) {
            return true;
            }

            // Print error if something goes wrong
            printf("Error: %s.\n", $stmt->error);

            return false;
    }

    }