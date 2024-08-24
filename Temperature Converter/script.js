function convert(){
        var fromunit = document.getElementById('From').value;
        var tounit = document.getElementById('To').value;
        var temperature = parseFloat(document.getElementById('temperature').value);

        var converttedValue;
        var resultUnit;

       

        switch (fromunit){
            case 'C':
                if (tounit === 'F'){
                    convertedValue = (temperature * 9/5) +32;
                    resultUnit = 'F';
                } else if (tounit === 'K'){
                    convertedValue = temperature + 273.15;
                    resultUnit = 'K';
                }else if (tounit === 'R'){
                    convertedValue = temperature + 273.15;
                    resultUnit = 'R';
                }else{
                    convertedValue = temperature;
                    resultUnit = 'C';
                }
                break;

                case 'F':
                if (tounit === 'C'){
                    convertedValue = (temperature -32) * 5/9;
                    resultUnit = 'C';
                } else if (tounit === 'K'){
                    convertedValue = (temperature -32) * 5/9 + 273.15;
                    resultUnit = 'K';
                }else if (tounit === 'R'){
                    convertedValue = temperature + 459.67;
                    resultUnit = 'R';
                }else{
                    convertedValue = temperature;
                    resultUnit = 'F';
                }
                break;

                case 'K':
                if (tounit === 'C'){
                    convertedValue = temperature - 273.15;
                    resultUnit = 'C';
                } else if (tounit === 'K'){
                    convertedValue = (temperature - 273.15) * 9/5 +32;
                    resultUnit = 'K';
                }else if (tounit === 'R'){
                    convertedValue = temperature * 9/5;
                    resultUnit = 'R';
                }else{
                    convertedValue = temperature;
                    resultUnit = 'K';
                }
                break;

               
        }

        document.getElementById('result').value = convertedValue.toFixed(2) + ' ' + resultUnit;
        
    }