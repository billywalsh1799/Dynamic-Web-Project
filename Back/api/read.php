<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');

  include_once '../config/Database.php';
  include_once '../models/Student.php';

  // Instantiate DB & connect
  $database = new Database();
  $db = $database->connect();

  // Instantiate blog student object
  $student = new Student($db);

  // Blog student query
  $result = $student->read();
  // Get row count
  $num = $result->rowCount();

  // Check if any students
  if($num > 0) {
    // Student array
    //$students_arr = array();
    $students_arr['data'] = array();

    while($row = $result->fetch(PDO::FETCH_ASSOC)) {
      extract($row);

      $student_item = array(
        'firstname' => $firstname,
        'lastname' => $lastname,
        'rollno' => $rollno
      );

      // Push to "data"
      //array_push($students_arr, $student_item);
      array_push($students_arr['data'], $student_item);
    }

    // Turn to JSON & output
    echo json_encode($students_arr);

  } else {
    // No Students
    echo json_encode(
      array('message' => 'No Students Found')
    );
  }