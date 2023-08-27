<?php

//function content($id)
//{
//
//    include "connection.php";
//
//    $selectContent = mysqli_query($con, "SELECT * FROM contents where id='$id'");
//
//    $fetchContent = mysqli_fetch_array($selectContent);
//
//    $desc = str_replace("<p>", "", base64_decode($fetchContent['content']));
//    $desc = str_replace("</p>", "", $desc);
//
//    if (@$_SESSION['user_role'] == 1) {
//        return "<span class='content$id'>" . $desc . "</span>" . "<label class='topcorner fa fa-edit cursor content-x cursor ml-2' style='z-index:100;font-size: 14px; '  title='Edit' id='content$id'>//</label>";
//    } else {
//        return base64_decode($fetchContent['content']);
//
//    }
//
//}

//function img($id)
//{
//
//    include "connection.php";
//    $selectImg = mysqli_query($con, "SELECT * FROM page_image where id='$id'");
//    $fetchContent = mysqli_fetch_array($selectImg);
//
//    if (@$_SESSION['user_role'] == 1) {
//        // return ($fetchContent['jp_content'])."<label class='topcorner fa fa-edit content-x cursor' id='content$id'></label>";
//        return array($fetchContent['image'], " class='image-x cursor'", " id='img$id' style=' position:relative; '", "id='img$id'", "image-x cursor");
//
//    } else {
//        return array($fetchContent['image'], '', '');
//
//    }
//
//}




// GET USER BROWSER DETAILS

//function getBrowser() { 
//  $u_agent = $_SERVER['HTTP_USER_AGENT'];
//  $bname = 'Unknown';
//  $platform = 'Unknown';
//  $version= "";
//
//  //First get the platform?
//  if (preg_match('/linux/i', $u_agent)) {
//    $platform = 'linux';
//  }elseif (preg_match('/macintosh|mac os x/i', $u_agent)) {
//    $platform = 'mac';
//  }elseif (preg_match('/windows|win32/i', $u_agent)) {
//    $platform = 'windows';
//  }
//
//  // Next get the name of the useragent yes seperately and for good reason
//  if(preg_match('/MSIE/i',$u_agent) && !preg_match('/Opera/i',$u_agent)){
//    $bname = 'Internet Explorer';
//    $ub = "MSIE";
//  }elseif(preg_match('/Firefox/i',$u_agent)){
//    $bname = 'Mozilla Firefox';
//    $ub = "Firefox";
//  }elseif(preg_match('/OPR/i',$u_agent)){
//    $bname = 'Opera';
//    $ub = "Opera";
//  }elseif(preg_match('/Chrome/i',$u_agent) && !preg_match('/Edge/i',$u_agent)){
//    $bname = 'Google Chrome';
//    $ub = "Chrome";
//  }elseif(preg_match('/Safari/i',$u_agent) && !preg_match('/Edge/i',$u_agent)){
//    $bname = 'Apple Safari';
//    $ub = "Safari";
//  }elseif(preg_match('/Netscape/i',$u_agent)){
//    $bname = 'Netscape';
//    $ub = "Netscape";
//  }elseif(preg_match('/Edge/i',$u_agent)){
//    $bname = 'Edge';
//    $ub = "Edge";
//  }elseif(preg_match('/Trident/i',$u_agent)){
//    $bname = 'Internet Explorer';
//    $ub = "MSIE";
//  }
//
//  // finally get the correct version number
//  $known = array('Version', $ub, 'other');
//  $pattern = '#(?<browser>' . join('|', $known) .
//')[/ ]+(?<version>[0-9.|a-zA-Z.]*)#';
//  if (!preg_match_all($pattern, $u_agent, $matches)) {
//    // we have no matching number just continue
//  }
//  // see how many we have
//  $i = count($matches['browser']);
//  if ($i != 1) {
//    //we will have two since we are not using 'other' argument yet
//    //see if version is before or after the name
//    if (strripos($u_agent,"Version") < strripos($u_agent,$ub)){
//        $version= $matches['version'][0];
//    }else {
//        $version= $matches['version'][1];
//    }
//  }else {
//    $version= $matches['version'][0];
//  }
//
//  // check if we have a number
//  if ($version==null || $version=="") {$version="?";}
//
//  return array(
//    'userAgent' => $u_agent,
//    'name'      => $bname,
//    'version'   => $version,
//    'platform'  => $platform,
//    'pattern'    => $pattern
//  );
//} 

 

function pageTitle($pageTitle){
    return $pageTitle;
}

?>















