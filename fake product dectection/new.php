<?php

$host = 'your_oracle_host';
$username = 'your_oracle_username';
$password = 'your_oracle_password';
$database = 'your_oracle_database_name';


$conn = oci_connect($username, $password, $host . '/' . $database);


if (!$conn) {
    $error = oci_error();
    echo "Failed to connect to Oracle: " . $error['message'];
    exit;
}


$name = $_POST['name'];
$class = $_POST['class'];


$sql = "INSERT INTO student10 (st_name, Class) VALUES (:name, :class)";


$stmt = oci_parse($conn, $sql);


oci_bind_by_name($stmt, ":name", $name);
oci_bind_by_name($stmt, ":class", $class);


if (oci_execute($stmt)) {
    echo "Data inserted successfully.";
} else {
    $error = oci_error($stmt);
    echo "Error: " . $error['message'];
}


oci_close($conn);
?>
