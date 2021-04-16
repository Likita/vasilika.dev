<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization');
header('Content-Type: application/json');

if($_GET['answer'] == 'WIN') {
  $data = [ 'url' => 'https://vasilika.ru/presentations/the-fifth-task.html' ];
}
echo json_encode($data);
?>
