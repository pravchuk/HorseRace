<?php
	require('connect.php');							//connecting to database.. in other file no need to worry put this in every file
	
	$sql = "SELECT * FROM Horses where id='111'";	//writinq query 
	$result = $con->query($sql);					// executing it and storing results in results
	
	
	$obj = new stdClass();							// creating empty object

	
	
		
	if($row = $result->fetch_assoc()) {				// fetching 1 result -> expecting only 1 result.
		
		$obj->horseName = $row['horse'];			// creating new field in object and assigning it to horse hield in the current fetched row.
		$obj->recentRaces = array();				//this holds an array  so create array
		//write new sql query herre
		$sql = "SELECT * FROM raceshorses where id='111' order by date "; // check how to limit to 20. // new querry to populate array from different table
		$result1 = $con->query($sql);				//query again
		while($row1 = $result1->fetch_assoc())		
		{
			$obj1 = new stdClass();					//create new obj
			$obj1->raceid = row1["id"];				// assing attributes like earlier
			$obj1->position = row1["pos"];
			$obj->recentRaces[] = $obj1;			//append to the array of old obj
		}
	}
		

	$conn->close();
	echo json_encode($obj);
?>