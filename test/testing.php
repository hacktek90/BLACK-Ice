<?php
// Basic PHP test

echo "<h1>PHP is working ✅</h1>";

// Show current date & time
date_default_timezone_set("Asia/Kolkata");
echo "<p>Current Time: " . date("Y-m-d H:i:s") . "</p>";

// Show server info
echo "<p>Server: " . $_SERVER['SERVER_NAME'] . "</p>";

// Show PHP version
echo "<p>PHP Version: " . phpversion() . "</p>";
?>
