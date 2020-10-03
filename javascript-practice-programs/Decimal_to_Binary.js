<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Binary to Decimal with Different Approach</title>
</head>

<body>
    <script>
        var decimal = prompt("enter decimal number")
        var binary = []


        while (decimal > 0) {

            if (decimal % 2 != 0) {
                binary.push(1)
                decimal = (decimal - 1) / 2
            } else {
                binary.push(0)
                decimal = (decimal) / 2
            }

        }

        binary = binary.reverse()
        binary = binary.join("")
        document.write(binary)
        
    </script>
</body>

</html>
