<?php

require $_SERVER['DOCUMENT_ROOT'].'/cards/vendor/autoload.php';
 
$protocol = ((!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] != 'off') || $_SERVER['SERVER_PORT'] == 443) ? "https://" : "http://";
$url = $protocol. $_SERVER['HTTP_HOST']."/";

$con = mysqli_connect('localhost', 'gcshocom_mcs', 'pakistan1987', 'gcshocom_pay') or die('Database Not Connected');

if(isset($_GET['order_id'])){
$orderId = base64_decode($_GET['order_id']);
} else if(isset($_GET['orderno'])){
    
    $orderno =  ($_GET['orderno']);
    $selectorder = mysqli_query($con,"SELECT id FROM orders WHERE orderno = '$orderno'");
    $fetchrder = mysqli_fetch_array($selectorder);
    $orderId = $fetchrder['id'];
}else{
    exit;
}

 
  
 
    $qry = "SELECT users.displayName , users.gender , cards.card_no , cards.exp_date , university.image as uniLogo , plan.title ,plan.value , orders.orderno FROM `orders` 
            JOIN users ON users.id = orders.user_id 
            JOIN cards ON cards.id = orders.card 
            JOIN university ON orders.university = university.id 
            JOIN plan ON plan.id = orders.plan 
            WHERE orders.id = '$orderId' AND orders.status = '1'";
    
    $select = mysqli_query($con,$qry);
    if(!$select){
        mysqli_error($con);
    }
    $fetch = mysqli_fetch_array($select);
    
    if($fetch['title'] == 'Basic'){
        $cardColor  = '#FFB000'; 
    }else if($fetch['title'] == 'Standard'){
         $cardColor  = '#3E3C92';
    }else if($fetch['title'] == 'Premium'){
         $cardColor  = '#086634';
    }
    
    $pdfName = 'GCS' . $fetch['card_no'] . '.pdf';
    $filename = $_SERVER['DOCUMENT_ROOT'].'/uploads/cards/'.$pdfName;

  
  ob_start();
?>

 <style>
        @page { 
            margin : 0px;
            padding : 0px; 
            
        }
        table{
            margin : 0px;
            padding : 0px; 
            
        }
        *{
            font-family:sans-serif;
            padding-bottom:0px;
            margin-bottom: 0px;   
            
        }
        body {
        margin: 0px;
        padding:0px;
        width: 100%;
        height: 100%;        
        }
        html { 
        width: 100%;
        height: 100%;v
        margin: 0px;
        padding:0px;
        }
        .card{ 
            position:relative;
            overflow:hidden;
            padding: 0px;
        }
        .card-header{
            padding:10px 0;
            height:40px;
            padding-top:7px;
        }
        .brandheaderlogo{
            width:250px;
            display:block; 
            margin-top:-5px;
        }
        .Universityheaderlogo{
            width:50px;
            float:right;
            display:block;
            margin-right:10px;
        }
        .card-body{
            width:100%;
            background:<?=$cardColor?>;
            padding:10 35px; 
            height:50px; 
            padding-top:20px; 
        }
        .cardNumber{
            background:#fff;
            width:240px;
            color:#63B04D;
            text-align:center;
            font-weight:700;
            font-size:20px;
            font-family:sans-serif;
            padding:10px;
            border-radius:10px;
        }
        .card-footer{
            height:50px; 
            /*background:yellow;*/
            padding-top:8px;
            padding-left:5px;
        }
        .footerh4{
            font-size:7px;
            font-weight:700;
            font-family:sans-serif;
            margin:0;
            
        }
        ol{
            font-size:5px;
            font-family:sans-serif;
             /*background:blue;*/
             padding-left:7px;
             margin-top:12px;
        }
    </style>
 
     <div class='card'>
         <div class="card-header">
             <table border='0' width='100' style="width:100%" cellpadding='0' cellspacing='0'>
                 <tr> 
                     <td style="width:70%;position:relative;"> 
                        <img src='<?=$url.'cards/img/LOGO.png'?>' class='brandheaderlogo'>
                     </td>
                     <td style="width:30%;position:relative; " >
                          <img src="<?=@$url.'uploads/university/'.$fetch['uniLogo']?>" style="
    height:50px;
" class=' '>
                     </td>
                 </tr>
             </table>
         </div>
         <div class="card-body">
             <div class='cardNumber'>
                  <?=$fetch['card_no']?>
             </div>
         </div>
         <div class="card-footer">
             <table border='0' style="width:100%;height:100%" cellpadding='0' cellspacing='0'>
                 <tr>
                     <td> 
                         <h4 class='footerh4'><?= ( $fetch['gender'] !=''? $fetch['gender'] == 'male'? 'Mr ' : 'Ms ' : '')  .$fetch['displayName'] .'`s ' .$fetch['title']?>  Plan</h4>
                         <h4 class='footerh4'>Value: PKR- <?=$fetch['value']?></h4>
                         <div style="margin-top:10px">
                             <span>
                                 <img style='width:7px;height:7px' src='<?=$url?>cards/img/globe.png' >
                             </span>
                            <span style='font-size:7px'>www.gcshopay.gcsho.com.pk </span>     
                        </div>
                     </td>  
                     <td >
                         
                           <div style="float:left;width:100px;"></div>
                         <div style="float:right;width:80px ">
                           <h4 class='footerh4'></h4>
                           <ol style="">
                               <li>Log in to PaperCut</li>
                               <li>Click Redeem Card</li>
                               <li>Enter the number above</li>
                               <li>Click the Redeem button</li>
                           </ol>
                           </div>
                     </td> 
                 </tr>
             </table>
         </div>
     </div>
 

<?php
$html = ob_get_contents();
ob_end_clean();
$message = $html;

use Dompdf\Dompdf;
$dompdf = new Dompdf();
$dompdf->loadHtml($message);

// Set paper size to business card size (3.5 x 2 inches)
$dompdf->setPaper(array(0, 0, 252, 150), 'portrait'); // 72 units per inch, 3.5 inches x 72 = 252, 2 inches x 72 = 144

$dompdf->set_option('isRemoteEnabled', true);
$dompdf->render();

// Generate a unique file name for the PDF

$file_to_save = $_SERVER['DOCUMENT_ROOT'].'/uploads/cards/' . $pdfName;
  if (!file_exists($filename)) {
      
// Save the PDF file on the server
file_put_contents($file_to_save, $dompdf->output());
  
    }
    $filename = basename($_SERVER['PHP_SELF']);
  
     if($filename != 'invoice.php'){
// JavaScript code to trigger the download when the document is ready
echo '<script>
    document.addEventListener("DOMContentLoaded", function() {
        var link = document.createElement("a");
        link.href = "' .$url.'/uploads/cards/'. $pdfName . '";
        link.download = "' . $pdfName . '";
        link.innerHTML = "Download";
        document.body.appendChild(link);
        link.click(); 
    });
</script>';
}




?>