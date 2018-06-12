<?php
    $url = $_POST["rssURL"] ?? "";
    if ($url != "") {
        $monRSSDoc = new DOMDocument();
        if ($monRSSDoc->load($url)) {
            $xml = simplexml_load_string($monRSSDoc->saveXML());
            header('Content-Type: application/json');
            echo json_encode($xml);
        } else {
            echo "erreur de lecture";
        }
    } else {
        echo "URL vide";
    }
?>

