<?php
function get_json_input() {
  return json_decode(file_get_contents("php://input"), true) ?: [];
}

function json_error($msg, $code=400) {
  http_response_code($code);
  echo json_encode(["status"=>"error","message"=>$msg]);
  exit;
}
?>
