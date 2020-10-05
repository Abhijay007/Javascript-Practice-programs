<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Star pattern 2</title>
</head>

<body style="font-family: monospace;font-size: xx-large;">
    <script>

        function cm_to_m(value) {
            let convert = 100
            return value / convert
        }

        // Inverse
        function m_to_cm(value) {
            let convert = 100
            return value * convert
        }

        document.write("M to CM : " + m_to_cm(1)+ "<br/>")
    
        document.write("CM to M : " + cm_to_m(100))

    </script>
</body>

</html>
