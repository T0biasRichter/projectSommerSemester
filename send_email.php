<?php
require 'config.php';
require 'vendor/autoload.php'; // Pfade anpassen, wenn notwendig

use SendGrid\Mail\Mail;

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Formulardaten sammeln
    $anfrage = $_POST['anfrage'];

    $ersatzteile = '';
    if ($anfrage === 'Motorenersatzteile') {
        $ersatzteile = $_POST['ersatzteile'];
    }

    $teile = '';
    if ($anfrage === 'Zylinderkopf') {
        $teile = implode(', ', $_POST['teile']);
    }

    $turboladerHersteller = '';
    $fahrzeugHersteller = '';
    if ($anfrage === 'Turbolader') {
        $turboladerHersteller = $_POST['turboladerHersteller'];
        $fahrzeugHersteller = $_POST['fahrzeugHersteller'];
    }

    $marke = $_POST['marke'];
    $typ = $_POST['typ'];
    $baujahr = $_POST['baujahr'];
    $motorkennbuchStabe = $_POST['motorkennbuchStabe'];
    $hubraum = $_POST['hubraum'];
    $leistung = $_POST['leistung'];

    $firma = $_POST['Firma'];
    $kontakt = $_POST['kontakt'];
    $telefon = $_POST['Telefon'];
    $fax = $_POST['Fax'];
    $email = $_POST['Email'];
    $bemerkungen = $_POST['Bemerkungen'];

    // E-Mail-Inhalte erstellen
    $to = 'empfaenger@example.com'; // Empfänger-E-Mail-Adresse hier eintragen
    $subject = 'Anfrage: ' . $anfrage;

    $message = "Anfrage: $anfrage\n\n";

    if ($anfrage === 'Motorenersatzteile') {
        $message .= "Benötigte Teile:\n$ersatzteile\n\n";
    }

    if ($anfrage === 'Zylinderkopf') {
        $message .= "Benötigte Teile:\n$teile\n\n";
    }

    if ($anfrage === 'Turbolader') {
        $message .= "Artikelnummer Turbolader-Hersteller: $turboladerHersteller\n";
        $message .= "Artikelnummer Fahrzeughersteller: $fahrzeugHersteller\n\n";
    }

    $message .= "Fahrzeughersteller: $marke\n";
    $message .= "Typ: $typ\n";
    $message .= "Baujahr/Erstzulassung: $baujahr\n";
    $message .= "Motorkennbuchstabe: $motorkennbuchStabe\n";
    $message .= "Hubraum in ccm: $hubraum\n";
    $message .= "KW/PS: $leistung\n\n";

    $message .= "Firma: $firma\n";
    $message .= "Kontaktperson: $kontakt\n";
    $message .= "Telefon: $telefon\n";
    $message .= "Fax: $fax\n";
    $message .= "E-Mail: $email\n";
    $message .= "Bemerkungen:\n$bemerkungen\n";

    // SendGrid-Konfiguration
    $sendgrid = new \SendGrid($sendgridApiKey);

    $email = new Mail();
    $email->setFrom($email);
    $email->setSubject($subject);
    $email->addTo($to);
    $email->addContent("text/plain", $message);

    try {
        $response = $sendgrid->send($email);
        if ($response->statusCode() === 202) {
            echo 'Die E-Mail wurde erfolgreich gesendet.';
        } else {
            echo 'Beim Versenden der E-Mail ist ein Fehler aufgetreten.';
        }
    } catch (Exception $e) {
        echo 'Beim Versenden der E-Mail ist ein Fehler aufgetreten: ' . $e->getMessage();
    }
}
?>
