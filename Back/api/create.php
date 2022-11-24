<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Methods: POST');
  header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

  include_once '../config/Database.php';
  include_once '../models/Student.php';

  // Instantiate DB & connect
  $database = new Database();
  $db = $database->connect();

  // Instantiate blog post object
  $student = new Student($db);

  // Get raw posted data
  $data = json_decode(file_get_contents("php://input"));
  
  $student->firstname = $data->firstname;
  $student->lastname = $data->lastname;
  $student->rollno = $data->rollno;
  
 
  

  // Create student
  if($student->create()) {
    echo json_encode(
      array('message' => 'Student Created')
    );
  } else {
    echo json_encode(
      array('message' => 'Student Not Created')
    );
  }