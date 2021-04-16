<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization');
header('Content-Type: application/json');

if($_GET['answer'] == '21') {
  $data = [ 'url' => 'https://vasilika.ru/examples/happy-birthday!.html' ];
} else {
  $data = [ 'text' => 'Wrong answer. We were very close to each other...' ];
}
echo json_encode($data); 
?>
