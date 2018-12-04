<?php
	session_start();

	require_once 'inc/i_config.php';
	require_once 'inc/i_db.php';
?>

<!doctype html>
<html lang="en">
	<head>
		<?php include_once 'inc/i_head.php';?>
	</head>
	<body>
		
		<section id="pageContent">
			
			<form id="myFormID" method="post">
				
			<div class="container">
				<div class="row">
					<div class="col-6">
						<label for"fnameField" class="fieldlabel">First Name <span class="required">*</span></label>
						<input type="text" id="fnameField" name="fnameField" data-req="1">
					</div>
					<div class="col-6">
						<label for"lnameField" class="fieldlabel">First Name <span class="required">*</span></label>
						<input type="text" id="lnameField" name="lnameField" data-req="1">
					</div>
				</div>
				<div class="row">
					<div class="col-12">
						<label for"numField" class="fieldlabel">Custom Match (numbers only)</label>
						<input type="text" id="numField" name="numField" data-match="^[0-9]+$" data-req="0">
					</div>
				</div>
				<div class="row">
					<div class="col-12">
						<label for"phoneField" class="fieldlabel">Phone Number <span class="required">*</span></label>
						<input type="tel" id="phoneField" name="phoneField" placeholder="123-456-7890" data-req="1">
					</div>
				</div>
				<div class="row">
					<div class="col-12">
						<label for"emailField" class="fieldlabel">Email Address <span class="required">*</span></label>
					<input type="email" id="emailField" name="emailField" placeholder="Enter a valid email address" data-req="1">
					</div>
				</div>
				<div class="row">
					<div class="col-6">
						<label for"radioSet1_box" class="fieldlabel">Radi Button Set: <span class="required">*</span></label>
						<div id="radioSet1_box" class="styled-multicheck" data-req="1">
							<input type="radio" name="radioSet1" value="0"> <span class="check_label">Radio label one</span><br>
							<input type="radio" name="radioSet1" value="1"> <span class="check_label">Radio label two</span><br>
						</div>
					</div>
					<div class="col-6">
						<label for"checkSet1_box" class="fieldlabel">Checkbox Set: <span class="required">*</span></label>
						<div id="checkSet1_box" class="styled-multicheck" data-req="1">
							<input type="checkbox" name="checkSet1" value="0"> <span class="check_label">Checkbox label one</span><br>
							<input type="checkbox" name="checkSet1" value="0"> <span class="check_label">Checkbox label two</span><br>
							<input type="checkbox" name="checkSet1" value="0"> <span class="check_label">Checkbox label three</span><br>
							<input type="checkbox" name="checkSet1" value="0"> <span class="check_label">Checkbox label four</span><br>
							<input type="checkbox" name="checkSet1" value="0"> <span class="check_label">Checkbox label five</span><br>
							<input type="checkbox" name="checkSet1" value="0"> <span class="check_label">Checkbox label six</span><br>
							<input type="checkbox" name="checkSet1" value="0"> <span class="check_label">Checkbox label seven</span><br>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-6">
						<label for"fav_color" class="fieldlabel">What is your favorite color? <span class="required">*</span></label>
						<div id="fav_color_box" class="styled-select">
							<select id="fav_color" name="fav_color" data-req="1">
								<option value=''>--</option>
								<option value="Red">Red</option>
								<option value="Green">Green</option>
								<option value="Blue">Blue</option>
							</select>
						</div>
					</div>
				</div>
				<div class="row" style="position:relative;">
					<div class="col-6">
						<label for"password1" class="fieldlabel">Password <span class="required">*</span></label>
						<input type="password" id="password" name="password" data-req="1">
					</div>
					<div class="col-6">
						<label for"password2" class="fieldlabel">Confirm Password <span class="required">*</span></label>
						<input type="password" id="password_confirm" name="password_confirm" data-req="1">
					</div>
					<div class="pw_help">
						<span>Password requirements:</span>
						<ul>
							<li id="letter" class="pw_help_invalid">At least <strong>one letter</strong></li>
							<li id="capital" class="pw_help_invalid">At least <strong>one capital letter</strong></li>
							<li id="number" class="pw_help_invalid">At least <strong>one number</strong></li>
							<li id="character" class="pw_help_invalid">At least <strong>one special character</strong></li>
							<li id="length" class="pw_help_invalid">Be at least <strong>8 characters</strong></li>
						</ul>
					</div>
				</div>
				
				<div class="form_msg"></div>
	
				<div class="row">
					<div class="col-6">
						<div class="form_submit">Submit</div>
					</div>
				</div>
			</div>
			
			</form>
			
		</section>
		
		<?php include_once 'inc/i_foot.php';?>
	</body>
</html>