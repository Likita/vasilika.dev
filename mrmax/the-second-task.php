<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization');
header('Content-Type: application/json');

if($_GET['answer'] == 'recursion' || $_GET['answer'] == 'Recursion' || $_GET['answer'] == 'Рекурсия' || $_GET['answer'] == 'рекурсия') {
  $data = [ 'url' => 'https://vasilika.ru/js/the-third-task.html' ];
} else {
  $data = [ 'text' => 'Ask a friend for a hint.' ];
}
echo json_encode($data);
?>
