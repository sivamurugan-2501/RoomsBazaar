<!Doctype HTML>
<html>
	<head>
			<title>Property Portal</title>
			<link href="assets/css/libs/bootstrap.min.css" rel="stylesheet">
			<script type="text/javascript" src="assets/js/libs/jquery-3.2.1.min"></script>
			<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
			<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
			<style>
				body{
					background:  #ffffff;
					font-family: 'Calibri'
				}
				nav{
					background: url(assets/images/navbar-menu.png) !important;
					border-bottom: 4px solid #9c9c9c
				}
				nav ul{
					list-style: none !important;
				    list-style-type: none !important;
				    width: 100% !important;
				    display: block !important;
				    padding: 0 150px !important;
				}
				nav ul li{
					float: 	left; !important;
				    color: #FFF !important;
				    text-align: center !important;
				    padding: 0 16px !important;
				    text-decoration: none !important;
				    padding-right: 20px !important;
   					padding-left: 20px !important;
   					margin: 0 5px !important;
   					font-weight: 500;
				}
				.nav-container{
					background: url(assets/images/navbar-menu.png);
				    padding-left: 10%;
				    padding-right: 10%;
				}

				nav ul li a{
					color : #fff !important;
					text-transform: uppercase;
				}

				nav ul li.active{
					color: #000000 !important;
				    background: #ededed;
				}

				nav ul li.active a{
					color :#000000 !important;
				}

				nav ul li:hover, nav ul li a:hover{
				    background: #ededed;
				    color: #000000 !important;
				}

				nav ul li:hover a{
				    color: #000000 !important;
				    text-decoration: none !important;
				}

				.navbar{
					padding: 0.8rem 1rem 0rem  !important;
				}

				#main{
					padding: 0rem 8rem 0rem  !important;
				}
				#header{
					padding: 22px 7em;
				}
				#header .logo img{
					width :200px;
				}
				#header img{
					margin-right: -4px !important;
				}
				#header .sign img.sign-up{
					width: 99px;
				}
				#header .sign img.sign-in{
					width: 83px;
				}

				#content{
					padding: 0 3.5em;
				}
				#content .slider{
					border-top:6px solid #333333;
				}

				#content .slider img{
					width :100%;
				}

				#search-box-holder{
					background: rgba(0, 0, 0, 0.76);
				    position: absolute;
				    width: 97%;
				    height: 130px;
				    padding: 1em 2.5em;
				}

				#search-box-holder .heading{
					text-align: center;
				    color: #FFF;
				    padding: 0px 0 10px !important;
				    font-size: 18px;
				}

				div#search-box-holder .quick-search-box {
					width: 85%;
				    height: 35px;
				    background: #fff;
				    margin: 0 65px;
				    position: static;
				}

				div#search-box-holder .quick-search-box .icon{
					float: left;
    				padding: 3px 5px;
				}
				div#search-box-holder .quick-search-box .icon img{
					width: 20px;
				}

				div#search-box-holder .quick-search-box .input-box{
					float: left;
   					padding: 0px 0;
   						width: 45%;
				}

				div#search-box-holder .quick-search-box .input-box input{
					height: 35px;
					border: none;
				}

				#property-list-outer{
					padding: 5px 15px;
				}

				#property-list-outer div.property-list-inner{
					padding: 2px 30px;
				    border-right: 1px solid #efefef;
				   /* background: url('assets/images/tab-bg.jpg') */
				}

				#property-list-outer div.property-list-inner:last-child{
					border-right : 1px solid #ffffff;
				}

				#property-list-outer .property-list-inner .title{
					text-align: center;
				    font-weight: 600;
				    font-size: 18px;
				    margin-bottom: 8px;
				}

				#property-list-outer .property-list-inner .information-box{
			 		padding: 10px 5px;
				}

				#property-list-outer .property-list-inner .information-box .pro-name{
					color: #d92561;
				    font-weight: 600;
				    text-transform: uppercase;
				    text-align: center;
				}

				#property-list-outer .property-list-inner .information-box .pro-details{
					font-weight:600;
					text-align : center;
				}

				#property-list-outer .property-list-inner .information-box .pro-details .other{
					font-weight: 500
				}

			</style>
	</head>
	<body>
		<!-- Navigation menu starts -->
		<div class="container-fluid nav-container">
			<nav class="navbar navbar-default">
			   <div class="nav-holder">
				   <ul class="nav navbar-nav">
				      <li class="active"><a href="#">Home</a></li>
				      <li><a href="#">Paying Guest</a></li>
				      <li><a href="#">Buy</a></li>
				      <li><a href="#">Sell</a></li>
				      <li><a href="#">New Projects</a></li>
				      <li><a href="#">CUSTOMER SERVICE</a></li>
				    </ul>
				</div>
			</nav>
		</div>
		<!-- Navigation menu ends -->

		
		<div class="container-fluid" id="main" style="">
			<!-- Header Div -->
			<div class="row" id="header" style="">
				<div class="col-md-5 logo">
					<img src="assets/images/logo.jpg">
				</div>
				<div class="col-md-4">
					<img src="assets/images/facebook.jpg">
					<img src="assets/images/twitter.jpg">
					<img src="assets/images/google-plus.jpg">
					<img src="assets/images/in.jpg">
				</div>
				<div class="col-md-3 sign">
					<img src="assets/images/signup.jpg" class="sign-in">
					<img src="assets/images/login.jpg" class="sign-up">
				</div>
			</div>
			<!-- Header Ends -->

			<!-- Main Content Starts -->
			<div class="row" id="content">
				<div class="col-md-12">
					<div id="search-box-holder">
						<div class="heading">
							INDIA'S FIRST PAYING GUEST SPEACLIZED PROPERTY SEARCH
						</div>
						<div class="quick-search-box">
							<form>
								<div class="icon">
									<img src="assets/images/location-popup.png">
								</div>
								<div class="input-box">
									<input type="text" class="form-control" placeholder="Location, Property name">
								</div>
							</form>
						</div>
					</div>
					<div class="slider">
						<img src="assets/images/slide01.jpg">
					</div>
					<div class="clear">&nbsp;</div>

					<div class="row" id="property-list-outer">
						<div class="col-md-4 property-list-inner">
							<div class="title"><img src="assets/images/paying-guest.png" style="width:28px">&nbsp;PAYING GUEST</div>
							<img src="assets/images/paying-guest.jpg">
							<div class="information-box">
								<div class="pro-name">
									Kalpataru Apartments
								</div>
								<div class="pro-details">
									<div> 
										 <span class="fa fa-map-marker"></span>
										 Mumbai
									</div>
									<div class="other">
										2 BHK, 2 Bathrooms, 1st Floor
									</div>
									<div class="other">
										4 Members Sharing 
									</div>
									<div class="pro-price">
										<span class="fa fa-rupee"> 20,000 
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-4 property-list-inner">
							<div class="title"><img src="assets/images/properties.png" style="width:28px">&nbsp;HOT PROPERTIES</div>
							<img src="assets/images/new-projects.jpg">
							<div class="information-box">
								<div class="pro-name">
									Kalpataru Apartments
								</div>
								<div class="pro-details">
									<div> 
										 <span class="fa fa-map-marker"></span>
										 Mumbai
									</div>
									<div class="other">
										2 BHK, 2 Bathrooms,  1st Floor
									</div>
									<div class="other">
										1000 SQ FT
									</div>
									<div class="pro-price">
										<span class="fa fa-rupee"> 20,000 
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-4 property-list-inner">
							<div class="title"><img src="assets/images/new-project.png" style="width:28px">&nbsp;NEW PROJECTS</div>
							<img src="assets/images/rentandsale.jpg">
							<div class="information-box">
								<div class="pro-name">
									Kalpataru Apartments
								</div>
								<div class="pro-details">
									<div> 
										 <span class="fa fa-map-marker"></span>
										 Mumbai
									</div>
									<div class="other">
										2 BHK 2 Bathrooms  1st Floor
									</div>
									<div class="other">
										1000 SQ FT 
									</div>
									<div class="pro-price">
										<span class="fa fa-rupee"> 20,000 
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- Main Content Ends -->
		</div> 
		
	</body>
</html>