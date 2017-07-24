<!DOCTYPE html>
<html lang="en">
	<head>	
		<meta charset="utf-8"> 
		<title>Online Portal</title>

		<!-- angularJS1 script  -->
		<script src = "https://ajax.googleapis.com/ajax/libs/angularjs/1.3.3/angular.min.js"></script>

		<!-- Bootstrap latest CDN -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

		<!-- jQuery library CDN -->
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

		<!-- Latest compiled Bootstrap JavaScript -->
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
		<style>
			.menu-nav{
				background :  #0089c0;
			}
			.logo-div a{
				color : #e2ffff !important	;
				text-transform:  uppercase;
			}

			ul.menu-ul{
				float:right :important;
			}
			ul.menu-ul li a{
				color : #e2ffff !important;
				padding: 15px 25px !important;
			}

			ul.menu-ul li a span{
				display: inline-block;
				padding-bottom: 2px;
				border-bottom: 2px solid #0089c0;
			}

			ul.menu-ul li a span:hover {
				 transition: 0.3s ease;
				border-bottom : 2px solid #e2ffff;
			}

			ul.menu-ul li.active a span {
				 transition: 0.3s ease;
				border-bottom : 2px solid #e2ffff !important;
			}

			div.banner {
				background-image : url('images/background.jpg');
				background-size: cover;
				width : 100%;
				height : 600px;
			}

			.navbar {
				margin-bottom : 0 !important;
			}

			.navbar-default .navbar-nav>.active a{
				background :  #0089c0 !important; 
			}
		</style>
	</head>
	<body>
		<nav class="navbar navbar-default menu-nav">
		  <div class="container-fluid menu-outer-div">
		    <div class="navbar-header logo-div">
		      <a class="navbar-brand" href="#">Property Zone</a>
		    </div>
		    <ul class="nav navbar-nav menu-ul" style="float:right">
		      <li class="active"><a href="#"><span>PG</span></a></li>
		      <li><a href="#"><span>BUY</span></a></li>
		      <li><a href="#"><span>SELL</span></a></li>
		      <li><a href="#"><span>RENT</span></a></li>
		    </ul>
		  </div>
		</nav>

		<div class="banner">

		</div>
		
	</body>
</html>